import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
} from "../../styles/sideBar/CsBar";

const CsBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>CS</MenuTitle>
          <MenuContents>악성 사용자 신고</MenuContents>
          <MenuContents>건의사항</MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CsBar;
