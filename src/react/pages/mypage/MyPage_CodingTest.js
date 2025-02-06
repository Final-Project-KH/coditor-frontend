import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
} from "../../styles/mypage/MyPage";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect } from "react";
import MyPage_CodingTest_M from "./MyPage_CodingTest_M";

const MyPage_CodingTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleRefresh = () => {
    navigate("/mypage/codingtest");
  };

  return (
    <>
      {isMobile ? (
        <MyPage_CodingTest_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => handleMyPage()}>
                <TopBoxText>my page</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>coding test</TopBoxText>
              </TopBoxLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>
            <CenterContainer></CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage_CodingTest;
