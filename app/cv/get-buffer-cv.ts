import CvFile from "./cv-file";

export default async function getBufferCv() {
 return (await CvFile.getInstance().fill()).toBuffer();
}
