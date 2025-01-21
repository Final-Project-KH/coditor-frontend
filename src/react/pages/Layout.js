import { Outlet, useLocation } from "react-router-dom";
import {
  Background,
  Header,
  LayoutWrapper,
  MainContent,
} from "../styles/Layout";
import NavBar from "./navBar/NavBar";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Layout = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // CSSTransition에 사용할 nodeRef
  const mainContentRef = useRef(null); // MainContent 참조

  return (
    <>
      <LayoutWrapper>
        <Background>
          <Header>
            <NavBar />
          </Header>
          {/* <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
            }}
            timeout={0}
            nodeRef={nodeRef} // nodeRef를 CSSTransition에 전달
          >
            <div ref={nodeRef}> */}
          <MainContent ref={mainContentRef}>
            <Outlet context={{ mainContentRef }} />
          </MainContent>
          {/* </div>
          </CSSTransition>
        </TransitionGroup> */}
        </Background>
      </LayoutWrapper>
    </>
  );
};
export default Layout;
