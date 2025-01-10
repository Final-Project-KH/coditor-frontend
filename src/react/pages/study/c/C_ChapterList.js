import {
  ClassIndex,
  ClassIndexName,
  ClassIndexInner,
  ClassIndexHr,
} from "../../../styles/study/Study";

const C_ChapterList = ({ refs }) => {

  const handleScrollToSection = (section) => {
    if (refs[section].current) {
      const offset = 175;  // 상단 여백 오프셋
      const elementPosition = refs[section].current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",  // 부드러운 스크롤
      });
    }
  };

  return (
    <>
    <ClassIndex>
      <ClassIndexInner>
      <ClassIndexName onClick={() => handleScrollToSection("section01")}>01. C 기본</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section02")}>02. 자료형과 연산자</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section03")}>03. 제어문</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section04")}>04. 배열과 문자열</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section05")}>05. 함수 및 자료 처리</ClassIndexName>
      </ClassIndexInner>
      </ClassIndex>
    </>
  );
};

export default C_ChapterList;