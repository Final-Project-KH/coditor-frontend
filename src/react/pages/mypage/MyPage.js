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
  ProfileCropOverlay,
  ProfileCropModalButton,
  ProfileCropModalRotateButton,
} from "../../styles/mypage/MyPage";
import Cropper from "react-easy-crop";
import AxiosApi from "../../../api/AxiosApi";
import { setLoginData } from "../../../redux/slice/authSlice";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { firstpath } = location.state || {};

  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);

  console.log(profile);

  const navigateProfileModify = () => {
    navigate("/profile/modify", {
      state: {
        firstpath: firstpath,
        secondpath: "내정보 수정",
      },
    });
  };
  const [preview, setPreview] = useState(null); // 변경 프로필 이미지 용도
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedPreview, setCroppedPreview] = useState(null); // 미리보기 용도
  const [isProfileImgModalOpen, setIsProfileImgModalOpen] = useState(false);
  const [isProfileUploadModalOpen, setIsProfileUploadModalOpen] =
    useState(false);
  const [isProfileCropModalOpen, setIsProfileCropModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const fileInputRef = useRef(null);
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!preview) return;

    const img = new Image();
    img.src = preview;
    img.onload = () => {
      console.log("이미지 로드 완료:", img.naturalWidth, img.naturalHeight);
      const { naturalWidth, naturalHeight } = img;
      const minSize = Math.min(naturalWidth, naturalHeight); // 가장 짧은 쪽 선택
      setCropSize({ width: minSize, height: minSize }); // 동적 크롭 크기 설정
    };
  }, [preview, isProfileCropModalOpen]);

  useEffect(() => {
    if (croppedPreview) {
      setPreview(croppedPreview);
      console.log("이미지 : ", croppedPreview);
    }
  }, [croppedPreview]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleRotate = () => {
    setRotation((prev) => (prev - 90) % 360);
  };

  const convertUrlToFile = async (url, fileName) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], fileName, { type: "image/png" });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const finalImage = await convertUrlToFile(
      croppedPreview,
      `${nickname}_profile.png`
    );
    try {
      const formData = new FormData();
      formData.append("file", finalImage);
      formData.append("fileName", `${nickname}_profile.png`);

      const response = await AxiosApi.uploadprofile(formData);
      console.log(response);
      console.log(response.data);
      if (response.data) {
        alert("프로필 사진 설정이 완료되었습니다.");
        setIsProfileUploadModalOpen(false);
        setIsProfileImgModalOpen(false);
        dispatch(setLoginData({ profile: response.data }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await AxiosApi.deleteprofile();
      if (response) {
        alert("프로필 사진 삭제가 완료되었습니다.");
        dispatch(setLoginData({ profile: null }));
        setPreview(null);
        setCroppedPreview(null);
        setIsProfileImgModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveCroppedImage = () => {
    setPreview(croppedPreview); // 최종 크롭된 이미지 적용
    setIsProfileCropModalOpen(false); // CropModal 닫기
    setRotation(0);
  };

  const handleCrop = async () => {
    if (!croppedAreaPixels || !preview) return;

    const croppedImageURL = await getCroppedImg(
      preview,
      croppedAreaPixels,
      rotation
    );
    setCroppedPreview(croppedImageURL);
    handleSaveCroppedImage();
  };
  const getCroppedImg = async (imageSrc, croppedAreaPixels, rotation) => {
    return new Promise((resolve, reject) => {
      const newImage = new Image();
      newImage.src = imageSrc;
      newImage.crossOrigin = "anonymous"; // CORS 문제 방지
      newImage.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const radians = (rotation * Math.PI) / 180;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);

        const { width: imageWidth, height: imageHeight } = newImage;

        const rotatedWidth =
          Math.abs(imageWidth * cos) + Math.abs(imageHeight * sin);
        const rotatedHeight =
          Math.abs(imageWidth * sin) + Math.abs(imageHeight * cos);

        canvas.width = rotatedWidth;
        canvas.height = rotatedHeight;

        ctx.save();
        ctx.translate(rotatedWidth / 2, rotatedHeight / 2);
        ctx.rotate(radians);
        ctx.drawImage(
          newImage,
          -imageWidth / 2,
          -imageHeight / 2,
          imageWidth,
          imageHeight
        );
        ctx.restore();

        const cropX = croppedAreaPixels.x;
        const cropY = croppedAreaPixels.y;
        const cropWidth = croppedAreaPixels.width;
        const cropHeight = croppedAreaPixels.height;

        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");

        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;

        croppedCtx.drawImage(
          canvas,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          0,
          0,
          cropWidth,
          cropHeight
        );

        croppedCanvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas toBlob failed"));
            return;
          }
          resolve(URL.createObjectURL(blob)); // 실제로 이미지 넘길 때 파일 형태로 변환 필요
        }, "image/png");
      };

      newImage.onerror = (err) => reject(err);
    });
  };

  const resizeImage = (file, maxWidth = 500, maxHeight = 500) => {
    return new Promise((resolve) => {
      const resizingImage = new Image();
      resizingImage.src = URL.createObjectURL(file);
      resizingImage.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let { width, height } = resizingImage;

        if (width > maxWidth || height > maxHeight) {
          const scale = Math.min(maxWidth / width, maxHeight / height);
          width *= scale;
          height *= scale;
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(resizingImage, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/png");
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    fileInputRef.current.value = null;
    if (file) {
      const resizedBlob = await resizeImage(file);
      setPreview(URL.createObjectURL(resizedBlob));
      onClickProfileCropOpen(e);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    fileInputRef.current.value = null;
    if (file) {
      const resizedBlob = await resizeImage(file);
      setPreview(URL.createObjectURL(resizedBlob));
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
    setCroppedPreview(null);
    setRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const onClickProfileCropClose = () => {
    setIsProfileCropModalOpen(false);
    setPreview(null);
    setCroppedPreview(null);
    setRotation(0);
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
                  <ProfileModalImageDeleteButton
                    onClick={(e) => handleDelete(e)}
                  >
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
              {!profile ? (
                <ProfileUploadModalTitle>
                  프로필 사진 추가
                </ProfileUploadModalTitle>
              ) : (
                <ProfileUploadModalTitle>
                  프로필 사진 변경
                </ProfileUploadModalTitle>
              )}
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
              {!profile && !croppedPreview ? (
                <>
                  <ProfileUploadModalContents>
                    여기로 사진 드래그
                  </ProfileUploadModalContents>
                  <ProfileUploadModalContentsDiv>
                    - 또는 -
                  </ProfileUploadModalContentsDiv>
                  <ProfileUploadModalImageAddButton
                    onClick={() => fileInputRef.current.click()}
                  >
                    업로드
                  </ProfileUploadModalImageAddButton>
                </>
              ) : croppedPreview ? (
                <>
                  <ProfileUploadModalContents>
                    적용된 프로필 사진
                  </ProfileUploadModalContents>
                  <ProfileUploadModalImageAddButton
                    onClick={() => fileInputRef.current.click()}
                  >
                    사진 변경
                  </ProfileUploadModalImageAddButton>
                  <ProfileUploadModalImageAddButton
                    onClick={(e) => handleUpload(e)}
                  >
                    프로필 사진 적용
                  </ProfileUploadModalImageAddButton>
                </>
              ) : (
                profile && (
                  <>
                    <ProfileUploadModalContents>
                      현재 프로필 사진
                    </ProfileUploadModalContents>
                    <ProfileUploadModalImageAddButton
                      onClick={() => fileInputRef.current.click()}
                    >
                      사진 변경
                    </ProfileUploadModalImageAddButton>
                  </>
                )
              )}
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
                  cropShape="rect"
                  style={{
                    containerStyle: { backgroundColor: "black" }, // 컨테이너 배경색 변경
                    cropAreaStyle: {
                      border: "3px solid rgba(154, 160, 166)", // 크롭 테두리
                      backgroundColor: "rgba(0,0,0,0.5)",
                      maskImage:
                        "radial-gradient(circle, rgba(0,0,0,0.2) 69%, rgba(0,0,0,0.8) 31%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0,0.2) 69%, rgba(0,0,0,0.8) 0%)",
                    },
                  }}
                  showGrid={true}
                  zoom={zoom}
                  rotation={rotation}
                  cropSize={cropSize}
                  aspect={1}
                  minZoom={1}
                  maxZoom={5}
                  zoomSpeed={0.2}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                />
                <ProfileCropOverlay cropSize={cropSize} />
              </ProfileCropContainer>
            </ProfileCropModalContainer>
            <ProfileCropModalButtonContainer>
              <ProfileCropModalRotateButton
                onClick={() => handleRotate()}
              ></ProfileCropModalRotateButton>
              <ProfileCropModalButton onClick={() => handleCrop()}>
                이미지 적용
              </ProfileCropModalButton>
            </ProfileCropModalButtonContainer>
          </ProfileCropModal>
        )}
      </Container>
    </Wrap>
  );
};
export default MyPage;
