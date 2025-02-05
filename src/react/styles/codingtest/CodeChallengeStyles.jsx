import styled from "styled-components";

export const CodeChallengeStyles = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px;

  font-family: "regular", sans-serif;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;

    & > div:first-child {
      display: flex;

      .logo-container {
        display: flex;
        align-items: center;

        margin-right: 20px;

        .logo {
          display: inline-block;

          width: 50px;
          height: 50px;

          background-image: url("/images/logo/logo.png");
          background-size: contain;
        }
      }

      .menu-tree-indicator {
        display: flex;
        align-items: center;

        font-family: "regular", sans-serif;
        font-size: 18px;

        & > span:nth-child(2)::before,
        & > span:nth-child(2)::after {
          content: "〉";

          margin: 0 6px 0 14px;
        }

        span:last-child {
          font-family: "bold";
        }
      }
    }

    & > div:last-child {
      display: flex;
      align-items: center;

      * {
        font-family: "regular", sans-serif;
      }

      .leave-page-btn {
        width: 120px;
        height: 50px;

        background-color: rgba(0, 0, 0, 0.8);

        border: none;
        border-radius: 5px;

        cursor: pointer;

        color: #f1f1f1;
        font-size: 14px;
        font-family: "bold", sans-serif;
      }
    }
  }

  main {
    display: flex;

    min-height: calc(100dvh - 100px);

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: calc(100% - 480px);

      & > div:first-child {
        flex: 1;
      }

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

  footer {
    height: 20px;
  }
`;
