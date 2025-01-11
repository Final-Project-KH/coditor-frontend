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
import { useLocation, useNavigate } from "react-router-dom";

const CT_Java_Practice_01_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath, fourthpath, lowerpath } =
    location.state || {};
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText>
              <a href="/codingtest" className="menu-link">
                {firstpath}
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java" className="menu-link">
                {secondpath}
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice" className="menu-link">
                {thirdpath}
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice/01" className="menu-link">
                {fourthpath}
              </a>
            </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText>
              <a href="/codingtest/java/practice/01/01" className="menu-link">
                {lowerpath}
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
