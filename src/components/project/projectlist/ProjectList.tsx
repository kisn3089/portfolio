import React from "react";
import { Center, ProjectListContainer } from "./ProjectListStyles";
import ProjectItems from "../projectItems/ProjectItems";

const projectList = [
  {
    title: "Video Convert & Player",
    tag: "Video • FFMPEG • Convert • WASM",
    link: "/project/video",
    img: "/human.jpg",
  },
];
// 비디오, threejs, api & dashboard
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
