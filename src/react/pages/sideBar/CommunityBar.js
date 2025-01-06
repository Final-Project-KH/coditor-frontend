import React, { useState, useEffect } from "react";
import {
  Container,
  CloseButton,
  LogoContainer,
  MenuContainer,
  MenuTitle,
  LoginContainer,
} from "../../styles/sideBar/CommunityBar";

const CommunityBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <LogoContainer></LogoContainer>
      <MenuContainer>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle></MenuTitle>
        <MenuTitle>Community</MenuTitle>
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

export default CommunityBar;
