import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuImgContainer,
  MenuImgJava,
  MenuImgPython,
  MenuImgC,
  MenuImgCPlus,
  MenuImgJavaScript,
  MenuImgCss,
  MenuTitle,
  MenuContents,
} from "../../styles/sideBar/CoddingTestBar";

const CodingTestBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgJava />
          </MenuImgContainer>
          <MenuTitle>Java</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgPython />
          </MenuImgContainer>
        <MenuTitle>Python</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgC />
          </MenuImgContainer>
        <MenuTitle>C</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgCPlus />
          </MenuImgContainer>
        <MenuTitle>C++</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgJavaScript />
          </MenuImgContainer>
        <MenuTitle>JavaScript</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuImgContainer>
            <MenuImgCss />
          </MenuImgContainer>
        <MenuTitle>CSS</MenuTitle>
          <MenuContents>Basic</MenuContents>
          <MenuContents>Intermediate</MenuContents>
          <MenuContents>Expert</MenuContents>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CodingTestBar;
