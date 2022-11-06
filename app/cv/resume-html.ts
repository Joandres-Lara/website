import HTMLBuilder from "app/html-builder/html-builder";
import jsonCv from "app/resume.en.json";
import fs from "fs/promises";
import path from "path";

export default class ResumeHtml {
 /**
  * 
  */
 static FILE_TEMPLATE_NAME = "resume-pdf.handlebars";
 /**
  * 
  */
 html;
 /**
  * 
  */
 constructor() {
  this.html = "";
 }
 /**
 * Return content of template cv.
 * 
 * @returns {string}
 */
 private async getTemplateContent() {
  return (await fs.readFile(path.join("templates", "resume", ResumeHtml.FILE_TEMPLATE_NAME))).toString();
 }
 /**
  * 
  */
 async render() {
  await HTMLBuilder.init();
  const htmlBuilder = new HTMLBuilder(await this.getTemplateContent(), jsonCv);
  this.html = htmlBuilder.toHTML();
 }
 /**
  * 
  * @returns {string}
  */
 toHtml() {
  return this.html;
 }
}