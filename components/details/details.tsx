import Image from "next/image";
import githubSrcSvg from "assets/icon-github.svg";
import linkedinSrcSvg from "assets/icon-linkedin.svg";
import emailSrcSvg from "assets/icon-email.svg";
import arrowDownSrcSvg from "assets/icon-arrow-down.svg";
import classesDetails from "./details.module.css";
import Link from "components/ui/link";

export default function Details() {
 return (
  <div className="flex flex-col md:flex-row md:flex-nowrap h-screen w-full md:w-auto">
   <div className="relative md:w-3/5 w-full overflow-hidden">
    <Image
     className={classesDetails.photo_main__image}
     src="/main-photo.jpg"
     layout="fixed"
     width={960}
     height={959}
    />
    <div className={classesDetails.photo_main__shadow_background} />
   </div>

   <div className={`default-container ${classesDetails.details_text}`}>
    <h1
     className={`title ${classesDetails.details_text_name}`}
    >
     Joan Andrés Lara Mora
    </h1>
    <div className="w-full flex flex-col items-center">
     <h2 className="text-black text-4xl py-6">Fullstack developer</h2>
     <div className="flex flex-row justify-around w-8/12 md:w-3/6">
      <a href="https://www.linkedin.com/in/joan-andr%C3%A9s-lara-mora-194444224/">
       <Image width={50} height={50} layout="fixed" src={linkedinSrcSvg} />
      </a>
      <a href="https://github.com/Joandres-Lara">
       <Image width={50} height={50} layout="fixed" src={githubSrcSvg} />
      </a>
      <a href="mailto:joan.lara.mora@gmail.com">
       <Image width={50} height={50} layout="fixed" src={emailSrcSvg} />
      </a>
     </div>

     <div>
      <Link href='/api/download-cv' download>Descargar CV (ES)</Link>
     </div>

     <div className="flex flex-col items-center mt-16 opacity-40">
      <span className="text-3xl animation:up-down">Scroll down</span>
      <Image layout="fixed" width={50} height={50} src={arrowDownSrcSvg} />
     </div>
    </div>
   </div>
  </div>
 );
}
