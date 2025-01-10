import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_Coding_TopSort = () => {
  return (
    <>
      <TopSortOuterContiner>
        <TopSortInnerContainer>
          <TopSortTitleActive>전체</TopSortTitleActive>
          <TopSortTitleInactive>미해결</TopSortTitleInactive>
          <TopSortTitleInactive>해결됨</TopSortTitleInactive>
        </TopSortInnerContainer>
        <hr />
      </TopSortOuterContiner>
    </>
  );
};

export default Board_Coding_TopSort;
