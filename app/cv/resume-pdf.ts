import type ResumableFile from "./resumable-file";
import fs from "fs/promises";
import path from "path";
import HTMLBuilder from "app/html-builder/html-builder";

export default class ResumePdf implements ResumableFile {
 /**
  * 
  */
 buff: Buffer = Buffer.from("");
 /**
  * 
  */
 static FILE_OUTPUT_PATH = "app/resume.pdf";
 static FILE_TEMPLATE_NAME = "resume-pdf.template";
 /**
  * 
  */
 toBuffer() {
  return this.buff;
 }
 /**
  * 
  */
 private async getTemplateContent() {
  return (await fs.readFile(path.join("templates", "resume", ResumePdf.FILE_TEMPLATE_NAME))).toString();
 }
 /**
  * 
  * 
  */
 async render(): Promise<void> {
  try {
   const htmlBuilder = new HTMLBuilder(await this.getTemplateContent());
   this.buff = await htmlBuilder.toBuffer();
   fs.appendFile(ResumePdf.FILE_OUTPUT_PATH, this.buff);

  } catch (e) {
   console.error(e)
   console.error(`Can't create file`);
  }

 }
 /**
  * 
  */
 async getLastModifiedDate(): Promise<Date> {
  try {
   await fs.access(ResumePdf.FILE_OUTPUT_PATH, fs.constants.F_OK)
  } catch (e) {
   // No tiene accesso o no existe el archivo
   return new Date(0);
  }
  const { mtime: modificationTipeFile } = await fs.stat(ResumePdf.FILE_OUTPUT_PATH);
  return modificationTipeFile;
 }
}
