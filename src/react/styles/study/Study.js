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
export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 50px;
`;
export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  left: 0;
`;
export const LeftSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 400px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 18px;
  gap: 9px;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  top: 150px;
  left: 0;
`;

export const SubjectImgContainer = styled.div.attrs({
  id: "subjectimgcontainer",
})`
  width: 234px;
  height: 156px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
`;

export const SubjectTitle = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  height: 30px;
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
  height: 20px;
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
  width: 364px;
  height: 13px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 250px;
`;
export const SubjectRateBlack = styled.div.attrs({
  id: "subjectrateblack",
})`
  width: 195px;
  height: 13px;
  border-radius: 10px 0px 0px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 250px;
`;
export const SubjectRateContents = styled.div.attrs({
  id: "subjectratecontents",
})`
  width: 100%;
  height: 14px;
  font-family: "regular", sans-serif;
  font-size: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 830px;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
  width: 600px;
  margin-left: 30px;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const StickyClassBox = styled.div.attrs({
  id: "stickyclassbox",
})`
  width: 100%;
  height: calc(100vh - 550px);
  position: sticky;
  top: 510px;
  bottom: 50px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;
export const ClassContents = styled.div.attrs({
  id: "classcontents",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
export const ClassSet = styled.div.attrs({
  id: "classset",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ClassName = styled.div.attrs({
  id: "classname",
})`
  width: 85%;
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
  width: 760px;
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
  border: 1px solid black;
  overflow-x: auto;
  padding: 20px 25px;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: black;
`;

export const ClassContentsCode = styled.div.attrs({
  id: "classcontentscode",
})`
  width: 1000px;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: gray;
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
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  position: sticky;
  top: 510px;
  height: calc(100vh - 560px);
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;

export const ClassIndexInner = styled.div.attrs({
  id: "classindexinner",
})`
  width: 92%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-bottom: 5px;
`;
export const ClassIndexName = styled.div.attrs({
  id: "classindexname",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  margin-left: 20px;
  font-size: 20px;
  font-family: "bold", sans-serif;
  cursor: pointer;
  position: relative;
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
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center;
  background-image: url("/images/icon/arrow_left.png");
`;
export const RightArrow = styled.div.attrs({
  id: "rightarrow",
})`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center;
  background-image: url("/images/icon/arrow_right.png");
`;