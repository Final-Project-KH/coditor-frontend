import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import {
  Wrap,
} from "../../styles/main/Main";
import ScrollToTopButton from "../../styles/ScrollToTopButton";

const Main = () => {
  return (
    <Wrap>
      <Carousel />
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Main;
