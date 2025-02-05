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

const MyPage_Suggestion = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

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
    navigate("/mypage/suggestion");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleMyPage()}>
              <TopBoxText>my page</TopBoxText>
            </TopBoxLink>

            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>건의사항</TopBoxText>
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
    </>
  );
};

export default MyPage_Suggestion;
