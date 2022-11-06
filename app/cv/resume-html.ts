import HTMLBuilder from "app/html-builder/html-builder";
import jsonCv from "app/resume.en.json";

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
  const { default: content } = await import(`templates/resume/${ResumeHtml.FILE_TEMPLATE_NAME}`);
  return content;
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