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
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import MonacoJava from "../../../../util/monaco/MonacoJava";
import MonacoJavaOutput from "../../../../util/monaco/MonacoJavaOutput";
import { useEffect } from "react";
import ScrollToTopButton from "../../../styles/ScrollToTopButton";
const CT_Java_Practice_01_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath, fourthpath, lowerpath } =
    location.state || {};
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

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
    window.location.reload();
  };
  // Test용 주석입니다.
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
          <MonacoJava secondpath={secondpath} />
          {/* <MonacoJavaOutput /> */}
        </LeftContainer>
        <RightContainer></RightContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default CT_Java_Practice_01_01;
