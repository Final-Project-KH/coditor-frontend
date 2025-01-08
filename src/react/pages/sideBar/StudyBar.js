import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuImgContainer,
  MenuImgJava,
  MenuImgPython,
  MenuImgC,
  MenuImgCPlus,
  MenuImgJavaScript,
  MenuImgCss,
} from "../../styles/sideBar/StudyBar";

const StudyBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
        <a href="/study/java/main" className="menu-link">
        <MenuImgContainer>
            <MenuImgJava />
          </MenuImgContainer>
          <MenuTitle>Java</MenuTitle>
          </a>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgPython />
          </MenuImgContainer>
        <MenuTitle>Python</MenuTitle>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgC />
          </MenuImgContainer>
        <MenuTitle>C</MenuTitle>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgCPlus />
          </MenuImgContainer>
        <MenuTitle>C++</MenuTitle>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgJavaScript />
          </MenuImgContainer>
        <MenuTitle>JavaScript</MenuTitle>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
