import { useOutletContext } from "react-router-dom";
import { ScrollToTop } from "../../styles/study/Study";

const ScrollToTopButton = () => {
  const { mainContentRef } = useOutletContext();

  const scrollToTop = () => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return <ScrollToTop onClick={scrollToTop} />;
};

export default ScrollToTopButton;
