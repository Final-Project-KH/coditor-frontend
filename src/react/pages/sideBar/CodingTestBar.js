import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuImgContainer,
  MenuImgJava,
  MenuImgPython,
  MenuImgC,
  MenuImgCPlus,
  MenuImgJavaScript,
  MenuImgCss,
  MenuTitle,
  MenuContents,
  StyledLink,
  NavigatePath,
} from "../../styles/sideBar/CodingTestBar";
import { useNavigate, useLocation } from "react-router-dom";

const CodingTestBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const subMenuData = [
    {
      title: "Java",
      imgComponent: <MenuImgJava />,
      contents: [
        {
          label: "Practice",
          navigatepath: "/codingtest/practice",
          firstpath: path,
          secondpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/basic",
          firstpath: path,
          secondpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/intermediate",
          firstpath: path,
          secondpath: "intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/expert",
          firstpath: path,
          secondpath: "Expert",
        },
      ],
    },
  ];
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        {subMenuData.map((menu, index) => (
          <MenuColumn key={index}>
            <MenuImgContainer>{menu.imgComponent}</MenuImgContainer>
            <MenuTitle>{menu.title}</MenuTitle>
            {menu.contents.map((content, idx) => (
              <MenuContents key={idx} onClick={closeMenu}>
                <NavigatePath
                  key={idx}
                  onClick={() =>
                    handleNavigation(content.navigatepath, {
                      firstpath: content.firstpath,
                      secondpath: content.secondpath,
                      thirdpath: content.thirdpath,
                    })
                  }
                ></NavigatePath>
                {content.label}
              </MenuContents>
            ))}
          </MenuColumn>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default CodingTestBar;
