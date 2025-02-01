import styled, { css } from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
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

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const MainPostContainer = styled.div.attrs({
  id: "mainpostcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;
export const MainPostTop = styled.div.attrs({
  id: "mainposttop",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const MainPostTitle = styled.div.attrs({
  id: "mainposttitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 28px;
  font-family: "bold", sans-serif;
  color: black;
`;
export const MainPostInformation = styled.div.attrs({
  id: "mainpostinformation",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-bottom: 20px;
`;
export const MainPostDate = styled.div.attrs({
  id: "mainpostdate",
})`
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostViewsBox = styled.div.attrs({
  id: "mainpostviewsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostViewsImg = styled.div.attrs({
  id: "mainpostviewsimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  margin-top: 3px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/main_views.png");
`;
export const MainPostViewsText = styled.div.attrs({
  id: "mainpostviewstext",
})`
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostEditedText = styled.div.attrs({
  id: "mainposteditedtext",
})`
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostThumbsUpBox = styled.div.attrs({
  id: "mainpostthumbsupbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostThumbsUpImg = styled.div.attrs({
  id: "mainpostthumbsupimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/thumbsup_g.png");
`;
export const MainPostThumbsUpText = styled.div.attrs({
  id: "mainpostthumbsuptext",
})`
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: #0c8450;
`;
export const MainPostThumbsDownBox = styled.div.attrs({
  id: "mainpostthumbsdownbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostThumbsDownImg = styled.div.attrs({
  id: "mainpostthumbsdownimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/thumbsdown_r.png");
`;
export const MainPostThumbsDownText = styled.div.attrs({
  id: "mainpostthumbsdowntext",
})`
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: #ff0000;
`;
export const MainPostMiddle = styled.div.attrs({
  id: "mainpostmiddle",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
export const LeftEvBox = styled.div.attrs({
  id: "leftevbox",
})`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;
export const LeftEvUp = styled.div.attrs({
  id: "leftevup",
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.userLikeCnt === 1 &&
    css`
      background-color: black;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsup_g.png");
    `}
  ${(props) =>
    props.userLikeCnt === 0 &&
    css`
      background-color: black;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsup_w.png");
    `}
`;
export const LeftEvDown = styled.div.attrs({
  id: "leftevdown",
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.userDisLikeCnt === 1 &&
    css`
      background-color: black;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsdown_r.png");
    `}
  ${(props) =>
    props.userDisLikeCnt === 0 &&
    css`
      background-color: black;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsdown_w.png");
    `}
`;
export const MainPostContentsBox = styled.div.attrs({
  id: "mainpostcontentsbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const MainPostContentsText = styled.div.attrs({
  id: "mainpostcontentstext",
})`
  width: 100%;
  font-size: 16px;
  font-family: "regular", sans-serif;
  color: black;
  margin-bottom: 50px;
  line-height: 30px;
  padding-left: 10px;
`;
export const MainPostTagsBox = styled.div.attrs({
  id: "mainposttagsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const MainPostTag = styled.div.attrs({
  id: "mainposttag",
})`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 6px;
  font-size: 11px;
  font-family: "medium", sans-serif;
`;
export const ReplyContainer = styled.div.attrs({
  id: "replycontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const ReplyTitle = styled.div.attrs({
  id: "replytitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 20px;
  font-family: "semibold", sans-serif;
  color: black;
`;
export const SuggestBox = styled.div.attrs({
  id: "suggestbox",
})`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  transition: all 0.3s ease;
  /* cursor: pointer; */
  ${({ expanded }) =>
    expanded &&
    `
    max-height: 400px;
    flex-direction: column;
    padding-top: 10px;
  `}
  /* 확장 후 내부 텍스트 숨기기 */
    ${({ expanded }) =>
    expanded &&
    `
    > span {
      display: none;
      transition: all 0.3s ease;
    }
  `}
`;

export const EditorBox = styled.div.attrs({
  id: "editorbox",
})`
  width: 100%;
  transition: all 0.3s ease;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

export const ReplyList = styled.div.attrs({
  id: "replylist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
`;
export const ReplyEach = styled.div.attrs({
  id: "replyeach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;
export const ReplyUserProfileBox = styled.div.attrs({
  id: "replyuserprofilebox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const ReplyUserProfileImg = styled.div.attrs({
  id: "replyuserprofileimg",
})`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50%;
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
export const ReplyUserProfileTextBox = styled.div.attrs({
  id: "replyuserprofiletextbox",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ReplyUserId = styled.div.attrs({
  id: "replyuserid",
})`
  text-align: left;
  font-size: 16px;
  font-family: "semibold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const ReplyUserDate = styled.div.attrs({
  id: "replyuserdate",
})`
  text-align: left;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const ReplyMiddle = styled.div.attrs({
  id: "replymiddle",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: flex-start;
  padding-bottom: 20px;
`;
export const ReplyMiddleText = styled.div.attrs({
  id: "replymiddletext",
})`
  font-size: 15px;
  font-family: "regular", sans-serif;
  color: black;
  line-height: 25px;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const UserProfileBox = styled.div.attrs({
  id: "userprofilebox",
})`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
`;
export const UserProfileImg = styled.div.attrs({
  id: "userprofileimg",
})`
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
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
export const UserProfileTextBox = styled.div.attrs({
  id: "userprofiletextbox",
})`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const UserId = styled.div.attrs({
  id: "userid",
})`
  text-align: left;
  font-size: 24px;
  font-family: "extrabold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const UserPostAmount = styled.div.attrs({
  id: "userpostamount",
})`
  text-align: left;
  font-size: 20px;
  font-family: "medium", sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;
export const RelatedPostsContainer = styled.div.attrs({
  id: "relatedpostscontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
`;
export const RelatedPostsTitle = styled.div.attrs({
  id: "relatedpoststitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  color: black;
`;

export const RelatedPostsList = styled.div.attrs({
  id: "relatedpostslist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const RelatedPostEach = styled.div.attrs({
  id: "relatedposteach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RelatedPostContents = styled.div.attrs({
  id: "relatedpostcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 13px;
`;
export const RelatedPostContentsTitle = styled.div.attrs({
  id: "relatedpostcontentstitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  text-align: left;
`;
export const RelatedPostContentsText = styled.div.attrs({
  id: "relatedpostcontentstext",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "regular", sans-serif;
  font-size: 14px;
  text-align: left;
`;
export const RelatedPostContentsBottom = styled.div.attrs({
  id: "relatedpostcontentsbottom",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
`;
export const PostBottomRepliesBox = styled.div.attrs({
  id: "postbottomrepliesbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomRepliesImg = styled.div.attrs({
  id: "postbottomrepliesimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/replies.png");
`;
export const PostBottomRepliesText = styled.div.attrs({
  id: "postbottomrepliestext",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: black;
`;
export const PostBottomViewsBox = styled.div.attrs({
  id: "postbottomviewsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomViewsImg = styled.div.attrs({
  id: "postbottomviewsimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/views.png");
`;
export const PostBottomViewsText = styled.div.attrs({
  id: "postbottomviewstext",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: black;
`;

export const MiddleDot = styled.div.attrs({
  id: "middledot",
})`
  width: 1.5px;
  height: 1.5px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  margin-right: 1px;
`;
export const WriteWrap = styled.div.attrs({
  id: "writewrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  overflow: none;
`;
export const WriteContainer = styled.div.attrs({
  id: "writecontainer",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  padding-bottom: 30px;
  overflow: none;
`;

export const WriteSortOuterContiner = styled.div.attrs({
  id: "writesortoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;
export const WriteSortInnerContainer = styled.div.attrs({
  id: "writesortinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WriteSortTitleActive = styled.div.attrs({
  id: "writesorttitleactive",
})`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 24px;
  font-family: "semibold", sans-serif;
  border-bottom: 2px solid black;
`;
export const WriteSortTitleInactive = styled.div.attrs({
  id: "writesorttitleinactive",
})`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 24px;
  font-family: "semibold", sans-serif;
`;

export const WriteBoardLink = styled.button.attrs({
  id: "writeboardlink",
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const WriteTitleBox = styled.div.attrs({
  id: "writetitlebox",
})`
  width: 100%;
  height: 50px;
`;
export const WriteTitle = styled.input.attrs({
  id: "writetitle",
})`
  width: 100%;
  padding: 5px 25px;
  font-family: "bold", sans-serif;
  font-size: 32px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const WriteTagBox = styled.div.attrs({
  id: "writetagbox",
})`
  width: 100%;
  height: 35px;
`;
export const WriteTags = styled.input.attrs({
  id: "writetags",
})`
  width: 100%;
  padding: 5px 25px;
  font-family: "medium", sans-serif;
  font-size: 20px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const TipTapBox = styled.div.attrs({
  id: "tiptapbox",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const EditorArea = styled.div.attrs({
  id: "editorarea",
})`
  width: 100%;
  height: calc(100vh - 350px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  flex-wrap: wrap;
  overflow: auto;
`;
export const ToolBarContainer = styled.div.attrs({
  id: "toolbarcontainer",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  max-width: 1280px;
  border-bottom: 1px solid #f1f1f1;
`;
export const WriteButtonsArea = styled.div.attrs({
  id: "writebuttonsarea",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
`;
export const WriteCancelButton = styled.div.attrs({
  id: "writecancelbutton",
})`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;

export const WriteSubmitButton = styled.div.attrs({
  id: "writesutmitbutton",
})`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f1f1f1;
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;
