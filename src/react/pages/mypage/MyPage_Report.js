import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
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
import Board_PostList_MyPage_Report from "../community/components/common/Board_PostList_MyPage_Report";
import MyPage_Report_M from "./MyPage_Report_M";

const MyPage_Report = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // ✅ 페이지 변경 함수 추가
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {isMobile ? (
        <MyPage_Report_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => navigate("/mypage")}>
                <TopBoxText>my page</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => navigate("/mypage/report")}>
                <TopBoxText>악성 사용자 신고</TopBoxText>
              </TopBoxLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <Board_PostList_MyPage_Report
                page={page}
                size={size}
                onPageChange={handlePageChange}
              />
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage_Report;
