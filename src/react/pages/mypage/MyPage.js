import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import store from "../../../redux/store/store";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  ProfileContainer,
  ProfileImage,
  UserNickName,
  UserRating,
  UserTier,
  UserContentsContainer,
  UserContentsHeader,
  UserContentsHeaderTitle,
  UserContents,
  UserContentsSet,
  UserContentsName,
  StudyContainer,
  CodingTestContainer,
  CommunityContainer,
  CSContainer,
} from "../../styles/mypage/MyPage";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath} = location.state || {};

  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);

  const navigateProfileModify = () => {
    navigate("/profile/modify", {
      state: {
        firstpath: firstpath,
        secondpath: "내정보 수정",
      },
    });
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <ProfileContainer>
            <ProfileImage isProfile={profile}></ProfileImage>
            <UserNickName>{nickname}</UserNickName>
            <UserRating>1000</UserRating>
            <UserTier>Platinum</UserTier>
          </ProfileContainer>
          <UserContentsContainer>
            <UserContentsHeader>
              <UserContentsHeaderTitle>My Page</UserContentsHeaderTitle>
            </UserContentsHeader>
            <UserContents>
              <UserContentsSet>
                <UserContentsName onClick={() => navigateProfileModify()}>
                  내정보 수정
                </UserContentsName>
              </UserContentsSet>
              <UserContentsSet>
                <UserContentsName>랭킹 보드</UserContentsName>
              </UserContentsSet>
              <UserContentsSet>
                <UserContentsName>추천 서비스</UserContentsName>
              </UserContentsSet>
              <UserContentsSet>
                <UserContentsName>회원 탈퇴</UserContentsName>
              </UserContentsSet>
            </UserContents>
          </UserContentsContainer>
        </LeftContainer>
        <MiddleContainer>
          <StudyContainer></StudyContainer>
          <CodingTestContainer></CodingTestContainer>
        </MiddleContainer>
        <RightContainer>
          <CommunityContainer></CommunityContainer>
          <CSContainer></CSContainer>
        </RightContainer>
      </Container>
    </Wrap>
  );
};
export default MyPage;
