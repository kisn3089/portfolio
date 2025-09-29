import { Center, ProjectListContainer } from "./ProjectListStyles";
import ProjectItems from "../projectItems/ProjectItems";
import { projectList } from "@/store/ProjectList";

const ProjectList = () => {
  return (
    <Center>
      <ProjectListContainer>
        {projectList.map((item, i) => (
          <ProjectItems
            title={item.title}
            tag={item.tag}
            link={item.link}
            img={item.img}
            key={i}
          />
        ))}
      </ProjectListContainer>
    </Center>
  );
};

export default ProjectList;
