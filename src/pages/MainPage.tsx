import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100;
  height: 60px;
  padding-left: 300px;
  ul {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #cd2640;
    }
  }
`;

const MainPage = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="test1">test1</Link>
        </li>
        <li>
          <Link to="test2">test2</Link>
        </li>
        <li>
          <Link to="video">video</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default MainPage;
