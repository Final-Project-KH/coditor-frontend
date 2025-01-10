import {
  MiddleSortOuterContiner,
  MiddleSortInnerContainer,
  MiddleSortTitleActiveBox,
  MiddleSortTitleInactiveBox,
  MiddleSortTitleActiveDot,
  MiddleSortTitleActiveText,
  MiddleSortTitleInactiveDot,
  MiddleSortTitleInactiveText,
} from "../../../../styles/community/Board";

const Board_Course_MiddleSort = () => {
  return (
    <>
      <MiddleSortOuterContiner>
        <MiddleSortInnerContainer>
          <MiddleSortTitleActiveBox>
            <MiddleSortTitleActiveDot />
            <MiddleSortTitleActiveText>최신순</MiddleSortTitleActiveText>
          </MiddleSortTitleActiveBox>
          <MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveDot />
            <MiddleSortTitleInactiveText>정확도순</MiddleSortTitleInactiveText>
          </MiddleSortTitleInactiveBox>
          <MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveDot />
            <MiddleSortTitleInactiveText>
              댓글많은순
            </MiddleSortTitleInactiveText>
          </MiddleSortTitleInactiveBox>
          <MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveDot />
            <MiddleSortTitleInactiveText>좋아요순</MiddleSortTitleInactiveText>
          </MiddleSortTitleInactiveBox>
        </MiddleSortInnerContainer>
        <hr />
      </MiddleSortOuterContiner>
    </>
  );
};

export default Board_Course_MiddleSort;
