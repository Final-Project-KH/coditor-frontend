import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/CsBar";
import { useNavigate } from "react-router-dom";

const CsBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/cs/report", {
      state: {
        firstpath: path,
        secondpath: "악성 사용자 신고",
      },
    });
  };

  const handleQAClick = () => {
    navigate("/cs/question", {
      state: {
        firstpath: path,
        secondpath: "건의사항",
      },
    });
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>CS</MenuTitle>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleReportClick()}>
              악성 사용자 신고
            </MenuLink>
          </MenuContents>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleQAClick()}>건의사항</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CsBar;
