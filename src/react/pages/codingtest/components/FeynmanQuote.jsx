import React from "react";
import styled from "styled-components";

const FeynmanQuote = () => {
  return (
    <CssWrapper>
      <div className="quote-container">
        <blockquote className="feynman-quote">
          "What I cannot create, I do not understand."
        </blockquote>
        <p className="translation">
          "내가 만들 수 없는 것은 이해하지 못한 것이다."
        </p>
        <p className="author">- Richard Feynman</p>
      </div>
    </CssWrapper>
  );
};

export default FeynmanQuote;

const CssWrapper = styled.div`
  .quote-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    font-family: "Arial", sans-serif;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .feynman-quote {
    font-size: 2rem;
    font-style: italic;
    color: #333;
    text-align: center;
    max-width: 600px;
    margin: 0;
    padding: 20px;
    border-left: 5px solid #007bff;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .translation {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
    font-style: italic;
  }

  .author {
    font-size: 1.2rem;
    color: #666;
    margin-top: 10px;
  }
`;
