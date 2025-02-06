import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const MyPage_Report = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  // ✅ 페이지 변경 함수 추가
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
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
  );
};

export default MyPage_Report;
