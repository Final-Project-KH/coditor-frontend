import React, { useState, useEffect } from "react";
import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
} from "../../styles/sideBar/StudyBar";

const StudyBar = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuTitle>Java 시작</MenuTitle>
          <MenuTitle>기본 자료형과 연산자 / 제어문</MenuTitle>
          <MenuContents>기본 자료형과 연산자</MenuContents>
          <MenuContents>제어문</MenuContents>
          <MenuTitle>배열과 문자열(참조 타입)</MenuTitle>
          <MenuTitle>객체지향 프로그래밍</MenuTitle>
        </MenuColumn>
        <MenuColumn>
        <MenuTitle>Java API 클래스</MenuTitle>
        <MenuTitle>제네릭 / 컬렉션 프레임워크</MenuTitle>
        <MenuContents>제네릭</MenuContents>
        <MenuContents>컬렉션 프레임워크</MenuContents>
        <MenuTitle>Thread / 예외 처리</MenuTitle>
        <MenuContents>Thread</MenuContents>
        <MenuContents>예외 처리</MenuContents>
        </MenuColumn>
        <MenuColumn>
        <MenuTitle>람다와 스트림 / 입력과 출력</MenuTitle>
        <MenuContents>람다와 스트림</MenuContents>
        <MenuContents>입력과 출력</MenuContents>
        <MenuTitle>네트워킹</MenuTitle>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
