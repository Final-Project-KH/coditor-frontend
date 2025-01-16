import { Outlet, useLocation } from "react-router-dom";
import { Background, Header } from "../styles/Layout";
import NavBar from "./navBar/NavBar";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Layout = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // CSSTransition에 사용할 nodeRef

  return (
    <>
      <Background>
        <Header>
          <NavBar />
        </Header>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
            }}
            timeout={500}
            nodeRef={nodeRef} // nodeRef를 CSSTransition에 전달
          >
            <div ref={nodeRef}>
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Background>
    </>
  );
};
export default Layout;
