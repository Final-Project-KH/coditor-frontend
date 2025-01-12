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
  StyledDiv,
} from "../../../styles/codingtest/java/CodingTestJava";
import { useLocation, useNavigate } from "react-router-dom";
import MonacoJava from "../../../../util/monaco/MonacoJava";
import MonacoJavaOutput from "../../../../util/monaco/MonacoJavaOutput";

const CT_Java_Practice_01_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath, fourthpath, lowerpath } =
    location.state || {};

  const handleCodingTest = () => {
    navigate("/codingtest", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  const handleCodingTestJava = () => {
    navigate("/codingtest/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const handleCodingTestJavaPractice = () => {
    navigate(`/codingtest/java/practice`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };
  const handleCodingTestJavaPractice01 = () => {
    navigate(`/codingtest/java/practice/01`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        fourthpath: fourthpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate(`/codingtest/java/practice/01/01`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        fourthpath: fourthpath,
        lowerpath: lowerpath,
      },
    });
  };
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>
            {firstpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJava()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJavaPractice()}>
            {thirdpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJavaPractice01()}>
            {fourthpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{lowerpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <MonacoJava />
          <MonacoJavaOutput />
        </LeftContainer>
        <RightContainer></RightContainer>
      </Container>
    </Wrap>
  );
};

export default CT_Java_Practice_01_01;
