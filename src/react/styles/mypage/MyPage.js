import styled, { css } from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBoxWide = styled.div.attrs({
  id: "topboxwide",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 5;
`;

export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  border: 1px solid #313131;
  font-family: "bold", sans-serif;
  font-size: 18px;
  align-items: center;
  padding-bottom: 3px;
  cursor: pointer;
  color: white;
  background-color: #313131;
  &:hover {
    color: #313131;
    background-color: white;
  }
`;

export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "light", sans-serif;
  padding-bottom: 3px;
`;

export const TopBoxLink = styled.button.attrs({
  id: "topboxlink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 75px;
  box-sizing: border-box;
  justify-content: center;
  gap: 25px;
  padding-bottom: 50px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 17%;
  min-width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const LeftContainerEach = styled.div.attrs({
  id: "leftcontainereach",
})`
  width: 100%;
  padding: 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  gap: 15px;
`;
export const ProfileImage = styled.div.attrs({
  id: "profileimage",
})`
  width: 80px;
  height: 80px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const UserNickName = styled.div.attrs({
  id: "usernickname",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
  font-family: "bold", sans-serif;
`;

export const UserSignupDate = styled.div.attrs({
  id: "usersignupdate",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const LeftContainerTitle = styled.div.attrs({
  id: "leftcontainertitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "bold", sans-serif;
  font-size: 24px;
`;
export const LeftContainerContentsBox = styled.div.attrs({
  id: "leftcontainercontentsbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const LeftMenuLink = styled.button.attrs({
  id: "LeftMenuLink",
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const LeftContainerContentsInactive = styled.div.attrs({
  id: "leftcontainercontentsinactive",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  font-family: "medium", sans-serif;
`;
export const LeftContainerContentsActive = styled.div.attrs({
  id: "leftcontainercontentsactive",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  font-family: "medium", sans-serif;
  text-decoration: underline;
`;
export const CenterContainer = styled.div.attrs({
  id: "centercontainer",
})`
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  left: 0;
`;
export const CenterContainerEach = styled.div.attrs({
  id: "centercontainereach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CenterContainerTitle = styled.div.attrs({
  id: "centercontainertitle",
})`
  position: relative;
  display: flex;
  font-family: "bold", sans-serif;
  font-size: 28px;
  margin-left: 20px;
`;
export const CenterContentsContainer = styled.div.attrs({
  id: "centercontentscontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 30px;
  gap: 20px;
`;
export const AccountEachContainer = styled.div.attrs({
  id: "AccountEachContainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  gap: 10px;
`;
export const InputLabel = styled.div.attrs({
  id: "inputlabel",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "medium", sans-serif;
  font-size: 14px;
`;
export const IDInput = styled.input.attrs({
  id: "IDInput",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/user.png");
  &:focus {
    outline: none;
  }
`;
export const InputContainer = styled.div.attrs({
  id: "inputcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  user-select: none;
  flex-direction: row;
  margin-bottom: 10px;
  font-family: "medium", sans-serif;
  gap: 20px;
`;
export const EmailInput = styled.input.attrs({
  id: "emailinput",
})`
  width: 80%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/mail.png");
  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button.attrs({
  id: "submitbutton",
})`
  width: 20%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "medium", sans-serif;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#313131")};
  color: ${(props) => (props.disabled ? "#313131" : "white")};
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  ${(props) =>
    props.enabled &&
    css`
      &:hover {
        background-color: black;
      }
    `}
  border: none;
`;
export const NicknameInput = styled.input.attrs({
  id: "nicknameinput",
})`
  width: 80%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/mail.png");
  &:focus {
    outline: none;
  }
`;

export const AlertTitle = styled.div.attrs({
  id: "alerttitle",
})`
  width: 100%;
  display: flex;
  position: relative;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const AlertText = styled.div.attrs({
  id: "alerttext",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "regular", sans-serif;
`;
export const CenterAlertContentsEach1 = styled.div.attrs({
  id: "centeralertcontentseach1",
})`
  display: flex;
  flex-direction: column;
`;
export const CenterAlertContentsEach2 = styled.div.attrs({
  id: "centeralertcontentseach2",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-bottom: 15px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CenterSNSContentsEach1 = styled.div.attrs({
  id: "centersnscontentseach1",
})`
  display: flex;
`;

export const CenterSNSContentsEach2 = styled.div.attrs({
  id: "centersnscontentseach2",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-bottom: 15px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const CenterSNSContentsEach3 = styled.div.attrs({
  id: "centersnscontentseach3",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-bottom: 15px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CenterSNSContentsInner = styled.div.attrs({
  id: "centersnscontentsinner",
})`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

export const SNSIcon = styled.div.attrs({
  id: "snsicon",
})`
  width: 60px;
  height: 60px;
  display: flex;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.icon});
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 17%;
  min-width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const ProfileContainerModify = styled.div.attrs({
  id: "profilecontainermodify",
})`
  max-width: 1280px;
  width: 200px;
  height: 350px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
`;
export const ProfileTitle = styled.div.attrs({
  id: "profiletitle",
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;
export const ProfileImageModify = styled.div.attrs({
  id: "profileimagemodify",
})`
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
  margin-bottom: 90px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  ${(props) =>
    props.isProfile === null &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === null &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const ProfileEditButton = styled.div.attrs({
  id: "profileeditbutton",
})`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  position: absolute;
  right: 35px;
  bottom: 125px;
  z-index: 3;
  border: 1px solid black;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  background-image: url("/images/icon/edit.png");
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const ProfileModal = styled.div.attrs({
  id: "profilemodal",
})`
  width: 400px;
  height: 600px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  position: fixed;
  border: 1px solid black;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
`;
export const ProfileModalHeader = styled.div.attrs({
  id: "profilemodalheader",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
export const ProfileModalCloseButton = styled.div.attrs({
  id: "profilemodalclosebutton",
})`
  width: 30px;
  height: 30px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  left: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-image: url("/images/icon/m_menu_close.png");
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;
export const ProfileModalLogo = styled.div.attrs({
  id: "profilemodallogo",
})`
  width: 200px;
  height: 40px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/logo/fulllogo_black.png");
`;
export const ProfileModalContainer = styled.div.attrs({
  id: "profilemodalcontainer",
})`
  width: 400px;
  height: 440px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const ProfileModalTitle = styled.div.attrs({
  id: "profilemodaltitle",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
`;
export const ProfileModalContents = styled.div.attrs({
  id: "profilemodalcontents",
})`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;
export const ProfileModalImage = styled.div.attrs({
  id: "profilemodalimage",
})`
  width: 300px;
  height: 300px;
  display: flex;
  border-radius: 50%;
  margin-top: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  ${(props) =>
    props.isProfile === null &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === null &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const ProfileModalButtonContainer = styled.div.attrs({
  id: "profilemodalbuttoncontainer",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ProfileModalImageAddButton = styled.button.attrs({
  id: "profilemodalimageaddbutton",
})`
  width: 360px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  cursor: pointer;
`;
export const ProfileModalImageModifyButton = styled.button.attrs({
  id: "profilemodalimagemodifybutton",
})`
  width: 180px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  margin-right: 6px;
  cursor: pointer;
`;
export const ProfileModalImageDeleteButton = styled.button.attrs({
  id: "profilemodalimagedeletebutton",
})`
  width: 180px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  margin-left: 6px;
  cursor: pointer;
`;
export const ProfileUploadModal = styled.div.attrs({
  id: "profileuploadmodal",
})`
  width: 600px;
  height: 640px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  position: fixed;
  border: 1px solid black;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  top: 175px;
  z-index: 10;
`;
export const ProfileUploadModalHeader = styled.div.attrs({
  id: "profileuploadmodalheader",
})`
  width: 100%;
  height: 120px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
export const ProfileUploadModalCloseButton = styled.div.attrs({
  id: "profileuploadmodalclosebutton",
})`
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  left: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35px 40px;
  background-image: url("/images/icon/back.png");
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;
export const ProfileUploadModalLogo = styled.div.attrs({
  id: "profileuploadmodallogo",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/logo/logo.png");
`;
export const ProfileUploadModalTitle = styled.div.attrs({
  id: "profileuploadmodaltitle",
})`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
`;
export const ProfileUploadModalContainer = styled.div.attrs({
  id: "profileuploadmodalcontainer",
})`
  width: 100%;
  height: 720px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background-color: rgba(128, 128, 128, 0.2);

  ${({ isDragging }) =>
    isDragging && "background-color: rgba(74, 144, 226, 0.2);"}
`;
export const ProfileUploadModalImage = styled.div.attrs({
  id: "profileuploadmodalimage",
})`
  width: 200px;
  height: 200px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  ${(props) =>
    props.isProfile === null &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === null &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== null &&
    props.isPreview === null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
    ${(props) =>
    props.isProfile !== null &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
`;
export const ProfileUploadModalContents = styled.div.attrs({
  id: "profileuploadmodalcontents",
})`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;
export const ProfileUploadModalContentsDiv = styled.div.attrs({
  id: "profileuploadmodalcontentsdiv",
})`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 5px;
`;
export const ProfileUploadModalImageAddButton = styled.button.attrs({
  id: "profileuploadmodalimageaddbutton",
})`
  width: 240px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;
export const ProfileCropModal = styled.div.attrs({
  id: "profilecropmodal",
})`
  width: 600px;
  height: 640px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  position: fixed;
  border: 1px solid black;
  background-color: #131314;
  justify-content: space-evenly;
  align-items: center;
  top: 175px;
  z-index: 10;
`;
export const ProfileCropModalHeader = styled.div.attrs({
  id: "profilecropmodalheader",
})`
  width: 100%;
  height: 90px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
export const ProfileCropModalCloseButton = styled.div.attrs({
  id: "profilecropmodalclosebutton",
})`
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  left: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35px 40px;
  background-image: url("/images/icon/back_w.png");
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;
export const ProfileCropModalLogo = styled.div.attrs({
  id: "profilecropmodallogo",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/logo/logo_white.png");
`;
export const ProfileCropModalTitle = styled.div.attrs({
  id: "profilecropmodaltitle",
})`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
  color: white;
`;
export const ProfileCropModalContainer = styled.div.attrs({
  id: "profilecropmodalcontainer",
})`
  width: 100%;
  height: 460px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const ProfileCropContainer = styled.div.attrs({
  id: "profilecropcontainer",
})`
  width: 100%;
  height: 460px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const ProfileCropOverlay = styled.div`
  position: absolute;
  width: ${(props) => props.cropSize.width}px;
  height: ${(props) => props.cropSize.height}px;
  border-radius: 50%;
  pointer-events: none;
`;
export const ProfileCropModalButtonContainer = styled.div.attrs({
  id: "profilecropmodalcontainer",
})`
  width: 100%;
  height: 90px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ProfileCropModalRotateButton = styled.button.attrs({
  id: "profilecropmodalrotatebutton",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-right: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-image: url("/images/icon/rotate.png");
`;
export const ProfileCropModalButton = styled.button.attrs({
  id: "profilecropmodalbutton",
})`
  width: 180px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const ProfileModifyButton = styled.button.attrs({
  id: "middlenicknameinput",
})`
  width: 140px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  cursor: pointer;
`;
export const CropContainer = styled.div.attrs({
  id: "cropcontainer",
})`
  width: 140px;
  height: 140px;
  position: relative;
  border-radius: 50%;
  overflow: hidden; /* 원형 마스크 */
  background: #ddd;
`;

export const Controls = styled.div.attrs({
  id: "controls",
})`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;
export const Input = styled.input.attrs({
  id: "input",
})`
  width: 100%;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #357ab7;
  }
`;
export const Preview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
  border: 2px solid #4a90e2;
`;
