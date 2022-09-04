import classesProjectDetail from "./project-detail.module.css";
import Image from "next/image";
import srcGithubSvg from "assets/icon-github.svg";

interface ProjectDetailProps {
 project: {
  name: string;
  description: string;
  image: string;
  url: string;
 }
}

export default function ProjectDetail({ project: { name, description, image, url } }: ProjectDetailProps) {
 return (
  <div className={classesProjectDetail.project}>
   <a href={url}>
    <div className={classesProjectDetail.image} style={{ backgroundImage: `url(${image})` }} />
    <div className="absolute left-5 top-5">
     <Image src={srcGithubSvg} width={50} height={50} />
    </div>
    <div className={classesProjectDetail.gradient} />
    <div className="absolute bottom-0">
     <h1 className={classesProjectDetail.title}>{name}</h1>
     <p className={classesProjectDetail.description}>{description}</p>
    </div>
   </a>
  </div>
 );
}
