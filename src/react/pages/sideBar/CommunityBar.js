import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
} from "../../styles/sideBar/CommunityBar";

const CommunityBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuContents>코딩 질문</MenuContents>
          <MenuContents>진로 질문</MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle style={{ minHeight: '26px' }} />
          <MenuContents>스터디</MenuContents>
          <MenuContents>팀 프로젝트</MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CommunityBar;
