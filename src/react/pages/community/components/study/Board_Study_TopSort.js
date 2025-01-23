import { useState } from "react";
import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_Study_TopSort = () => {
  const [activeSort, setActiveSort] = useState("전체");

  const handleSort = (sortBy) => {
    setActiveSort(sortBy);
  };

  return (
    <>
      <TopSortOuterContiner>
        <TopSortInnerContainer>
          {activeSort === "전체" ? (
            <TopSortTitleActive onClick={() => handleSort("전체")}>
              전체
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("전체")}>
              전체
            </TopSortTitleInactive>
          )}

          {activeSort === "모집중" ? (
            <TopSortTitleActive onClick={() => handleSort("모집중")}>
              모집중
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("모집중")}>
              모집중
            </TopSortTitleInactive>
          )}

          {activeSort === "모집완료" ? (
            <TopSortTitleActive onClick={() => handleSort("모집완료")}>
              모집완료
            </TopSortTitleActive>
          ) : (
            <TopSortTitleInactive onClick={() => handleSort("모집완료")}>
              모집완료
            </TopSortTitleInactive>
          )}
        </TopSortInnerContainer>
      </TopSortOuterContiner>
    </>
  );
};

export default Board_Study_TopSort;
