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
          <a href="/study/java" className="menu-link">
            <MenuImgContainer>
              <MenuImgJava />
            </MenuImgContainer>
            <MenuTitle>Java</MenuTitle>
          </a>
        </MenuColumn>
        <MenuColumn>
          <a href="/study/python" className="menu-link">
            <MenuImgContainer>
              <MenuImgPython />
            </MenuImgContainer>
            <MenuTitle>Python</MenuTitle>
          </a>
        </MenuColumn>
        <MenuColumn>
          <a href="/study/c" className="menu-link">
            <MenuImgContainer>
              <MenuImgC />
            </MenuImgContainer>
            <MenuTitle>C</MenuTitle>
          </a>
        </MenuColumn>
        <MenuColumn>
          <a href="/study/cplus" className="menu-link">
            <MenuImgContainer>
              <MenuImgCPlus />
            </MenuImgContainer>
            <MenuTitle>C++</MenuTitle>
          </a>
        </MenuColumn>
        <MenuColumn>
          <a href="/study/javascript" className="menu-link">
            <MenuImgContainer>
              <MenuImgJavaScript />
            </MenuImgContainer>
            <MenuTitle>JavaScript</MenuTitle>
          </a>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
