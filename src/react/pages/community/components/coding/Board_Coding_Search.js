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

const Board_Coding_Search = () => {
  return (
    <>
            <SearchContainer>
          <InputSearchContainer>
            <InputSearchBox>
              <InputSearch placeholder="궁금한 내용을 검색해보세요!" />
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

export default Board_Coding_Search;