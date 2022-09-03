import Image from "next/image";
import githubSrcSvg from "assets/icon-github.svg";
import linkedinSrcSvg from "assets/icon-linkedin.svg";
import emailSrcSvg from "assets/icon-email.svg";
import arrowDownSrcSvg from "assets/icon-arrow-down.svg";
import classesDetails from "./details.module.css";

export default function Details() {
 return (
  <div className="flex flex-row flex-nowrap h-screen">
   <div className="relative w-3/5 overflow-hidden">
    <Image
     className={classesDetails.photo_main__image}
     src="/main-photo.jpg"
     layout="responsive"
     width={960}
     height={959}
    />
    <div className={classesDetails.photo_main__shadow_background} />
   </div>

   <div className={`relative w-2/5 py-16 ${classesDetails.details_text}`}>
    <h1
     className={`text-black text-8xl font-bold ${classesDetails.details_text_name}`}
    >
     Joan Andrés Lara Mora
    </h1>
    <div className="py-10 w-full flex flex-col items-center">
     <h2 className="text-black text-4xl py-6">Fullstack developer</h2>
     <div className="flex flex-row justify-between w-1/3">
      <a href="https://github.com/Joandres-Lara">
       <Image width={50} height={50} layout="fixed" src={githubSrcSvg} />
      </a>
      <a href="https://www.linkedin.com/in/joan-andr%C3%A9s-lara-mora-194444224/">
       <Image width={50} height={50} layout="fixed" src={linkedinSrcSvg} />
      </a>
      <a href="mailto:joan.lara.mora@gmail.com">
       <Image width={50} height={50} layout="fixed" src={emailSrcSvg} />
      </a>
     </div>

     <div className="flex flex-col items-center mt-16 opacity-40">
      <span className="text-3xl">Scroll down</span>
      <Image layout="fixed" width={50} height={50} src={arrowDownSrcSvg} />
     </div>
    </div>
   </div>
  </div>
 );
}
