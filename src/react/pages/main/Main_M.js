import Carousel from "./Carousel_M";
import { Wrap } from "../../styles/main/Main_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Main_M = () => {
  return (
    <Wrap>
    <Carousel />
    <ScrollToTopButton />
  </Wrap>
  );
};

export default Main_M;