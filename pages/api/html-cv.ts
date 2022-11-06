import type { NextApiResponse, NextApiRequest } from "next";
import ResumeHtml from "app/cv/resume-html";

export default async function htmlCv(request: NextApiRequest, response: NextApiResponse<string>) {
 const resumeHtml = new ResumeHtml();
 await resumeHtml.render();
 response.send(resumeHtml.toHtml());
}