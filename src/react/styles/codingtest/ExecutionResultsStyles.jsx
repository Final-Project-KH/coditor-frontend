import styled from "styled-components";

export const ExecutionResultsStyles = styled.div`
  width: 100%;

  box-sizing: border-box;

  & > div:first-child {
    width: 100%;
    padding-left: 30px;

    background-color: #333333;

    & > span {
      display: inline-block;

      padding: 10px 0;

      font-size: 20px;
      font-family: "bold", sans-serif;
      color: white;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 20px;

    overflow-y: auto;

    background-color: black;

    border-radius: 0 0 20px 20px;

    color: white;

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 15px;

      .output-detail-toggle-btn {
        margin-top: 10px;
        padding: 5px 10px;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        &:hover {
          background-color: #555;
        }
      }
    }

    li:not(ul > li:last-child) {
      margin-bottom: 2em;
    }
  }
`;
