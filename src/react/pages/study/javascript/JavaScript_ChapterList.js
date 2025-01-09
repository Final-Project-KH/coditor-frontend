import {
  ClassIndex,
  ClassIndexName,
  ClassIndexInner,
  ClassIndexHr,
} from "../../../styles/study/Study";

const JavaScript_ChapterList = ({ refs }) => {

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
      <ClassIndexName onClick={() => handleScrollToSection("section01")}>01. 자바스크립트 기초</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section02")}>02. 자바스크립트 응용</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section03")}>03. HTTP와 RESTful</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section04")}>04. 최신 문법</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section05")}>05. 알고리즘과 웹화면</ClassIndexName>
      </ClassIndexInner>
      </ClassIndex>
    </>
  );
};

export default JavaScript_ChapterList;