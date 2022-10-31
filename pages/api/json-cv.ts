import { NextApiRequest, NextApiResponse } from "next";
import cv from "app/resume.en.json";

export default function jsonCv(...[,response]: [NextApiRequest, NextApiResponse<typeof cv>]){
    return response.json(cv);
}