import {
  InputSearch,
  InputSearchBox,
  InputSearchButton,
  InputSearchContainer,
  TagSearch,
  TagSearchBox,
  TagSearchContainer,
  SearchContainer,
  ResetButtonBox,
  ResetButtonText,
  ResetButtonIcon,
} from "../../../../styles/community/Board";

const Board_Course_Search = () => {
  return (
    <>
      <SearchContainer>
        <InputSearchContainer>
          <InputSearchBox>
            <InputSearch placeholder="대화 내용을 검색해보세요!" />
          </InputSearchBox>
          <InputSearchButton>검색</InputSearchButton>
        </InputSearchContainer>
        <TagSearchContainer>
          <TagSearchBox>
            <TagSearch placeholder="태그로 검색해보세요!" />
          </TagSearchBox>
          <ResetButtonBox>
            <ResetButtonIcon />
            <ResetButtonText>초기화</ResetButtonText>
          </ResetButtonBox>
        </TagSearchContainer>
      </SearchContainer>
    </>
  );
};

export default Board_Course_Search;
