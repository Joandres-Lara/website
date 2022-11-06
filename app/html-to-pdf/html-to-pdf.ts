import { launch } from "puppeteer";

export default class HtmlToPdf {
 /**
  * @type {string}
  */
 content;
 /**
  * 
  */
 buff;
 /**
  * 
  */
 constructor() {
  this.content = "";
  this.buff = Buffer.from("");
 }
 /**
  * 
  * @param {string} content
  */
 setContent(content: string) {
  this.content = content;
  return this;
 }
 /**
  * 
  */
 async render() {
  const browser = await launch({
   // Disable linux sandbox
   // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
   args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setContent(this.content);
  await page.content();
  this.buff = await page.pdf();
 }
 /**
  * 
  * @returns {Buffer}
  */
 toBuffer() {
  return this.buff;
 }
}