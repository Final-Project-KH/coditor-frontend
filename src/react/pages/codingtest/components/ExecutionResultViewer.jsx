import React, { useState } from "react";
import {
  ClassHeader,
  ClassHeaderTitle,
} from "../../../styles/codingtest/ChallengeStyles";
import Console from "./Console";
import styled from "styled-components";

const ExecutionResultViewer = ({ results }) => {
  const [expandedTestCases, setExpandedTestCases] = useState({});

  if (results === null && Object.keys(expandedTestCases).length > 0) {
    setExpandedTestCases({});
  }

  const toggleDetails = (idx) => {
    setExpandedTestCases((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <>
      <ClassHeader>
        <ClassHeaderTitle>RESULTS</ClassHeaderTitle>
      </ClassHeader>
      <Main>
        {results === null ? (
          <p>이 곳에 실행 결과가 표시됩니다.</p>
        ) : (
          Object.keys(results).length > 0 && (
            <>
              {Object.entries(results).map(([idx, result]) => (
                <ResultItem key={idx}>
                  <p>테스트케이스 {idx}번 실행 결과</p>
                  {Object.keys(result).length === 0 ? (
                    <p>⏳ 실행 중...</p>
                  ) : (
                    <>
                      <p>성공 여부: {result.success ? "✅ 성공" : "❌ 실패"}</p>
                      {result.memoryUsage && (
                        <p>메모리 사용량: {result.memoryUsage} KB</p>
                      )}
                      {result.runningTime && (
                        <p>실행 시간: {result.runningTime} ms</p>
                      )}
                      {result.error && <p>{result.error}</p>}

                      {!result.success && result.detail && (
                        <DetailButton onClick={() => toggleDetails(idx)}>
                          {expandedTestCases[idx]
                            ? "상세보기 접기"
                            : "상세보기"}
                        </DetailButton>
                      )}
                      {expandedTestCases[idx] && !result.success && (
                        <Console message={result.detail} />
                      )}
                    </>
                  )}
                </ResultItem>
              ))}
            </>
          )
        )}
      </Main>
    </>
  );
};

export default ExecutionResultViewer;

const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 350px;

  padding: 20px;

  overflow-y: auto;

  background-color: black;

  color: white;
`;

const ResultItem = styled.div`
  margin-bottom: 15px;
`;

const DetailButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;
