import fs from "fs/promises";
import ResumePdf from "./resume-pdf";

export default class CvFile {
 /**
  * 
  */
 static instance: CvFile;
 /**
  * 
  */
 private internalFile: ResumePdf;
 /**
  * 
  */
 static getInstance(): CvFile {
  if (CvFile.instance === undefined) {
   CvFile.instance = new CvFile();
  }
  return CvFile.instance;
 }

 constructor() {
  this.internalFile = new ResumePdf();
 }
 /**
  * 
  * @returns 
  */
 async fill() {
  const { mtime: modificationTimeJson } = await fs.stat("app/resume.en.json");
  const modificationTimeInternalFile = await this.internalFile.getLastModifiedDate();

  if ((Number(modificationTimeInternalFile)) < (Number(modificationTimeJson)) ) {
   await this.internalFile.render();
  } else {
   await this.internalFile.obtaingLastFileCreated();
  }

  return this;
 }
 /**
  * 
  */
 toBuffer() {
  return this.internalFile.toBuffer();
 }
}
