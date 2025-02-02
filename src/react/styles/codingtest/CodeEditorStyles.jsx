import styled from "styled-components";

export const CodeEditorStyles = styled.div`
  width: 100%;
  height: calc(100dvh - 450px);

  & > div:first-child {
    width: 100%;
    padding: 0 30px;

    background-color: #333333;

    & > span {
      display: inline-block;

      padding: 10px 0;

      font-size: 20px;
      font-weight: bold;
      color: white;
    }
  }
`;
