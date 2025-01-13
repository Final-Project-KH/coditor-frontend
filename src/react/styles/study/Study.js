import { Link } from "react-router-dom";
import styled from "styled-components";

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
  padding-left: 10px;
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const LeftSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 100%;
  height: 290.18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 18px;
  gap: 5px;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  top: 175px;
  left: 0;
`;

export const SubjectImgContainerJava = styled.div.attrs({
  id: "subjectimgcontainerjava",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerPython = styled.div.attrs({
  id: "subjectimgcontainerpython",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/python_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerC = styled.div.attrs({
  id: "subjectimgcontainerc",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/c_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerCPlus = styled.div.attrs({
  id: "subjectimgcontainercplus",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/cplus_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerJavaScript = styled.div.attrs({
  id: "subjectimgcontainerjavascript",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/js_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectTitle = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubjectContents = styled.div.attrs({
  id: "subjectcontents",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const SubjectRateContainer = styled.div.attrs({
  id: "subjectratecontainer",
})`
  width: 100%;
  height: 33px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SubjectRateBox = styled.div.attrs({
  id: "subjectratebox",
})`
  width: 100%;
  height: 13px;
`;
export const SubjectRateWhite = styled.div.attrs({
  id: "subjectratewhite",
})`
  width: 90%;
  height: 13px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 220px;
  left: 5%;
`;
export const SubjectRateBlack = styled.div.attrs({
  id: "subjectrateblack",
})`
  width: 46%;
  height: 13px;
  border-radius: 10px 0px 0px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 220px;
  left: 5%;
`;
export const SubjectRateContents = styled.div.attrs({
  id: "subjectratecontents",
})`
  width: 100%;
  height: 14px;
  font-family: "regular", sans-serif;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubjectLink = styled.button`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 30px;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
  }
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
`;

export const EachClass = styled.div.attrs({
  id: "eachclass",
})`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px 30px 0px 0px;
`;

export const ClassHeaderTitle = styled.div.attrs({
  id: "classheadertitle",
})`
  width: 90%;
  padding-left: 30px;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const ClassHeaderTitlePathLink = styled.button.attrs({
  id: "classheadertitlepathlink",
})`
  width: inherit;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
`;
export const ClassHeaderTitleButton = styled.div.attrs({
  id: "classheadertitlebutton",
})`
  width: 30px;
  height: 30px;
  position: relative;
  margin-right: 30px;
  color: white;
  cursor: pointer;
  &::before {
    content: ${(props) =>
      props.isOpen ? '"▼"' : '"▶"'}; /* 토글 상태에 따라 아이콘 변경 */
    position: relative;
    margin-left: 7px;
  }
`;
export const StickyClassBox = styled.div.attrs({
  id: "stickyclassbox",
})`
  width: 100%;
  height: calc(100vh - 510px);
  position: sticky;
  top: 490px;
  bottom: 50px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;
export const ClassContents = styled.div.attrs({
  id: "classcontents",
})`
  width: 95%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`;
export const ClassSet = styled.div.attrs({
  id: "classset",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & + &::before {
    content: "";
    position: absolute;
    width: 710px;
    left: 20px;
    height: 1px;
    background-color: black;
    transform: rotate(0deg);
  }
`;
export const ClassName = styled.div.attrs({
  id: "classname",
})`
  color: black;
  font-size: 20px;
  font-family: "medium", sans-serif;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  .menu-link {
    display: inline-block;
    border-radius: 30px;
    text-decoration: none;
    color: inherit;
    padding: 5px 20px; /* 텍스트 주변에 여백을 추가하여 배경색이 더 커지도록 */
  }
  .menu-link:hover {
    text-decoration: none; /* 호버 시 밑줄 추가 */
    background-color: #313131;
    color: white;
  }
`;
export const ClassNamePathLink = styled.button.attrs({
  id: "classnamepathlink",
})`
  display: inline-block;
  font-size: 20px;
  font-family: "medium", sans-serif;
  text-decoration: none;
  border-radius: 30px;
  color: inherit;
  padding: 5px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: #313131;
    color: white;
  }
`;
export const PathLink = styled.button.attrs({
  id: "pathlink",
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
    background-color: #313131;
    color: white;
  }
`;
export const ArrowLink = styled.button.attrs({
  id: "arrowlink",
})`
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const c = styled.button.attrs({
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
export const ClassStatus = styled.div.attrs({
  id: "classstatus",
})`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ClassStatusDot = styled.div.attrs({
  id: "classstatusdot",
})`
  width: 15%;
  font-size: 8px;
`;
export const ClassStatusText = styled.div.attrs({
  id: "classstatustext",
})`
  width: 85%;
  font-size: 16px;
  font-family: "semibold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;

export const ClassContentsContainer = styled.div.attrs({
  id: "classcontentscontainer",
})`
  width: 90%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const ClassContentsTitle1 = styled.div.attrs({
  id: "classcontentstitle1",
})`
  width: 100%;
  font-size: 20px;
  font-family: "bold", sans-serif;
  color: black;
`;
export const ClassContentsTitle2 = styled.div.attrs({
  id: "classcontentstitle2",
})`
  width: 100%;
  font-size: 18px;
  font-family: "medium", sans-serif;
  color: #2c79c1;
`;
export const ClassContentsTitle3 = styled.div.attrs({
  id: "classcontentstitle3",
})`
  width: 100%;
  font-size: 16px;
  font-family: "medium", sans-serif;
  color: #fe9226;
`;
export const ClassContentsText = styled.div.attrs({
  id: "classcontentstext",
})`
  width: 100%;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
`;
export const ClassContentsTextTab = styled.div.attrs({
  id: "classcontentstexttab",
})`
  padding-left: 25px;
  font-family: "regular", sans-serif;
`;
export const ClassContentsImage = styled.div.attrs({
  id: "classcontentsimage",
})`
  width: 600px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
`;

export const ClassContentsCodeBox = styled.div.attrs({
  id: "classcontentscodebox",
})`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  padding: 20px 25px;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: black;
  background-color: white;
  border-radius: 10px;
`;

export const ClassContentsCode = styled.div.attrs({
  id: "classcontentscode",
})`
  width: 100%;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: #313131;
`;

export const ClassTable = styled.table.attrs({
  id: "classtable",
})`
  width: 100%;
  border-collapse: collapse;
  border: 1px;
`;

export const ClassTableTr = styled.tr.attrs({
  id: "classtabletr",
})`
  border: 1px solid black;
`;

export const ClassTableTd = styled.td.attrs({
  id: "classtabletd",
})`
  border: 1px solid black;
  padding: 10px;
`;

export const ClassIndex = styled.div.attrs({
  id: "classindex",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  position: sticky;
  top: 490px;
  height: calc(100vh - 515px);
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;

export const ClassIndexInner = styled.div.attrs({
  id: "classindexinner",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  padding-bottom: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
`;
export const ClassIndexName = styled.div.attrs({
  id: "classindexname",
})`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  padding-left: 20px;
  font-size: 20px;
  font-family: "medium", sans-serif;
  margin-bottom: 3px;
  cursor: pointer;
  position: relative;
  &:hover {
    font-family: "bold", sans-serif;
  }
`;
export const ClassIndexHr = styled.hr.attrs({
  id: "classindexhr",
})`
  width: 90%;
  color: white;
`;

export const ArrowContainer = styled.div.attrs({
  id: "arrowcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftArrow = styled.div.attrs({
  id: "leftarrow",
})`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center; */
  /* background-image: url("/images/icon/arrow_left.png"); */

  /* 기존 background-image 제거 */
  background-image: none;

  /* ::before를 사용하여 텍스트 추가 */
  &::before {
    content: "◀";
    width: 95%;
    height: 95%;
    padding-right: 5%;
    padding-bottom: 5%;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RightArrow = styled.div.attrs({
  id: "rightarrow",
})`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center; */
  /* background-image: url("/images/icon/arrow_right.png"); */

  /* ::before를 사용하여 텍스트 추가 */
  &::before {
    content: "▶";
    width: 95%;
    height: 95%;
    padding-left: 5%;
    padding-bottom: 5%;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavigatePath = styled.button`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
