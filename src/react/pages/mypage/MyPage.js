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
  ProfileContainerModify,
  ProfileTitle,
  ProfileImageModify,
  HiddenInput,
  ProfileEditButton,
  ProfileModifyButton,
  MiddleInputDiv,
  MiddleUserContainer,
  MiddleUserContentsTitle,
  MiddleUserContentsContainer,
  MiddleUserIDContainer,
  MiddleUserContents,
  MiddleUserIDInput,
  MiddleEmailContainer,
  MiddleEmailContents,
  MiddleEmailInput,
  MiddleEmailInputButton,
  MiddleNicknameContainer,
  MiddleNicknameContents,
  MiddleNicknameInput,
  MiddleNicknameInputButton,
  MiddleAlertContainer,
  MiddleAlertTitle,
  MiddleAlertContentsContainer,
  MiddleAlertCommentContainer,
  MiddleAlertCommentTitle,
  MiddleAlertCommentContents,
  MiddleAlertADContainer,
  MiddleAlertADTitle,
  MiddleAlertADContents,
  MiddleSessionContainer,
  MiddleSessionTitle,
  MiddleSessionContentsContainer,
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
        <MiddleContainer>
          {/* 계정 관리 누를 시 나올 컨텐츠 */}
          <MiddleUserContainer>
            <MiddleUserContentsTitle>계정 관리</MiddleUserContentsTitle>
            <MiddleUserContentsContainer>
              <MiddleUserIDContainer>
                <MiddleUserContents>아이디</MiddleUserContents>
                <MiddleUserIDInput disabled></MiddleUserIDInput>
              </MiddleUserIDContainer>
              <MiddleEmailContainer>
                <MiddleEmailContents>이메일</MiddleEmailContents>
                <MiddleInputDiv>
                  <MiddleEmailInput></MiddleEmailInput>
                  <MiddleEmailInputButton>이메일 변경</MiddleEmailInputButton>
                </MiddleInputDiv>
              </MiddleEmailContainer>
              <MiddleNicknameContainer>
                <MiddleNicknameContents>닉네임</MiddleNicknameContents>
                <MiddleInputDiv>
                  <MiddleNicknameInput></MiddleNicknameInput>
                  <MiddleNicknameInputButton>
                    닉네임 변경
                  </MiddleNicknameInputButton>
                </MiddleInputDiv>
              </MiddleNicknameContainer>
            </MiddleUserContentsContainer>
          </MiddleUserContainer>
          <MiddleAlertContainer>
            <MiddleAlertTitle>이메일 알림 설정</MiddleAlertTitle>
            <MiddleAlertContentsContainer>
              <MiddleAlertCommentContainer>
                <MiddleAlertCommentTitle>댓글 알림</MiddleAlertCommentTitle>
                <MiddleAlertCommentContents>
                  내 질문에 댓글이 등록되면 알림을 받겠습니다.
                </MiddleAlertCommentContents>
              </MiddleAlertCommentContainer>
              <MiddleAlertADContainer>
                <MiddleAlertADTitle>
                  마케팅 활용 동의 및 광고 수신 동의
                </MiddleAlertADTitle>
                <MiddleAlertADContents>
                  강의 오픈, 신규 테스트 등록, 각종 이벤트, 회원 혜택 등 코디터
                  마케팅 알림을 받겠습니다.
                </MiddleAlertADContents>
              </MiddleAlertADContainer>
            </MiddleAlertContentsContainer>
          </MiddleAlertContainer>
          <MiddleSessionContainer>
            <MiddleSessionTitle>SNS 계정 연동</MiddleSessionTitle>
            <MiddleSessionContentsContainer></MiddleSessionContentsContainer>
          </MiddleSessionContainer>
        </MiddleContainer>
        <RightContainer>
          <ProfileContainerModify>
            <ProfileTitle>프로필 이미지</ProfileTitle>
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
            <ProfileModifyButton>이미지 수정</ProfileModifyButton>
          </ProfileContainerModify>
        </RightContainer>
      </Container>
    </Wrap>
  );
};
export default MyPage;
