import useProjects from "hooks/useProjects";
import ProjectDetail from "./project-detail"

export default function Projects() {
 const projects = useProjects();

 return (
  <div className="default-container">
   <h2 className="title">Proyectos</h2>
   <div className="flex flex-row flex-wrap">
    {projects.map((project, i) => (
     <ProjectDetail project={project} key={i}/>
    ))}
   </div>
  </div>
 );
}
