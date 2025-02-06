import styled from "styled-components";

export const CodeChallengeInfoStyles = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding-left: 25px;

  .challenge-title {
    & > div:first-child {
      border-radius: 30px 30px 0px 0px;

      background-color: rgba(0, 0, 0, 0.8);

      color: white;
    }
    & > div:nth-child(2) {
      border-radius: 0px 0px 30px 30px;

      background-color: #f1f1f1;

      color: black;
    }

    & span {
      display: inline-block;

      padding: 10px 25px;

      font-family: "bold", sans-serif;
      font-size: 20px;
      white-space: pre-wrap;
    }

    & > div:last-child p {
      padding: 20px 25px;

      font-family: "medium", sans-serif;
      font-size: 18px;
    }
  }

  .challenge-desc {
    & > div:first-child {
      border-radius: 30px 30px 0px 0px;

      background-color: rgba(0, 0, 0, 0.8);

      color: white;
    }
    & > div:nth-child(2) {
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

    & span {
      display: inline-block;

      padding: 10px 25px;

      font-size: 20px;
      font-family: "medium", sans-serif;
      white-space: pre-wrap;
    }

    & span:not(.challenge-desc > div:first-child > span) {
      padding-bottom: 8px;

      font-family: "bold", sans-serif;
      font-size: 18px;
    }

    & > div:last-child p {
      width: calc(100% - 50px);

      padding-left: 0;
      padding-right: 0;
      padding-bottom: 20px;
      margin: 0 25px;

      border-bottom: 2px solid rgba(0, 0, 0, 0.8);

      font-size: 16px;
      white-space: pre-wrap;
    }

    & > div:last-child p:last-of-type {
      border: 0;
    }

    & > div:last-child span {
      display: inline-block;

      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  .challenge-io-example {
    & > div:first-child {
      display: flex;

      border-radius: 30px 30px 0px 0px;

      background-color: rgba(0, 0, 0, 0.8);

      color: white;

      & > span {
        padding: 10px 25px;

        font-family: "bold", sans-serif;
        font-size: 20px;
      }
    }

    & > div:nth-child(2) {
      & table {
        width: 100%;

        border-collapse: separate;
        border-spacing: 0;
      }

      & th,
      & td {
        padding: 6px 15px;

        border-right: 1px solid #c6c9cc;
        border-bottom: 1px solid #c6c9cc;

        text-align: center;
      }

      & th:first-child,
      & td:first-child {
        border-left: 1px solid #c6c9cc;
      }

      & th {
        background: #dfdfe3;

        color: #234;
      }

      & tr:last-child td:first-child {
        border-bottom-left-radius: 30px;
      }

      & tr:last-child td:last-child {
        border-bottom-right-radius: 30px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-left: 0;

    .challenge-title {
      & > div:first-child {
        border-radius: 14px 14px 0px 0px;
      }

      & > div:nth-child(2) {
        margin-bottom: 1rem;

        border-radius: 0px 0px 14px 14px;
      }

      & span {
        font-size: 16px;
      }

      & > div:last-child p {
        font-size: 14px;
      }
    }

    .challenge-desc {
      & > div:first-child {
        border-radius: 14px 14px 0px 0px;
      }
      & > div:nth-child(2) {
        margin-bottom: 1rem;

        border-radius: 0px 0px 14px 14px;
      }

      & span {
        font-size: 16px;
      }

      & > div:last-child p {
        font-size: 14px;
      }

      & span:not(.challenge-desc > div:first-child > span) {
        font-family: "bold", sans-serif;
        font-size: 14px;
      }
    }

    .challenge-io-example {
      & > div:first-child {
        border-radius: 14px 14px 0px 0px;
      }

      & span {
        font-size: 16px !important;
      }

      & table {
        font-size: 14px;
        margin-bottom: 1rem;
      }

      & tr:last-child td:first-child {
        border-bottom-left-radius: 14px !important;
      }

      & tr:last-child td:last-child {
        border-bottom-right-radius: 14px !important;
      }
    }
  }
`;
