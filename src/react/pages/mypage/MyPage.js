import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  UserContentsTitle,
  UserContents,
  DashboardContainer,
  DashboardTitle,
  DashboardContents,
  PostContainer,
  PostTitle,
  PostContents,
  CommunityContainer,
  CSContainer,
  ProfileContainerModify,
  ProfileImageModify,
  HiddenInput,
  ProfileEditButton,
} from "../../styles/mypage/MyPage";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath } = location.state || {};

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
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
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
            <UserContentsTitle>Profile</UserContentsTitle>
            <UserContents>계정 관리</UserContents>
            <UserContents>내 소개</UserContents>
            <UserContents>비밀번호 변경</UserContents>
            <UserContents>회원 탈퇴</UserContents>
          </UserContentsContainer>
          <DashboardContainer>
            <DashboardTitle>Dashboard</DashboardTitle>
            <DashboardContents>Study</DashboardContents>
            <DashboardContents>Coding Test</DashboardContents>
          </DashboardContainer>
          <PostContainer>
            <PostTitle>Post</PostTitle>
            <PostContents>Community</PostContents>
            <PostContents>신고하기</PostContents>
            <PostContents>문의하기</PostContents>
          </PostContainer>
        </LeftContainer>
        <MiddleContainer></MiddleContainer>
        <RightContainer>
          <ProfileContainerModify>
            <ProfileImageModify
              isProfile={profile}
              isPreview={preview}
            ></ProfileImageModify>
            <HiddenInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <ProfileEditButton
              onClick={() => fileInputRef.current.click()}
            ></ProfileEditButton>
          </ProfileContainerModify>
        </RightContainer>
      </Container>
    </Wrap>
  );
};
export default MyPage;
