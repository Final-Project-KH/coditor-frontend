import {
  ClassHeader,
  ClassHeaderTitle,
  LeftContainer,
  RightContainer,
  InputClass,
  InputClassInner,
  ConsoleClass,
  ConsoleClassInner,
  Container,
  TopBox,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  Wrap,
} from "../../../styles/codingtest/java/CodingTestJava";

const CT_Java_Practice_01_01 = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText>
              <a href="/codingtest" className="menu-link">
                coding test
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java" className="menu-link">
                Java
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice" className="menu-link">
                Practice
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice/01" className="menu-link">
                01. 사칙연산
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice/01/01" className="menu-link">
                A + B
              </a>
            </TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <InputClass>
              <ClassHeader>
                <ClassHeaderTitle>INPUT</ClassHeaderTitle>
              </ClassHeader>
              <InputClassInner></InputClassInner>
            </InputClass>
            <ConsoleClass>
              <ClassHeader>
                <ClassHeaderTitle>CONSOLE</ClassHeaderTitle>
              </ClassHeader>
              <ConsoleClassInner></ConsoleClassInner>
            </ConsoleClass>
          </LeftContainer>
          <RightContainer></RightContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default CT_Java_Practice_01_01;
