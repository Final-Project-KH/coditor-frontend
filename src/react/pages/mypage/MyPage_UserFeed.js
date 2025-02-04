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
  CenterContainerTitle,
  CenterContainerEach,
  CenterFeedContainer,
  CenterFeedText,
  CenterFeedContentsBox,
  FeedButton,
} from "../../styles/mypage/MyPage_UserFeed";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import UserFeed_WriteEditor from "./Components/UserFeed_WriteEditor";

const MyPage_UserFeed = () => {
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
    navigate("/mypage/accountmanager");
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleOpenEditor = () => setIsEditing(true);
  const handleCloseEditor = () => setIsEditing(false);

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleMyPage()}>
              <TopBoxText>마이 페이지</TopBoxText>
            </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>내 소개</TopBoxText>
              </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <LeftTopProfile />
            <LeftMenus />
          </LeftContainer>
          <CenterContainer>
            <CenterContainerEach>
              <CenterContainerTitle>내 소개</CenterContainerTitle>
              <CenterFeedContainer>
                {isEditing ? (
                  <UserFeed_WriteEditor handleCloseEditor={handleCloseEditor} />
                ) : (
                  <CenterFeedContentsBox>
                    <CenterFeedText>등록된 소개글이 없습니다.</CenterFeedText>
                    <FeedButton onClick={handleOpenEditor}>
                      내 소개글 등록하기
                    </FeedButton>
                  </CenterFeedContentsBox>
                )}
              </CenterFeedContainer>
            </CenterContainerEach>
          </CenterContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_UserFeed;
