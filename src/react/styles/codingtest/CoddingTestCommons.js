import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

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
export const Navigator = styled.div.attrs({
  id: "navigator",
})`
  display: flex;
  position: relative;
  width: 100%;
  height: 30px;
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
  left: 0;
  gap: 25px;
`;
export const LeftTopSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  border-radius: 30px;
  position: sticky;
  left: 0;
`;
export const LeftMiddleSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  left: 0;

`;
export const LeftSubjectSubContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: relative;
  justify-content: center;
`;
export const SubjectImgContainerJava = styled.div.attrs({
  id: "subjectimgcontainerjava",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
`;
export const SubjectUserContainer = styled.div.attrs({
  id: "subjectusercontainer",
})`
  width: 104px;
  height: 104px;
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
  font-family: "semibold", sans-serif;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubjectContent = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  height: 30px;
  font-family: "medium", sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
  position: relative;
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
  position: relative;
`;
export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
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
  position: relative;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const ClassContents = styled.div.attrs({
  id: "classcontents",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
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
    width: 740px;
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
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px 20px;
  display: flex;
  position: relative;
  &:hover {
    text-decoration: none; /* 호버 시 밑줄 추가 */
    background-color: #313131;
    color: white;
    display: inline-block;
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-color: transparent;
`;
