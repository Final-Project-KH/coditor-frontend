import styled from "styled-components";

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

export const ArrowLink = styled.button.attrs({
  id: "arrowlink",
})`
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
