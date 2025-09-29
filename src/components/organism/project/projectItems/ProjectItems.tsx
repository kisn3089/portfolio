import {
  ItemsImgContainer,
  ItemsContainer,
  ItemsImg,
  ItemsTag,
  ItemsTitle,
} from "./ProjectItemsStyles";
import * as Svg from "@/components/atoms/icon/index";
import { ALink } from "@/components/molecule/alink/ALink";

interface IProjectItems {
  title: string;
  tag: string;
  img: string;
  link: string;
}

const scrollTop = () => window.scrollTo({ top: 0 });

const ProjectItems = ({ title, tag, img, link }: IProjectItems) => {
  return (
    <ALink to={link} onClick={scrollTop}>
      <ItemsContainer>
        <ItemsImgContainer>
          <ItemsImg src={img} alt={img} />
        </ItemsImgContainer>
        <ItemsTag>{tag}</ItemsTag>
        <ItemsTitle>
          <Svg.Arrow />
          {title}
        </ItemsTitle>
      </ItemsContainer>
    </ALink>
  );
};

export default ProjectItems;
