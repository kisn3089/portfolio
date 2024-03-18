import {
  ItemsImgContainer,
  ItemsContainer,
  ItemsImg,
  ItemsTag,
  ItemsTitle,
} from "./ProjectItemsStyles";
import { Link } from "react-router-dom";
import * as Svg from "../../icon/index";
import { theme } from "@/styles/theme";

interface IProjectItems {
  title: string;
  tag: string;
  img: string;
  link: string;
}

const ProjectItems = ({ title, tag, img, link }: IProjectItems) => {
  return (
    <Link to={link}>
      <ItemsContainer>
        <ItemsImgContainer>
          <ItemsImg src={img} alt={img} />
        </ItemsImgContainer>
        <ItemsTag>{tag}</ItemsTag>

        <ItemsTitle>
          <Svg.Arrow
            width={24}
            height={24}
            fill={theme.palette.gray100}
            stroke={theme.palette.gray100}
          />
          {title}
        </ItemsTitle>
      </ItemsContainer>
    </Link>
  );
};

export default ProjectItems;
