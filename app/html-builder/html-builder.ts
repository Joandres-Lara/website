import Handlebars from "handlebars";
/**
 * Utiliza una plantilla de handlebar para crear el HTML predeterminado
 */
export default class HTMLBuilder<T extends Record<string, unknown>> {
 /**
  * 
  * @type {boolean}
  */
 static #initializedLayouts = false;
 /**
  * @type {Record<string, string>}
  */
 static #partials = {
  "layouts/layout-cv": "layout-cv.handlebars"
 };
 /**
  * @template T
  */
 dataByTemplate: T;
 /**
  * 
  */
 contentTemplateByHandlebars = "";
 /**
  * 
  */
 instanceTemplateHandlebar;
 /**
  * 
  * 
  */
 private static async * getAllPartialLayoutsFiles() {
  const configFiles = Object.entries(HTMLBuilder.#partials);
  let currentIndex = 0;

  while (currentIndex < configFiles.length) {
   const [partialLayoutName, partialLayoutFileName] = configFiles[currentIndex];
   const { default: fileContent } = await import(`templates/layouts/${partialLayoutFileName}`);
   yield [partialLayoutName, fileContent];
   currentIndex++;
  }
  return;
 }
 /**
  * 
  * @returns {Promise<void>}
  */
 private static async initializeLayouts() {
  if (!HTMLBuilder.#initializedLayouts) {
   for await (const [keyPartialLayout, partialContentLayout] of HTMLBuilder.getAllPartialLayoutsFiles()) {
    Handlebars.registerPartial(keyPartialLayout, partialContentLayout);
   }
   HTMLBuilder.#initializedLayouts = true;
  }
 }
 /**
  * 
  * @returns {Promise<void>}
  */
 static async init() {
  await this.initializeLayouts();
 }
 /**
  * 
  */
 constructor(contentTemplateByHandlebars: string, dataByTemplate: T) {
  this.dataByTemplate = dataByTemplate;
  this.contentTemplateByHandlebars = contentTemplateByHandlebars;
  this.instanceTemplateHandlebar = Handlebars.compile(contentTemplateByHandlebars);
 }
 /**
  * 
  * @param {T} data
  * @returns {HTMLBuilder}
  */
 setData(data: T) {
  this.dataByTemplate = data;
  return this;
 }
 /**
  * 
  * @param content 
  */
 setContent(content: string) {
  this.contentTemplateByHandlebars = content;
  this.instanceTemplateHandlebar = Handlebars.compile(content);
  return this;
 }
 /**
  * 
  * @returns 
  */
 getContent() {
  return this.contentTemplateByHandlebars;
 }

 /**
  * 
  * @returns 
  */
 toHTML(): string {
  return this.instanceTemplateHandlebar(this.dataByTemplate);
 }
 /**
  * 
  */
 toBuffer() {
  return Buffer.from(this.toHTML());
 }
}
