import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
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
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  ContentsHeadline,
  ContentsText,
  CheckBoxGroup,
  ContentsCheckText,
  WithdrawalButton,
} from "../../styles/mypage/MyPage_Withdrawal";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";

const MyPage_Withdrawal = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
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
    navigate("/mypage/withdrawal");
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
              <TopBoxText>회원 탈퇴</TopBoxText>
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
              <CenterContainerTitle>회원 탈퇴</CenterContainerTitle>
              <CenterContentsContainer>
                <ContentsHeadline>
                  회원 탈퇴 전, 다음 내용을 꼭 확인해주세요.
                </ContentsHeadline>
                <ContentsText>
                  · 고객 정보 및 개인형 서비스 이용 기록은 개인정보 처리방침에
                  따라 삭제됩니다.
                  <br />
                  · 회원 탈퇴 후에는 회원님의 개인정보를 복원할 수 없으며, 해당
                  아이디는 영구 삭제되어 재가입이 불가합니다.
                  <br />· 회원 탈퇴 후에도 작성하신 게시물은 삭제되지 않으니,
                  한번 더 확인하시기 바랍니다.
                </ContentsText>
                <CheckBoxGroup>
                  <Checkbox
                    color="default"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <ContentsCheckText>
                    안내 사항을 모두 확인하였으며, 이에 동의합니다.
                  </ContentsCheckText>
                </CheckBoxGroup>
                <WithdrawalButton disabled={!isChecked}>
                  코디터 회원 탈퇴
                </WithdrawalButton>
              </CenterContentsContainer>
            </CenterContainerEach>
          </CenterContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_Withdrawal;
