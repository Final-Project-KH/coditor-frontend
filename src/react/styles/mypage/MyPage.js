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
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  max-width: 1280px;
  width: 200px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
export const ProfileContainer = styled.div.attrs({
  id: "profilecontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
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
  background-color: gray;
  ${(props) =>
    props.isProfile === "" &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== "" &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const UserNickName = styled.div.attrs({
  id: "usernickname",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const UserRating = styled.div.attrs({
  id: "userrating",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;
export const UserTier = styled.div.attrs({
  id: "usertier",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;
export const UserContentsContainer = styled.div.attrs({
  id: "usercontentscontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const UserContentsTitle = styled.div.attrs({
  id: "usercontentstitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const UserContents = styled.div.attrs({
  id: "usercontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const DashboardContainer = styled.div.attrs({
  id: "dashboardcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const DashboardTitle = styled.div.attrs({
  id: "dashboardtitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const DashboardContents = styled.div.attrs({
  id: "dashboardcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const PostContainer = styled.div.attrs({
  id: "postcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const PostTitle = styled.div.attrs({
  id: "posttitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const PostContents = styled.div.attrs({
  id: "postcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const MiddleContainer = styled.div.attrs({
  id: "middlecontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
export const MiddleUserContainer = styled.div.attrs({
  id: "middleusercontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  box-sizing: border-box;
`;
export const MiddleUserContentsTitle = styled.div.attrs({
  id: "middleusercontentstitle",
})`
  position: relative;
  display: flex;
  font-size: 25px;
  font-weight: bold;
`;
export const MiddleUserContentsContainer = styled.div.attrs({
  id: "middleusercontentscontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 350px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid black;
`;
export const MiddleUserIDContainer = styled.div.attrs({
  id: "middleuseridcontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
`;
export const MiddleUserContents = styled.div.attrs({
  id: "middleusercontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 15px;
`;
export const MiddleUserIDInput = styled.input.attrs({
  id: "middleuseridinput",
})`
  width: 92%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  margin-left: 4%;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/user.png");
  &:focus {
    outline: none;
  }
`;
export const MiddleEmailContainer = styled.div.attrs({
  id: "middleemailcontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
`;
export const MiddleEmailContents = styled.div.attrs({
  id: "middleemailcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 15px;
`;
export const MiddleInputDiv = styled.div.attrs({
  id: "middleinputdiv",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  user-select: none;
  flex-direction: row;
  margin-bottom: 10px;
  font-family: "medium", sans-serif;
`;
export const MiddleEmailInput = styled.input.attrs({
  id: "middleemailinput",
})`
  width: 71%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-left: 4%;
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
export const MiddleEmailInputButton = styled.button.attrs({
  id: "middleeamilinputbutton",
})`
  width: 18%;
  height: 50px;
  display: flex;
  position: relative;
  margin-left: 3%;
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
export const MiddleNicknameContainer = styled.div.attrs({
  id: "middlenicknamecontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
`;
export const MiddleNicknameContents = styled.div.attrs({
  id: "middlenicknamecontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 15px;
`;
export const MiddleNicknameInput = styled.input.attrs({
  id: "middlenicknameinput",
})`
  width: 71%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  margin-left: 4%;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/user.png");
  &:focus {
    outline: none;
  }
`;
export const MiddleNicknameInputButton = styled.button.attrs({
  id: "middlenicknamenputbutton",
})`
  width: 18%;
  height: 50px;
  display: flex;
  position: relative;
  margin-left: 3%;
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
export const MiddleAlertContainer = styled.div.attrs({
  id: "middlealertcontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
`;
export const MiddleAlertTitle = styled.div.attrs({
  id: "middlealerttitle",
})`
  position: relative;
  display: flex;
  font-size: 25px;
  font-weight: bold;
`;
export const MiddleAlertContentsContainer = styled.div.attrs({
  id: "middlealertcontentscontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 250px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  position: relative;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid black;
`;
export const MiddleAlertCommentContainer = styled.div.attrs({
  id: "middlealertcommentcontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
`;
export const MiddleAlertCommentTitle = styled.div.attrs({
  id: "middlealertcommenttitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 20px;
  font-weight: bold;
`;
export const MiddleAlertCommentContents = styled.div.attrs({
  id: "middlealertcommentcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 15px;
`;
export const MiddleAlertADContainer = styled.div.attrs({
  id: "middlealertadcontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  &::before {
    content: "";
    position: absolute;
    top: -5%;
    left: 2.5%;
    width: 95%;
    height: 1px;
    background-color: #313131;
  }
`;
export const MiddleAlertADTitle = styled.div.attrs({
  id: "middlealertadtitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 20px;
  font-weight: bold;
`;
export const MiddleAlertADContents = styled.div.attrs({
  id: "middlealertadcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  font-size: 15px;
`;
export const MiddleSessionContainer = styled.div.attrs({
  id: "middlesessioncontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
`;
export const MiddleSessionTitle = styled.div.attrs({
  id: "middlesessiontitle",
})`
  position: relative;
  display: flex;
  font-size: 25px;
  font-weight: bold;
`;
export const MiddleSessionContentsContainer = styled.div.attrs({
  id: "middlesessioncontentscontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 350px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  justify-content: space-evenly;
  position: relative;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid black;
`;
export const MiddleSessionTypesContainer = styled.div.attrs({
  id: "middlesessiontypescontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  & + &::before {
    content: "";
    position: absolute;
    top: -5%;
    left: 2.5%;
    width: 95%;
    height: 1px;
    background-color: #313131;
  }
`;
export const MiddleSessionIcon = styled.div.attrs({
  id: "middlesessionicon",
})`
  width: 60px;
  height: 60px;
  display: flex;
  position: relative;
  margin-left: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.icon});
`;
export const MiddleSessionButton = styled.button.attrs({
  id: "middlenicknamenputbutton",
})`
  width: 18%;
  height: 50px;
  display: flex;
  position: absolute;
  right: 4%;
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
export const MiddleSessionDiv = styled.div.attrs({
  id: "middlesessiontypescontainer",
})`
  max-width: 1280px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-left: 50px;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  ${(props) =>
    props.isProfile === "" &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === "" &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== "" &&
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
`;
export const ProfileModalCloseButton = styled.div.attrs({
  id: "profilemodalCloseButton",
})`
  width: 30px;
  height: 30px;
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
  background-size: 15px 15px;
  background-image: url("/images/icon/m_menu_close.png");
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;
export const ProfileModalLogo = styled.div.attrs({
  id: "profilemodalCloseButton",
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
    props.isProfile === "" &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === "" &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== "" &&
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
