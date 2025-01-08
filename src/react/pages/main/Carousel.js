import { useState, useEffect } from "react";
import {
  CarouselContainer,
  CarouselOuter,
  CarouselInner,
  CarouselTextBox,
  CarouselTextCategory,
  CarouselTextTitle,
  CarouselTextContents,
  CarouselImage,
  ArrowBox,
  LeftArrow,
  ArrowText,
  ArrowSlash,
  RightArrow,
} from "../../styles/main/Carousel";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      backgroundColor: "#f1f1f1",
      category: "NEWS",
      title: `나의 2024년\n코딩테스트 연말결산`,
      contents: `올 한 해 얼마나 많은 문제들을 풀었는지 확인해볼까요?\n2024년을 회고하며 2025년에도 힘차게 풀어보세요!`,
      image: "/images/general/mainbanner_01.png",
      textColor: "black",
    },
    {
      backgroundColor: "#6281e6",
      category: "공지사항",
      title: `2025년 PCCP, PCCE, PCSQL\n정기시험 일정 안내`,
      contents: `시험 준비는 일정 확인부터!\n2025년 프로그래머스 인증시험 일정을 확인해보세요.`,
      image: "/images/general/mainbanner_02.png",
      textColor: "white",
    },
    {
      backgroundColor: "#383838",
      category: "데브코스",
      title: `개발 생산성 200% UP!\n생성형 AI로 백엔드 개발 마스터`,
      contents: `AI 활용 개발 프로젝트 경험이 필수인 시대\n경쟁력 있는 개발자로 성공해보세요`,
      image: "/images/general/mainbanner_03.png",
      textColor: "white",
    },
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <CarouselContainer>
      <CarouselOuter
        style={{
          backgroundColor: currentSlide.backgroundColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <CarouselInner>
          <CarouselTextBox>
            <CarouselTextCategory textColor={currentSlide.textColor}>
              {currentSlide.category}
            </CarouselTextCategory>
            <CarouselTextTitle textColor={currentSlide.textColor}>
              {currentSlide.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </CarouselTextTitle>
            <CarouselTextContents textColor={currentSlide.textColor}>
              {currentSlide.contents.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </CarouselTextContents>
            <ArrowBox>
              <LeftArrow onClick={handlePrev} />
              <ArrowText>{currentIndex + 1}</ArrowText>
              <ArrowSlash>/</ArrowSlash>
              <ArrowText>{slides.length}</ArrowText>
              <RightArrow onClick={handleNext} />
            </ArrowBox>
          </CarouselTextBox>
          <CarouselImage
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              transition: "opacity 0.5s ease",
              opacity: isAnimating ? 0.5 : 1,
            }}
          />
        </CarouselInner>
      </CarouselOuter>
    </CarouselContainer>
  );
};

export default Carousel;
