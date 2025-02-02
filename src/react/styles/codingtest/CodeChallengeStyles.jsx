import styled from "styled-components";

export const CodeChallengeStyles = styled.div`
  display: flex;
  flex-direction: column;

  & > section:first-child {
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:last-child {
      display: flex;
    }
  }

  & > section:last-child {
    display: flex;

    & > div:first-child {
      display: flex;
      flex-direction: column;

      width: calc(100% - 480px);

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        height: 300px;
      }
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;

      width: 480px;
    }
  }
`;
