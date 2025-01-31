import Carousel from "./Carousel_M";
import ScrollToTopButton from "../ScrollToTopButton";
import { Wrap } from "../../styles/main/Main_M";

const Main_M = () => {
  return (
    <Wrap>
    <Carousel />
    <ScrollToTopButton />
  </Wrap>
  );
};

export default Main_M;