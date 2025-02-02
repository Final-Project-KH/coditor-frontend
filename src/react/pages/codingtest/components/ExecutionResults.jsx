import React, { useState } from "react";

import Console from "./Console";

import { ExecutionResultsStyles as CssWrapper } from "../../../styles/codingtest/ExecutionResultsStyles";

const ExecutionResults = ({ results }) => {
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
    <CssWrapper>
      <div>
        <span>RESULTS</span>
      </div>
      <div>
        {results === null ? (
          <p style={{ fontSize: "18px" }}>코드 실행 결과가 표시됩니다.</p>
        ) : (
          Object.keys(results).length > 0 && (
            <ul>
              {Object.entries(results).map(([idx, result]) => (
                <li key={idx}>
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
                        <button
                          className="output-detail-toggle-btn"
                          onClick={() => toggleDetails(idx)}
                        >
                          {expandedTestCases[idx]
                            ? "상세보기 접기"
                            : "상세보기"}
                        </button>
                      )}
                      {expandedTestCases[idx] && !result.success && (
                        <Console message={result.detail} />
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </CssWrapper>
  );
};

export default ExecutionResults;
