import type ResumableFile from "./resumable-file";
import fs from "fs/promises";
import HtmlToPdf from "app/html-to-pdf/html-to-pdf";
import ResumeHtml from "./resume-html";

export default class ResumePdf implements ResumableFile {
 /**
  * 
  */
 bufferFile: Buffer = Buffer.from("");
 /**
  * 
  */
 static FILE_OUTPUT_PATH = "app/resume.pdf";
 static FILE_TEMPLATE_NAME = "resume-pdf.handlebars";
 /**
  * 
  */
 toBuffer() {
  return this.bufferFile;
 }

 /**
  * 
  * @returns {Promise<Buffer>}
  */
 private async getBufferFile(): Promise<Buffer> {
  return await fs.readFile(ResumePdf.FILE_OUTPUT_PATH);
 }
 /**
  * 
  * @returns {Promise<boolean>}
  */
 async fileExist(): Promise<boolean> {
  try {
   await fs.access(ResumePdf.FILE_OUTPUT_PATH, fs.constants.F_OK);
   return true;
  } catch (e) {
   return false;
  }
 }

 async obtaingLastFileCreated() {
  if (await this.fileExist()) {
   this.bufferFile = await this.getBufferFile();
  }
 }
 /**
  * 
  * 
  */
 async render(): Promise<void> {
  const htmlResume = new ResumeHtml();
  const htmlToPdfInstance = new HtmlToPdf();

  if(!(await htmlToPdfInstance.createPage())){
   await this.obtaingLastFileCreated();
  }
  
  await htmlResume.render();
  const htmlTransformedContent = htmlResume.toHtml();
  htmlToPdfInstance.setContent(htmlTransformedContent);
  await htmlToPdfInstance.render();
  this.bufferFile = htmlToPdfInstance.toBuffer();
  fs.appendFile(ResumePdf.FILE_OUTPUT_PATH, this.bufferFile);
 }
 /**
  * 
  */
 async getLastModifiedDate(): Promise<Date> {
  if (await this.fileExist()) {
   const { mtime: modificationTipeFile } = await fs.stat(ResumePdf.FILE_OUTPUT_PATH);
   return modificationTipeFile;
  }
  return new Date(0);
 }
}
