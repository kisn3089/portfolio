import {
  ItemsImgContainer,
  ItemsContainer,
  ItemsImg,
  ItemsTag,
  ItemsTitle,
} from "./ProjectItemsStyles";
import { Link } from "react-router-dom";
import * as Svg from "../../icon/index";

interface IProjectItems {
  title: string;
  tag: string;
  img: string;
  link: string;
}

const ProjectItems = ({ title, tag, img, link }: IProjectItems) => {
  return (
    <Link to={link}>
      {/* <Svg.Arrow /> */}
      <ItemsContainer>
        <ItemsImgContainer>
          <ItemsImg src={img} alt={img} />
        </ItemsImgContainer>
        <ItemsTag>{tag}</ItemsTag>
        <ItemsTitle>{title}</ItemsTitle>
      </ItemsContainer>
    </Link>
  );
};

export default ProjectItems;
