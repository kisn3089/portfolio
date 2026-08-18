import { Center, ProjectListContainer } from "./ProjectListStyles"
import ProjectItems from "../projectItems/ProjectItems"
import { PROJECTS } from "@/store/ProjectList"

const ProjectList = () => {
  return (
    <Center>
      <ProjectListContainer>
        {PROJECTS.map((item, i) => (
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
  )
}

export default ProjectList
