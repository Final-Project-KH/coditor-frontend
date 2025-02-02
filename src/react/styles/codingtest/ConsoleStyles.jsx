import styled from "styled-components";

export const ConsoleStyles = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    width: 100%;
    padding-left: 30px;

    background-color: #333333;

    & > span {
      display: inline-block;

      padding: 10px 0;

      font-size: 20px;
      font-weight: bold;
      color: white;
    }
  }

  .console-outputs {
    width: 100%;
    height: 350px;
    display: flex;
    position: relative;
    background-color: black;
    color: white;
    padding: 20px;
  }
`;
