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
} from "../../styles/sideBar/CoddingTestBar";
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
          navigatepath: "/codingtest/java/practice",
          firstpath: path,
          secondpath: "Java",
          thirdpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/java/basic",
          firstpath: path,
          secondpath: "Java",
          thirdpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/java/intermediate",
          firstpath: path,
          secondpath: "Java",
          thirdpath: "Intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/java/expert",
          firstpath: path,
          secondpath: "Java",
          thirdpath: "Expert",
        },
      ],
    },
    {
      title: "Python",
      imgComponent: <MenuImgPython />,
      contents: [
        {
          label: "Practice",
          navigatepath: "/codingtest/python/practice",
          firstpath: path,
          secondpath: "Python",
          thirdpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/python/basic",
          firstpath: path,
          secondpath: "Python",
          thirdpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/python/intermediate",
          firstpath: path,
          secondpath: "Python",
          thirdpath: "Intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/python/expert",
          firstpath: path,
          secondpath: "Python",
          thirdpath: "Expert",
        },
      ],
    },
    {
      title: "C",
      imgComponent: <MenuImgC />,
      contents: [
        {
          label: "Practice",
          navigatepath: "/codingtest/c/practice",
          firstpath: path,
          secondpath: "C",
          thirdpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/c/basic",
          firstpath: path,
          secondpath: "C",
          thirdpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/c/intermediate",
          firstpath: path,
          secondpath: "C",
          thirdpath: "Intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/c/expert",
          firstpath: path,
          secondpath: "C",
          thirdpath: "Expert",
        },
      ],
    },
    {
      title: "C++",
      imgComponent: <MenuImgCPlus />,
      contents: [
        {
          label: "Practice",
          navigatepath: "/codingtest/cplus/practice",
          firstpath: path,
          secondpath: "C++",
          thirdpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/cplus/basic",
          firstpath: path,
          secondpath: "C++",
          thirdpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/cplus/intermediate",
          firstpath: path,
          secondpath: "C++",
          thirdpath: "Intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/cplus/expert",
          firstpath: path,
          secondpath: "C++",
          thirdpath: "Expert",
        },
      ],
    },
    {
      title: "JavaScript",
      imgComponent: <MenuImgJavaScript />,
      contents: [
        {
          label: "Practice",
          navigatepath: "/codingtest/javascript/practice",
          firstpath: path,
          secondpath: "JavaScript",
          thirdpath: "Practice",
        },
        {
          label: "Basic",
          navigatepath: "/codingtest/javascript/basic",
          firstpath: path,
          secondpath: "JavaScript",
          thirdpath: "Basic",
        },
        {
          label: "Intermediate",
          navigatepath: "/codingtest/javascript/intermediate",
          firstpath: path,
          secondpath: "JavaScript",
          thirdpath: "Intermediate",
        },
        {
          label: "Expert",
          navigatepath: "/codingtest/javascript/expert",
          firstpath: path,
          secondpath: "JavaScript",
          thirdpath: "Expert",
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
