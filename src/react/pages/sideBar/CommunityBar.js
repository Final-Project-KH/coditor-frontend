import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/CommunityBar";
import { useNavigate, useLocation } from "react-router-dom";

const CommunityBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleCodingClick = () => {
    navigate("/community/coding", {
      state: {
        firstpath: path,
        secondpath: "코딩 질문",
      },
    });
  };

  const handleCourseClick = () => {
    navigate("/community/course", {
      state: {
        firstpath: path,
        secondpath: "진로 질문",
      },
    });
  };

  const handleStudyClick = () => {
    navigate("/community/study", {
      state: {
        firstpath: path,
        secondpath: "스터디",
      },
    });
  };

  const handleTeamClick = () => {
    navigate("/community/team", {
      state: {
        firstpath: path,
        secondpath: "팀 프로젝트",
      },
    });
  };

  const handleMentoringClick = () => {
    navigate("/community/mentoring", {
      state: {
        firstpath: path,
        secondpath: "코디터 멘토링 서비스",
      },
    });
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>커뮤니티</MenuTitle>

          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCodingClick()}>코딩 질문</MenuLink>
          </MenuContents>

          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCourseClick()}>진로 질문</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle style={{ minHeight: "26px" }} />
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleStudyClick()}>스터디</MenuLink>
          </MenuContents>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleTeamClick()}>팀 프로젝트</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle style={{ minHeight: "26px" }} />
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleMentoringClick()}>
              ✨ 코디터 멘토링 서비스
            </MenuLink>
          </MenuContents>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CommunityBar;
