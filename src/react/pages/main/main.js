import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { Wrap } from "../../styles/main/Main";
import ScrollToTopButton from "../../styles/ScrollToTopButton";

import JwtDecoding from "../../../api/JwtDecode";

const Main = () => {
  console.log("디코딩된 토큰: ", JwtDecoding.getDecodedToken());
  return (
    <Wrap>
      <Carousel />
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Main;
