import React, { useState, useEffect } from "react";
import {
  Container,
  CloseButton,
  LogoContainer,
  MenuContainer,
  MenuTitle,
  LoginContainer,
} from "../../styles/sideBar/MoreBar";

const MoreBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <LogoContainer></LogoContainer>
      <MenuContainer>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle>More</MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
      </MenuContainer>
      <LoginContainer>
        <CloseButton isOpen={isOpen} onClick={closeMenu}></CloseButton>
      </LoginContainer>
    </Container>
  );
};

export default MoreBar;
