import { NextApiRequest, NextApiResponse } from "next";
import getBufferCv from "app/cv/get-buffer-cv";

export default async function downloadCv(...[, response]: [NextApiRequest, NextApiResponse]) {
 return response
  .setHeader("content-disposition", "attachment; filename=resume.pdf")
  .send(await getBufferCv());
}
