import { Center, ProjectListContainer } from "./ProjectListStyles";
import ProjectItems from "../projectItems/ProjectItems";

const projectList = [
  {
    title: "Image Processing",
    tag: "Filter • Imgae • Editing • Processing",
    link: "/project/image",
    img: "/assets/img/pj_image.png",
  },
  {
    title: "WebGPU & Three.js",
    tag: "Canvas • Drei&Fiber • Animation",
    link: "/project/three",
    img: "/assets/img/pj_model.webp",
  },
  {
    title: "Parallel API & Data Visualization",
    tag: "useQurey • API • Chart",
    link: "/project/stock/query",
    img: "/assets/img/pj_stock.webp",
  },
  {
    title: "Video Convert & Player",
    tag: "Video • FFMPEG • Convert • WASM",
    link: "/project/video",
    img: "/assets/img/pj_video.webp",
  },
];

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
