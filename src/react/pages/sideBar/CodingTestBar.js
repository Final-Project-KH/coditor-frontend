import React, { useState, useEffect } from "react";
import {
  Container,
  CloseButton,
  LogoContainer,
  MenuContainer,
  MenuTitle,
  LoginContainer,
} from "../../styles/sideBar/CoddingTestBar";

const CodingTestBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <LogoContainer></LogoContainer>
      <MenuContainer>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle>Coding Test</MenuTitle>
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

export default CodingTestBar;
