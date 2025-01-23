import { useState } from "react";

import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_TopSort = ({ onSortChange, boardType }) => {
  const [activeSort, setActiveSort] = useState("All");

  const handleSort = (sort) => {
    setActiveSort(sort);
    onSortChange(sort);
  };

  const renderSortOptions = () => {
    switch (boardType) {
      case "coding":
        return (
          <TopSortOuterContiner>
            <TopSortInnerContainer>
              {activeSort === "All" ? (
                <TopSortTitleActive onClick={() => handleSort("All")}>
                  전체
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleSort("All")}>
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
        );
      case "study":
      case "team":
        return (
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
              {activeSort === "Recruiting" ? (
                <TopSortTitleActive onClick={() => handleSort("Recruiting")}>
                  모집중
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleSort("Recruiting")}>
                  모집중
                </TopSortTitleInactive>
              )}
              {activeSort === "Completed" ? (
                <TopSortTitleActive onClick={() => handleSort("Completed")}>
                  모집완료
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleSort("Completed")}>
                  모집완료
                </TopSortTitleInactive>
              )}
            </TopSortInnerContainer>
          </TopSortOuterContiner>
        );
      case "Course":
        return null; // Course 타입에서는 정렬 옵션이 표시되지 않음
      default:
        return null;
    }
  };

  return <>{renderSortOptions()}</>;
};

export default Board_TopSort;
