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

  const handleJavaCheck = () => {
    navigate("/study/java/main", {
      state: {
        firstpath: path,
        secondpath: "Java",
      },
    });
  };
  const handlePythonCheck = () => {
    navigate("/study/python/main", {
      state: {
        firstpath: path,
        secondpath: "Python",
      },
    });
  };
  const handleCCheck = () => {
    navigate("/study/c/main", {
      state: {
        firstpath: path,
        secondpath: "C",
      },
    });
  };
  const handleCPlusCheck = () => {
    navigate("/study/cplus/main", {
      state: {
        firstpath: path,
        secondpath: "C++",
      },
    });
  };
  const handleJavaScriptCheck = () => {
    navigate("/study/javascript/main", {
      state: {
        firstpath: path,
        secondpath: "JavaScript",
      },
    });
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn onClick={closeMenu}>
          {/* <a href="/study/java/main" className="menu-link">
            <MenuImgContainer>
              <MenuImgJava />
            </MenuImgContainer>
            <MenuTitle>Java</MenuTitle>
          </a> */}
          <MenuLink onClick={() => handleJavaCheck()}>
            <MenuImgContainer>
              <MenuImgJava />
            </MenuImgContainer>
            <MenuTitle>Java</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn onClick={closeMenu}>
          {/* <a href="/study/python/main" className="menu-link">
            <MenuImgContainer>
              <MenuImgPython />
            </MenuImgContainer>
            <MenuTitle>Python</MenuTitle>
          </a> */}
          <MenuLink onClick={() => handlePythonCheck()}>
            <MenuImgContainer>
              <MenuImgPython />
            </MenuImgContainer>
            <MenuTitle>Python</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn onClick={closeMenu}>
          {/* <a href="/study/c/main" className="menu-link">
            <MenuImgContainer>
              <MenuImgC />
            </MenuImgContainer>
            <MenuTitle>C</MenuTitle>
          </a> */}
          <MenuLink onClick={() => handleCCheck()}>
            <MenuImgContainer>
              <MenuImgC />
            </MenuImgContainer>
            <MenuTitle>C</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn onClick={closeMenu}>
          {/* <a href="/study/cplus/main" className="menu-link">
            <MenuImgContainer>
              <MenuImgCPlus />
            </MenuImgContainer>
            <MenuTitle>C++</MenuTitle>
          </a> */}
          <MenuLink onClick={() => handleCPlusCheck()}>
            <MenuImgContainer>
              <MenuImgCPlus />
            </MenuImgContainer>
            <MenuTitle>C++</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn onClick={closeMenu}>
          {/* <a href="/study/javascript/main" className="menu-link">
            <MenuImgContainer>
              <MenuImgJavaScript />
            </MenuImgContainer>
            <MenuTitle>JavaScript</MenuTitle>
          </a> */}
          <MenuLink onClick={() => handleJavaScriptCheck()}>
            <MenuImgContainer>
              <MenuImgJavaScript />
            </MenuImgContainer>
            <MenuTitle>JavaScript</MenuTitle>
          </MenuLink>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
