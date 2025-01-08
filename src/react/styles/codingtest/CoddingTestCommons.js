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
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
`;
export const LeftTopSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  border-radius: 30px;
  position: sticky;
  left: 0;
`;
export const LeftMiddleSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  left: 0;
  margin-top: 50px;
`;
export const LeftSubjectSubContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: relative;
  justify-content: center;
`;
export const SubjectImgContainer = styled.div.attrs({
  id: "subjectimgcontainer",
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
  width: 780px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
  background-color: blue;
`;
