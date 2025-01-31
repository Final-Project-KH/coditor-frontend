import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
`;

export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
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
export const ClassHeaderButton = styled.button.attrs({
  id: "classheaderbutton",
})`
  width: 60px;
  height: 30px;
  position: absolute;
  right: 30px;
  color: white;
  font-size: 13px;
  font-family: "bold", sans-serif;
  background-color: pink;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;
export const InputClass = styled.div.attrs({
  id: "inputclass",
})`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
export const StyledDiv = styled.div.attrs({
  id: "styleddiv",
})`
  width: 100%;
  height: 350px;
  display: flex;
  position: relative;
  background-color: black;
  color: white;
  padding: 20px;
`;
export const InputClassInner = styled.textarea.attrs({
  id: "inputclassinner",
})`
  width: 90%;
  height: 80%;
  color: white;
`;

export const ConsoleClass = styled.div.attrs({
  id: "consoleclass",
})`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const ConsoleClassInner = styled.div.attrs({
  id: "consoleclassinner",
})`
  width: 90%;
  color: white;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
  position: relative;
  margin-top: 25px;
`;

export const ChallengeTitle = styled.div`
  & > div:first-of-type {
    border-radius: 30px 30px 0px 0px;

    background-color: rgba(0, 0, 0, 0.8);

    color: white;
  }
  & > div:nth-of-type(2) {
    border-radius: 0px 0px 30px 30px;

    background-color: #f1f1f1;

    color: black;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & span {
    margin: 10px 25px;

    font-weight: bold;
    font-size: 20px;
    white-space: pre-wrap;
  }

  & > div:last-child span {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ChallengeDesc = styled.div`
  & > div:first-of-type {
    border-radius: 30px 30px 0px 0px;

    background-color: rgba(0, 0, 0, 0.8);

    color: white;
  }
  & > div:nth-of-type(2) {
    border-radius: 0px 0px 30px 30px;

    background-color: #f1f1f1;

    color: black;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    flex-direction: column;
    align-items: start;
  }

  & p,
  & span {
    margin: 10px 25px;

    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
  }

  & > div:last-child p {
    width: calc(100% - 50px);

    padding-bottom: 20px;
    margin-top: 0;
    margin-bottom: 0;

    border-bottom: 2px solid rgba(0, 0, 0, 0.8);

    font-size: 16px;
  }

  & > div:last-child p:last-of-type {
    border: 0;
  }

  & > div:last-child span {
    display: inline-block;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  & > div:last-child span:first-of-type {
  }
`;

export const ChallengeOutputsEx = styled.div`
  display: flex;
  justify-content: space-between;

  & > section {
    width: 47.5%;
  }

  & > section div:first-of-type {
    border-radius: 30px 30px 0px 0px;

    background-color: rgba(0, 0, 0, 0.8);

    color: white;
  }
  & > section div:nth-of-type(2) {
    min-height: 75px;

    border-radius: 0px 0px 30px 30px;

    background-color: #f1f1f1;

    color: black;
  }

  & > section div {
    display: flex;
    align-items: center;
  }

  & span {
    margin: 10px 25px;

    font-weight: bold;
    font-size: 20px;
  }

  table {
    width: 100%;

    border-collapse: separate;
    border-spacing: 0;
  }

  th,
  td {
    padding: 6px 15px;

    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;

    text-align: center;
  }

  th:first-child,
  td:first-child {
    border-left: 1px solid #c6c9cc;
  }

  th {
    background: #dfdfe3;

    color: #234;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 30px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 30px;
  }
`;
