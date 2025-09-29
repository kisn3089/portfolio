import { projectList } from "@/store/ProjectList";
import { ProjectItem } from "../projectItem/ProjectItem";

const Carousel = () => {
  const count = projectList.length;
  // const radius = 1.4;
  const radius = 1.1;
  return (
    <group>
      {projectList.map((project, i) => (
        <ProjectItem
          key={project.img}
          url={project.landing_img}
          to={project.link}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2 + Math.PI, 0]}
        />
      ))}
    </group>
  );
};

export default Carousel;
