import styled from "styled-components";

export const CodeEditorStyles = styled.div`
  width: 100%;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 30px;

    background-color: #333333;

    border-radius: 20px 20px 0 0;

    & > span {
      display: inline-block;

      padding: 10px 0;

      font-size: 20px;
      font-family: "bold", sans-serif;
      color: white;
    }

    & > div {
      display: flex;
      align-items: center;
    }
  }

  button {
    position: relative;

    width: 25px;
    height: 25px;

    margin-left: 25px;

    background-color: transparent;

    border: none;

    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }

    p {
      position: absolute;
      right: -16px;
      bottom: -48px;

      z-index: 15;

      display: inline-block;

      width: 9rem;

      padding: 0.5em 1em;

      box-sizing: border-box;
      border-radius: 4px;

      box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);

      background-color: #f1f1f1;

      font-size: 14px;
    }
  }

  button > img:hover {
    transform: scale(1.1);
  }

  .MuiFormControl-root {
    margin: 0;
  }
  .MuiSelect-root > fieldset,
  .MuiSelect-root > fieldset:focus,
  .MuiSelect-root > svg {
    border-color: white !important;
    color: white !important;
  }

  @media (max-width: 767px) {
    & > div:first-child {
      & > span {
        font-size: 16px;
      }
    }

    & > section {
      min-height: 436px;
    }
  }
`;
