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

    & > p {
      font-size: 16px;
    }

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 15px;

      .output-detail-toggle-btn {
        margin-top: 10px;
        padding: 5px 10px;

        border: none;
        border-radius: 4px;

        background-color: #333;

        color: white;

        cursor: pointer;
        &:hover {
          background-color: #555;
        }
      }

      & > p,
      & > span {
        font-size: 16px;
      }

      & > span {
        margin-right: 12px;
      }
    }

    li:not(ul > li:last-child) {
      margin-bottom: 2em;
    }
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-track {
    background-color: transparent; /* 배경을 투명으로 설정 */
  }

  ::-webkit-scrollbar-button {
    display: none; /* 화살표 제거 */
  }

  @media (max-width: 767px) {
    & > div:first-child {
      & > span {
        font-size: 16px;
      }
    }

    & > div:last-child {
      li {
        & > span,
        & > p {
          font-size: 14px;
        }
      }
    }
  }
`;
