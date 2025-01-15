import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_Team_TopSort = () => {
  return (
    <>
      <TopSortOuterContiner>
        <TopSortInnerContainer>
          <TopSortTitleActive>전체</TopSortTitleActive>
          <TopSortTitleInactive>모집중</TopSortTitleInactive>
          <TopSortTitleInactive>모집완료</TopSortTitleInactive>
        </TopSortInnerContainer>
      </TopSortOuterContiner>
    </>
  );
};

export default Board_Team_TopSort;
