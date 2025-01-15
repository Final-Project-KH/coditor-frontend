import {
  WriteSortInnerContainer,
  WriteSortOuterContiner,
  WriteSortTitleActive,
  WriteSortTitleInactive,
} from "../../../../styles/community/Post";

const Post_WriteSort = () => {
  return (
    <>
      <WriteSortOuterContiner>
        <WriteSortInnerContainer>
          <WriteSortTitleActive>코딩 질문</WriteSortTitleActive>
          <WriteSortTitleInactive>진로 질문</WriteSortTitleInactive>
          <WriteSortTitleInactive>스터디</WriteSortTitleInactive>
          <WriteSortTitleInactive>팀 프로젝트</WriteSortTitleInactive>
          <WriteSortTitleInactive>멘토링</WriteSortTitleInactive>
        </WriteSortInnerContainer>
      </WriteSortOuterContiner>
    </>
  );
};

export default Post_WriteSort;
