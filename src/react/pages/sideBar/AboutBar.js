import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/AboutBar";
import About from "../about/About";
import { useNavigate, useLocation } from "react-router-dom";

const AboutBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleSubmenuClick = () => {
    navigate("/about", {
      state: {
        firstpath: path,
        secondpath: "코디터 소개",
      },
    });
  };
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>About</MenuTitle>
          <MenuContents onClick={closeMenu}>
            {/* <a href="/about" className="menu-link" onClick={handleSubmenuClick}>
              코디터 소개
            </a> */}
            <MenuLink onClick={() => handleSubmenuClick()}>
              코디터 소개
            </MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default AboutBar;
