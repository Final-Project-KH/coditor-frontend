import React, { useState, useEffect } from "react";
import {
  Container,
  CloseButton,
  LogoContainer,
  MenuContainer,
  MenuTitle,
  LoginContainer,
} from "../../styles/sideBar/AboutBar";

const AboutBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <LogoContainer></LogoContainer>
      <MenuContainer>
        <MenuTitle>About</MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
      </MenuContainer>
      <LoginContainer>
        <CloseButton isOpen={isOpen} onClick={closeMenu}></CloseButton>
      </LoginContainer>
    </Container>
  );
};

export default AboutBar;
