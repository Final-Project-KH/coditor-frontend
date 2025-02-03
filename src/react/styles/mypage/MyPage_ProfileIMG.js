import styled, { css } from "styled-components";

export const RightContainerEach = styled.div.attrs({
  id: "rightcontainereach",
})`
  width: 100%;
  margin-top: 53.75px;
  padding: 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  gap: 15px;
`;
export const RightContainerTitle = styled.div.attrs({
  id: "rightcontainertitle",
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "medium", sans-serif;
`;
export const RightProfileImage = styled.div.attrs({
  id: "rightprofileimage",
})`
  width: 120px;
  height: 120px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 103%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  right: 38px;
  top: 162px;
  z-index: 3;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-color: #444444;
  background-image: url("/images/icon/edit.png");
  &:hover {
    background-color: black;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
  top: 5vh;
  left: 40vw;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  z-index: 200;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
  gap: 30px;
`;
export const ProfileModalHeader = styled.div.attrs({
  id: "profilemodalheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;
export const ProfileModalCloseButton = styled.div.attrs({
  id: "profilemodalclosebutton",
})`
  width: 30px;
  height: 30px;
  display: flex;
  position: relative;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-image: url("/images/icon/m_menu_close.png");
`;
export const ProfileModalTextContainer = styled.div.attrs({
  id: "profilemodaltextcontainer",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const ProfileModalTitle = styled.div.attrs({
  id: "profilemodaltitle",
})`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: "bold", sans-serif;
`;
export const ProfileModalContents = styled.div.attrs({
  id: "profilemodalcontents",
})`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  text-align: center;
  font-family: "medium", sans-serif;
`;
export const ProfileModalImage = styled.div.attrs({
  id: "profilemodalimage",
})`
  width: 250px;
  height: 250px;
  display: flex;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 102%;
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
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileModalButton = styled.button.attrs({
  id: "profilemodalbutton",
})`
  width: 200px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  border: 1px solid black;;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    font-family: "bold", sans-serif;
  }
`;

export const ProfileUploadModalContainer = styled.div.attrs({
  id: "profileuploadmodalcontainer",
})`
  width: 80%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  gap: 30px;
  padding: 30px 0;
  border: 1px solid white;
  ${({ isDragging }) =>
    isDragging && "background-color: #f1f1f1; border: 1px dashed black;"}

  // 드래그 중일 때 컨테이너를 덮는 오버레이
  .drag-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-family: "bold", sans-serif;
    opacity: ${({ isDragging }) => (isDragging ? "1" : "0")};
    transition: opacity 0.3s ease;
    z-index: 100;
  }
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
