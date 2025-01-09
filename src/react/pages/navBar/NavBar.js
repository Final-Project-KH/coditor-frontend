import {useState, useEffect, useRef} from "react";
import React from "react";
import {
  Wrap,
  Container,
  LogoContainer,
  Logo,
  StyledLink,
  MenuContainer,
  MenuTitle,
  MenuBox,
  LoginContainer,
  MenuButton,
  LoginBox,
} from "../../styles/navBar/NavBar";
import AboutBar from "../sideBar/AboutBar";
import CodingTestBar from "../sideBar/CodingTestBar";
import CommunityBar from "../sideBar/CommunityBar";
import CsBar from "../sideBar/CsBar";
import MoreBar from "../sideBar/MoreBar";
import StudyBar from "../sideBar/StudyBar";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    // 사이드 메뉴 바 필요한 Components useState 설정
    // My page는 제외 (Link로 바로 연결 예정)
    isAboutOpen: false,
    isStudyOpen: false,
    isCodingTestOpen: false,
    isCommunityOpen: false,
    isMoreOpen: false,
    isCsOpen: false,
  });
  const [animatingMenus, setAnimatingMenus] = useState({
    isAboutOpenAnimating: false,
    isStudyOpenAnimating: false,
    isCodingTestOpenAnimating: false,
    isCommunityOpenAnimating: false,
    isMoreOpenAnimating: false,
    isCsOpenAnimating: false,
  });

  const paths = {
    pathAbout: "about",
    pathStudy: "study",
    pathCT: "coding test",
    pathCommunity: "community",
    pathMore: "more",
    pathCs: "cs",
    pathMypage: "my page", // 추후 추가할 마이페이지용
  };

  // 메뉴 열기, 닫기
  const toggleMenu = (menuName) => {
    // menuName (실제로는 isAboutOpen 등)을 받아 state 변환하는 함수
    if (!menuState[menuName]) {
      setMenuState((prev) => ({
        ...prev,
        [menuName]: true,
      }));
      setAnimatingMenus((prev) => ({
        ...prev,
        [`${menuName}Animating`]: true,
      }));
    } else {
      setMenuState((prev) => ({
        ...prev,
        [menuName]: false,
      }));
      setTimeout(() => {
        setAnimatingMenus((prev) => ({
          ...prev,
          [`${menuName}Animating`]: false,
        }));
      }, 300);
    }
  };

  // 메뉴 닫기 (추가적인 상황에서 사용)
  const closeMenu = (menuName) => {
    setMenuState((prev) => ({...prev, [menuName]: false}));
    setTimeout(() => {
      setAnimatingMenus((prev) => ({
        ...prev,
        [`${menuName}Animating`]: false,
      }));
    }, 300);
  };

  const menuRefs = useRef({
    isAboutOpen: null,
    isStudyOpen: null,
    isCodingTestOpen: null,
    isCommunityOpen: null,
    isMoreOpen: null,
    isCsOpen: null,
  });

  const handleEvent = (event) => {
    if (event.type === "mousedown") {
      Object.keys(menuRefs.current).forEach((menuName) => {
        const ref = menuRefs.current[menuName];
        if (ref && !ref.contains(event.target) && menuState[menuName]) {
          closeMenu(menuName);
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [menuState]);

  return (
    <Wrap>
      <Container>
        <LogoContainer>
          <Logo>
            <StyledLink to="/"></StyledLink>
          </Logo>
        </LogoContainer>
        <MenuContainer>
          {/* 메뉴 컨테이너 -> 선택 메뉴 포함 */}
          <MenuTitle
            ref={(el) => (menuRefs.current["isAboutOpen"] = el)}
            onMouseEnter={() => toggleMenu("isAboutOpen")}
            onMouseLeave={() => toggleMenu("isAboutOpen")}
          >
            <MenuBox isOpen={menuState.isAboutOpen}>
              <MenuButton isOpen={menuState.isAboutOpen}>about</MenuButton>
            </MenuBox>
            {(menuState.isAboutOpen || animatingMenus.isAboutOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <AboutBar
                isOpen={menuState.isAboutOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isAboutOpen")} // closeMenu 함수 전달
                path={paths.pathAbout}
              ></AboutBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isStudyOpen"] = el)}
            onMouseEnter={() => toggleMenu("isStudyOpen")}
            onMouseLeave={() => toggleMenu("isStudyOpen")}
          >
            <MenuBox isOpen={menuState.isStudyOpen}>
              <MenuButton isOpen={menuState.isStudyOpen}>study</MenuButton>
            </MenuBox>
            {(menuState.isStudyOpen || animatingMenus.isStudyOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <StudyBar
                isOpen={menuState.isStudyOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isStudyOpen")} // closeMenu 함수 전달
                path={paths.pathStudy}
              ></StudyBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCodingTestOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCodingTestOpen")}
            onMouseLeave={() => toggleMenu("isCodingTestOpen")}
          >
            <MenuBox isOpen={menuState.isCodingTestOpen}>
              <MenuButton isOpen={menuState.isCodingTestOpen}>
                coding test
              </MenuButton>
            </MenuBox>
            {(menuState.isCodingTestOpen ||
              animatingMenus.isCodingTestOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CodingTestBar
                isOpen={menuState.isCodingTestOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isCodingTestOpen")} // closeMenu 함수 전달
              ></CodingTestBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCommunityOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCommunityOpen")}
            onMouseLeave={() => toggleMenu("isCommunityOpen")}
          >
            <MenuBox isOpen={menuState.isCommunityOpen}>
              <MenuButton isOpen={menuState.isCommunityOpen}>
                community
              </MenuButton>
            </MenuBox>
            {(menuState.isCommunityOpen ||
              animatingMenus.isCommunityOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CommunityBar
                isOpen={menuState.isCommunityOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isCommunityOpen")} // closeMenu 함수 전달
              ></CommunityBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isMoreOpen"] = el)}
            onMouseEnter={() => toggleMenu("isMoreOpen")}
            onMouseLeave={() => toggleMenu("isMoreOpen")}
          >
            <MenuBox isOpen={menuState.isMoreOpen}>
              <MenuButton isOpen={menuState.isMoreOpen}>more</MenuButton>
            </MenuBox>
            {(menuState.isMoreOpen || animatingMenus.isMoreOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <MoreBar
                isOpen={menuState.isMoreOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isMoreOpen")} // closeMenu 함수 전달
              ></MoreBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCsOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCsOpen")}
            onMouseLeave={() => toggleMenu("isCsOpen")}
          >
            <MenuBox isOpen={menuState.isCsOpen}>
              <MenuButton isOpen={menuState.isCsOpen}>cs</MenuButton>
            </MenuBox>
            {(menuState.isCsOpen || animatingMenus.isCsOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CsBar
                isOpen={menuState.isCsOpen} // isOpen 상태 전달
                closeMenu={() => toggleMenu("isCsOpen")} // closeMenu 함수 전달
              ></CsBar>
            )}
          </MenuTitle>
        </MenuContainer>
        <LoginContainer>
          <LoginBox>
            <StyledLink to="/login"></StyledLink>
            login
          </LoginBox>
        </LoginContainer>
      </Container>
    </Wrap>
  );
};

export default NavBar;
