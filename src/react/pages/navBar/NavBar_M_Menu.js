import { useState } from "react";
import {
  MenuContainer,
  MenuLeftActive,
  MenuLeftContainer,
  MenuLeftInctive,
  MenuLeftLogin,
  MenuRightColumn,
  MenuRightColumnContents,
  MenuRightColumnTitle,
  MenuRightContainer,
  MenuRightContentsWrap,
  MenuRightLink,
  MenuWrapper,
} from "../../styles/navBar/NavBar_M_Menu";

const NavBar_M_Menu = () => {
  const [activeMenu, setActiveMenu] = useState("about");

  const menuItems = [
    {
      id: 'about',
      label: 'about',
      link: "/about",
      columns: [
        {
          title: { text: 'About', link: '/about' },
          contents: [
            { text: '코디터 소개', link: '/about/intro' },
            { text: '회사 연혁', link: '/about/history' }
          ]
        },
        {
          title: { text: '팀', link: '/team' },
          contents: [
            { text: '개발팀', link: '/team/dev' },
            { text: '디자인팀', link: '/team/design' }
          ]
        }
      ]
    },

    {
      id: 'study',
      label: 'study',
      link: "/study",
      columns: [
        {
          title: { text: 'Java', link: '/study/java' },
          contents: [],
        },
        {
          title: { text: 'Python', link: '/study/python' },
          contents: [],
        },
        {
          title: { text: 'C', link: '/study/c' },
          contents: [],
        },
        {
          title: { text: 'C++', link: '/study/cplus' },
          contents: [],
        },
        {
          title: { text: 'JavaScript', link: '/study/javaScript' },
          contents: [],
        },
      ]
    },

    {
      id: 'coding test',
      label: 'coding test',
      link: "/codingtest",
      columns: [
        {
          title: { text: 'Java', link: '/codingtest/java' },
          contents: [
            { text: 'Practice', link: '/codingtest/java/practice' },
            { text: 'Basic', link: '/codingtest/java/basic' },
            { text: 'Intermediate', link: '/codingtest/java/intermediate' },
            { text: 'Expert', link: '/codingtest/java/expert' },
          ]
        },
        {
          title: { text: 'Python', link: '/codingtest/python' },
          contents: [
            { text: 'Practice', link: '/codingtest/python/practice' },
            { text: 'Basic', link: '/codingtest/python/basic' },
            { text: 'Intermediate', link: '/codingtest/python/intermediate' },
            { text: 'Expert', link: '/codingtest/python/expert' },
          ]
        },
        {
          title: { text: 'C', link: '/codingtest/c' },
          contents: [
            { text: 'Practice', link: '/codingtest/c/practice' },
            { text: 'Basic', link: '/codingtest/c/basic' },
            { text: 'Intermediate', link: '/codingtest/c/intermediate' },
            { text: 'Expert', link: '/codingtest/c/expert' },
          ]
        },
        {
          title: { text: 'C++', link: '/codingtest/cplus' },
          contents: [
            { text: 'Practice', link: '/codingtest/cplus/practice' },
            { text: 'Basic', link: '/codingtest/cplus/basic' },
            { text: 'Intermediate', link: '/codingtest/cplus/intermediate' },
            { text: 'Expert', link: '/codingtest/cplus/expert' },
          ]
        },
        {
          title: { text: 'JavaScript', link: '/codingtest/javascript' },
          contents: [
            { text: 'Practice', link: '/codingtest/javascript/practice' },
            { text: 'Basic', link: '/codingtest/javascript/basic' },
            { text: 'Intermediate', link: '/codingtest/javascript/intermediate' },
            { text: 'Expert', link: '/codingtest/javascript/expert' },
          ]
        },
      ]
    },

    {
      id: 'community',
      label: 'community',
      link: "/community",
      columns: [
        {
          title: { text: '커뮤니티', link: '/community' },
          contents: [
            { text: '💻 코딩 질문', link: '/community/coding' },
            { text: '🎓 진로 질문', link: '/community/course' },
            { text: '✏️ 스터디', link: '/community/study' },
            { text: '📋 팀 프로젝트', link: '/community/team' },
          ]
        },
      ]
    },

    

  ];

  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuLeftContainer>
          <MenuLeftActive>about</MenuLeftActive>
          <MenuLeftInctive>study</MenuLeftInctive>
          <MenuLeftInctive>coding test</MenuLeftInctive>
          <MenuLeftInctive>community</MenuLeftInctive>
          <MenuLeftInctive>more</MenuLeftInctive>
          <MenuLeftInctive>cs</MenuLeftInctive>
          <MenuLeftLogin>login</MenuLeftLogin>
        </MenuLeftContainer>
        <MenuRightContainer>
          <MenuRightContentsWrap>
            <MenuRightColumn>
              <MenuRightColumnTitle>About</MenuRightColumnTitle>
              <MenuRightColumnContents>
                <MenuRightLink>코디터 소개</MenuRightLink>
              </MenuRightColumnContents>
            </MenuRightColumn>
          </MenuRightContentsWrap>
        </MenuRightContainer>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default NavBar_M_Menu;
