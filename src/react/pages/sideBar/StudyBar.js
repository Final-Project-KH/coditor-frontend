import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuImgContainer,
  MenuImgJava,
  MenuImgPython,
  MenuImgC,
  MenuImgCPlus,
  MenuImgJavaScript,
  MenuImgCss,
  MenuLink,
} from "../../styles/sideBar/StudyBar";
import { useNavigate, useLocation } from "react-router-dom";

const StudyBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };
  // 언어가 늘어난다면 다음과 같은 형식으로 맨 밑에 추가해주면 자동 생성이 됩니다.
  const subMenuData = [
    {
      title: "Java",
      imgComponent: <MenuImgJava />,
      navigatepath: "/study/java",
      firstpath: path,
      secondpath: "Java",
    },
    {
      title: "Python",
      imgComponent: <MenuImgPython />,
      navigatepath: "/study/python",
      firstpath: path,
      secondpath: "Python",
    },
    {
      title: "C",
      imgComponent: <MenuImgC />,
      navigatepath: "/study/c",
      firstpath: path,
      secondpath: "C",
    },
    {
      title: "C++",
      imgComponent: <MenuImgCPlus />,
      navigatepath: "/study/cplus",
      firstpath: path,
      secondpath: "C++",
    },
    {
      title: "JavaScript",
      imgComponent: <MenuImgJavaScript />,
      navigatepath: "/study/javascript",
      firstpath: path,
      secondpath: "JavaScript",
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        {subMenuData.map((menu, index) => (
          <MenuColumn key={index} onClick={closeMenu}>
            <MenuLink
              onClick={() =>
                handleNavigation(menu.navigatepath, {
                  firstpath: menu.firstpath,
                  secondpath: menu.secondpath,
                })
              }
            >
              <MenuImgContainer>{menu.imgComponent}</MenuImgContainer>
              <MenuTitle>{menu.title}</MenuTitle>
            </MenuLink>
          </MenuColumn>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
