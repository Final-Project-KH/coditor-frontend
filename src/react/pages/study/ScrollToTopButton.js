import { ScrollToTop } from "../../styles/study/Study";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };
  return <ScrollToTop onClick={scrollToTop} />
};

export default ScrollToTopButton;
