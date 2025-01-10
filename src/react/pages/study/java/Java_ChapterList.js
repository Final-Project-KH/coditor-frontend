import {
  ClassIndex,
  ClassIndexName,
  ClassIndexInner,
  ClassIndexHr,
} from "../../../styles/study/Study";

const Java_ChapterList = ({ refs }) => {

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
      <ClassIndexName onClick={() => handleScrollToSection("section01")}>01. Java 시작</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section02")}>02. 기본 자료형과 연산자 / 제어문</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section03")}>03. 배열과 문자열(참조 타입)</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section04")}>04. 객체 지향 프로그래밍</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section05")}>05. Java API 클래스</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section06")}>06. 제네릭 / 컬렉션 프레임워크</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section07")}>07. Thread / 예외 처리</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section08")}>08. 람다와 스트림 / 입력과 출력</ClassIndexName>
      <ClassIndexHr />
      <ClassIndexName onClick={() => handleScrollToSection("section09")}>09. 네트워킹</ClassIndexName>
      </ClassIndexInner>
      </ClassIndex>
    </>
  );
};

export default Java_ChapterList;