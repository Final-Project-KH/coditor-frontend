import {
  ClassIndex,
  ClassIndexName,
  ClassIndexInner,
  ClassIndexHr,
} from "../../../styles/study/Study";

const Python_ChapterList = ({ refs }) => {

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
      <ClassIndexName onClick={() => handleScrollToSection("section01")}>01. 개발 환경 구성 및 기본 문법</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section02")}>02. 함수 및 자료 처리</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section03")}>03. 파이썬 고급</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section04")}>04. 파이썬 응용</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section05")}>05. 파이썬 연동</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section06")}>06. 데이터분석을 위한 패키지</ClassIndexName>
      </ClassIndexInner>
      </ClassIndex>
    </>
  );
};

export default Python_ChapterList;