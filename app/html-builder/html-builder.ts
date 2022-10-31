export default class HTMLBuilder {
 /**
  * 
  */
 content = "";
 /**
  * 
  */
 constructor(content?: string) {
  if (typeof content == "string") {
   this.content = content;
  }
 }
 /**
  * 
  * @param content 
  */
 setContent(content: string) {
  this.content = content;
  return this;
 }
 /**
  * 
  * @returns 
  */
 getContent() {
  return this.content;
 }

 /**
  * 
  * @returns 
  */
 toHTML(): string {
  return this.content.replace(/\n/, "");
 }
 /**
  * 
  */
 toBuffer() {
  return Buffer.from(this.toHTML());
 }
}
