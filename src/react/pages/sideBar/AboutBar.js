import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
} from "../../styles/sideBar/AboutBar";

const AboutBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>
              About
          </MenuTitle>
          <MenuContents>
            <a href="/about" className="menu-link">
              코디터 소개
            </a>
          </MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default AboutBar;
