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

          <MenuContents>
            <a href="/community/coding" className="menu-link">
              코딩 질문
            </a>
          </MenuContents>

          <MenuContents>
            <a href="/community/course" className="menu-link">
              진로 질문
            </a>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle style={{ minHeight: "26px" }} />
          <MenuContents>
            <a href="/community/study" className="menu-link">
              스터디
            </a>
          </MenuContents>
          <MenuContents>
            <a href="/community/team" className="menu-link">
              팀 프로젝트
            </a>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle style={{ minHeight: "26px" }} />
          <MenuContents>
            <a href="/community/mentoring" className="menu-link">
              ✨ 코디터 멘토링 서비스
            </a>
          </MenuContents>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CommunityBar;
