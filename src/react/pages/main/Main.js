import {useState, useEffect} from "react";
import {useOutletContext} from "react-router-dom";

import Carousel from "./Carousel";
import {Wrap} from "../../styles/main/Main";
import Main_M from "./Main_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Main = () => {
  const {isMobile} = useOutletContext();
  return (
    <>
      {isMobile ? (
        <Main_M /> // 모바일 화면일 경우 MainPage_M 컴포넌트를 렌더링
      ) : (
        <Wrap>
          <Carousel />
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Main;
