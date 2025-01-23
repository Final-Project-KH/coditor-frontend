import { useEffect, useState } from "react";
import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_Coding_TopSort = ({ onSortChange }) => {
  const [activeSort, setActiveSort] = useState("createdAt"); // default 상태는 전체보기

  const handleSort = (sortBy) => {
    setActiveSort(sortBy);
    onSortChange(sortBy);
  };

  return (
    <>
      <TopSortOuterContiner>
      <TopSortInnerContainer>
          {activeSort === "createdAt" ? (
            <TopSortTitleActive onClick={() => handleSort("createdAt")}>
              전체
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("createdAt")}>
              전체
            </TopSortTitleInactive>
          )}
          {activeSort === "Active" ? (
            <TopSortTitleActive onClick={() => handleSort("Active")}>
              미해결
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("Active")}>
              미해결
            </TopSortTitleInactive>
          )}
          {activeSort === "Inactive" ? (
            <TopSortTitleActive onClick={() => handleSort("Inactive")}>
              해결됨
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("Inactive")}>
              해결됨
            </TopSortTitleInactive>
          )}
        </TopSortInnerContainer>
      </TopSortOuterContiner>
    </>
  );
};

export default Board_Coding_TopSort;
