import React, { useState, useEffect } from "react";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  OutLink,
  LinkContents,
} from "../../styles/sideBar/MoreBar";

const MoreBar = ({ isOpen, closeMenu, path }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>개발자 로드맵</MenuTitle>
          <MenuContents>프론트엔드</MenuContents>
          <MenuContents>백엔드</MenuContents>
          <MenuContents>DevOps</MenuContents>
          <MenuContents>풀스택</MenuContents>
          <MenuContents>Data Analyst</MenuContents>
          <MenuContents>AI & Data Science</MenuContents>
          <MenuContents>앱 개발</MenuContents>
          <MenuContents>게임 개발</MenuContents>
          <MenuContents>네트워크 & 보안</MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle>
            코딩 테스트 및<br />
            알고리즘 관련 외부 사이트
          </MenuTitle>
          <LinkContents
            onClick={() => window.open("https://www.acmicpc.net", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            백준 온라인 저지
            <OutLink />
          </LinkContents>
          <LinkContents
            className="menu-link"
            onClick={() =>
              window.open("https://swexpertacademy.com/main/main.do", "_blank")
            }
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            삼성 SW Expert Academy
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://programmers.co.kr/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            프로그래머스
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://codeup.kr/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            코드업
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://leetcode.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            LeetCode
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://codeforces.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Codeforces
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://www.hackerrank.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Hackerrank
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://devth.goorm.io/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            구름DEVTH
            <OutLink />
          </LinkContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle>기타 정보</MenuTitle>
          <MenuContents>IDE Top 10</MenuContents>
          <MenuContents>생산성, 협업 도구 Top 10</MenuContents>
          <MenuContents>IT 용어 사전</MenuContents>
          <MenuContents>IT 관련 자격증 정리</MenuContents>
          <MenuContents>연도별 언어 인기 순위</MenuContents>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default MoreBar;
