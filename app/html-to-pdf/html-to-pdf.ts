import { Page, launch } from "puppeteer";

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
 #argsPupetter = {
  // Disable linux sandbox
  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
 };
 /**
  * 
  * @type {import("puppeteer").Page}
  */
 #page: Page | null = null;
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
 async createPage() {
  try {
   if (this.#page) {
    return this.#page;
   }
   this.#page = await (await launch(this.#argsPupetter)).newPage();
   return this.#page;
  } catch (e) {
   console.error(e);
   return null;
  }
 }
 /**
  * 
  */
 async render() {
  const page = await this.createPage();
  if (!page) {
   return;
  }
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