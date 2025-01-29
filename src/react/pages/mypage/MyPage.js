import React, { useState, useEffect, useRef, useCallback } from "react";
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
  CropContainer,
  Controls,
  Preview,
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
  MiddleSessionTypesContainer,
  MiddleSessionIcon,
  MiddleSessionDiv,
  MiddleSessionButton,
  Input,
  Button,
  ProfileModal,
  ProfileModalHeader,
  ProfileModalCloseButton,
  ProfileModalLogo,
  ProfileModalContainer,
  ProfileModalButtonContainer,
  ProfileModalTitle,
  ProfileModalContents,
  ProfileModalImage,
  ProfileModalImageAddButton,
  ProfileUploadModal,
  ProfileUploadModalHeader,
  ProfileUploadModalCloseButton,
  ProfileUploadModalLogo,
  ProfileUploadModalTitle,
  ProfileUploadModalContainer,
  ProfileModalImageModifyButton,
  ProfileModalImageDeleteButton,
  ProfileUploadModalImage,
  ProfileUploadModalContents,
  ProfileUploadModalContentsDiv,
  ProfileUploadModalImageAddButton,
  ProfileCropModal,
  ProfileCropModalHeader,
  ProfileCropModalCloseButton,
  ProfileCropModalLogo,
  ProfileCropModalTitle,
  ProfileCropModalContainer,
  ProfileCropModalButtonContainer,
  ProfileCropContainer,
} from "../../styles/mypage/MyPage";
import Cropper from "react-easy-crop";

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
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedPreview, setCroppedPreview] = useState(null);
  const [isProfileImgModalOpen, setIsProfileImgModalOpen] = useState(false);
  const [isProfileUploadModalOpen, setIsProfileUploadModalOpen] =
    useState(false);
  const [isProfileCropModalOpen, setIsProfileCropModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const fileInputRef = useRef(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleSaveCroppedImage = (croppedImage) => {
    setPreview(croppedImage); // 최종 크롭된 이미지 적용
    setIsProfileCropModalOpen(false); // CropModal 닫기
  };

  const handleCrop = async () => {
    if (!croppedAreaPixels || !preview) return;

    const croppedImage = await getCroppedImg(
      preview,
      croppedAreaPixels,
      rotation
    );
    handleSaveCroppedImage(croppedImage);
  };
  const getCroppedImg = async (imageSrc, croppedAreaPixels, rotation = 0) => {
    const newImage = new Image();
    newImage.src = imageSrc;
    await new Promise((resolve) => {
      newImage.onload = resolve;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const size = croppedAreaPixels.width;
    canvas.width = size;
    canvas.height = size;

    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.drawImage(
      newImage,
      croppedAreaPixels.x - size / 2,
      croppedAreaPixels.y - size / 2,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
    ctx.restore();

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    ctx.clip();

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob));
      }, "image/png");
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onClickProfileCropOpen(e);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onClickProfileCropOpen(e);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const onClickProfileOpen = () => {
    setIsProfileImgModalOpen(true);
  };
  const onClickProfileUploadOpen = () => {
    setIsProfileUploadModalOpen(true);
  };
  const onClickProfileCropOpen = () => {
    setIsProfileCropModalOpen(true);
  };
  const onClickProfileClose = () => {
    setIsProfileImgModalOpen(false);
  };
  const onClickProfileUploadClose = () => {
    setIsProfileUploadModalOpen(false);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const onClickProfileCropClose = () => {
    setIsProfileCropModalOpen(false);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
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
                  <MiddleEmailInput autoComplete="off"></MiddleEmailInput>
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
            <MiddleSessionContentsContainer>
              <MiddleSessionTypesContainer>
                <MiddleSessionIcon icon="/images/sns/gmail.png"></MiddleSessionIcon>
                <MiddleSessionDiv>Google</MiddleSessionDiv>
                <MiddleSessionButton>연결하기</MiddleSessionButton>
              </MiddleSessionTypesContainer>
              <MiddleSessionTypesContainer>
                <MiddleSessionIcon icon="/images/sns/kakao.png"></MiddleSessionIcon>
                <MiddleSessionDiv>Kakao</MiddleSessionDiv>
                <MiddleSessionButton>연결하기</MiddleSessionButton>
              </MiddleSessionTypesContainer>
              <MiddleSessionTypesContainer>
                <MiddleSessionIcon icon="/images/sns/naver.png"></MiddleSessionIcon>
                <MiddleSessionDiv>Naver</MiddleSessionDiv>
                <MiddleSessionButton>연결하기</MiddleSessionButton>
              </MiddleSessionTypesContainer>
            </MiddleSessionContentsContainer>
          </MiddleSessionContainer>
        </MiddleContainer>
        <RightContainer>
          <ProfileContainerModify>
            <ProfileTitle>프로필 이미지</ProfileTitle>
            <ProfileImageModify
              isProfile={profile}
              isPreview={preview}
            ></ProfileImageModify>
            <ProfileEditButton
              onClick={() => onClickProfileOpen()}
            ></ProfileEditButton>
          </ProfileContainerModify>
        </RightContainer>
        {isProfileImgModalOpen && (
          <ProfileModal>
            <ProfileModalHeader>
              <ProfileModalCloseButton
                onClick={() => onClickProfileClose()}
              ></ProfileModalCloseButton>
              <ProfileModalLogo></ProfileModalLogo>
            </ProfileModalHeader>
            <ProfileModalContainer>
              <ProfileModalTitle>프로필 사진</ProfileModalTitle>
              <ProfileModalContents>
                사진을 추가하면 다른 사람이 나를 알아보기 쉬워지며 내가 계정에
                로그인되어 있는지 확인할 수 있습니다.
              </ProfileModalContents>
              <ProfileModalImage
                isProfile={profile}
                isPreview={preview}
              ></ProfileModalImage>
            </ProfileModalContainer>
            <ProfileModalButtonContainer>
              {profile ? (
                <>
                  <ProfileModalImageModifyButton
                    onClick={() => onClickProfileUploadOpen()}
                  >
                    프로필 사진 변경
                  </ProfileModalImageModifyButton>
                  <ProfileModalImageDeleteButton>
                    프로필 사진 삭제
                  </ProfileModalImageDeleteButton>
                </>
              ) : (
                <ProfileModalImageAddButton
                  onClick={() => onClickProfileUploadOpen()}
                >
                  프로필 사진 추가
                </ProfileModalImageAddButton>
              )}
            </ProfileModalButtonContainer>
          </ProfileModal>
        )}
        {isProfileUploadModalOpen && (
          <ProfileUploadModal>
            <ProfileUploadModalHeader>
              <ProfileUploadModalCloseButton
                onClick={() => onClickProfileUploadClose()}
              ></ProfileUploadModalCloseButton>
              <ProfileUploadModalLogo></ProfileUploadModalLogo>
              <ProfileUploadModalTitle>
                프로필 사진 추가
              </ProfileUploadModalTitle>
            </ProfileUploadModalHeader>
            <ProfileUploadModalContainer
              isDragging={isDragging}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <ProfileUploadModalImage
                isProfile={profile}
                isPreview={preview}
              ></ProfileUploadModalImage>
              <HiddenInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <ProfileUploadModalContents>
                여기로 사진 드래그
              </ProfileUploadModalContents>
              <ProfileUploadModalContentsDiv>
                - 또는 -{" "}
              </ProfileUploadModalContentsDiv>
              <ProfileUploadModalImageAddButton
                onClick={() => fileInputRef.current.click()}
              >
                업로드
              </ProfileUploadModalImageAddButton>
            </ProfileUploadModalContainer>
          </ProfileUploadModal>
        )}
        {isProfileCropModalOpen && (
          <ProfileCropModal>
            <ProfileCropModalHeader>
              <ProfileCropModalCloseButton
                onClick={() => onClickProfileCropClose()}
              ></ProfileCropModalCloseButton>
              <ProfileCropModalLogo></ProfileCropModalLogo>
              <ProfileCropModalTitle>자르기 및 회전</ProfileCropModalTitle>
            </ProfileCropModalHeader>
            <ProfileCropModalContainer>
              <ProfileCropContainer>
                <Cropper
                  image={preview}
                  crop={crop}
                  zoom={zoom}
                  rotation={rotation}
                  aspect={1}
                  minZoom={1}
                  maxZoom={5}
                  zoomSpeed={0.2}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                />
              </ProfileCropContainer>
            </ProfileCropModalContainer>
            <ProfileCropModalButtonContainer></ProfileCropModalButtonContainer>
          </ProfileCropModal>
        )}
      </Container>
    </Wrap>
  );
};
export default MyPage;
