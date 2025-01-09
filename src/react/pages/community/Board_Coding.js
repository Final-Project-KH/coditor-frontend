import {
  BoardContainer,
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
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
  MiddleSortOuterContiner,
  MiddleSortInnerContainer,
  MiddleSortTitleActiveBox,
  MiddleSortTitleInactiveBox,
  MiddleSortTitleActiveDot,
  MiddleSortTitleActiveText,
  MiddleSortTitleInactiveDot,
  MiddleSortTitleInactiveText,
  PostListContainer,
  PostEach,
  PostTop,
  PostTopUserImg,
  PostTopUser,
  PostTopUserId,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsUpper,
  PostMiddleContentsPending,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostBottomTagsBox,
  PostBottomTag,
  PostBottomDataBox,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomDot,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostMiddleContentsSolved,
} from "../../styles/community/Board";

const Board_Coding = () => {
  return (
    <>
      <BoardContainer>
        <TopSortOuterContiner>
          <TopSortInnerContainer>
            <TopSortTitleActive>전체</TopSortTitleActive>
            <TopSortTitleInactive>미해결</TopSortTitleInactive>
            <TopSortTitleInactive>해결됨</TopSortTitleInactive>
          </TopSortInnerContainer>
          <hr />
        </TopSortOuterContiner>
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
        <MiddleSortOuterContiner>
          <MiddleSortInnerContainer>
            <MiddleSortTitleActiveBox>
              <MiddleSortTitleActiveDot />
              <MiddleSortTitleActiveText>최신순</MiddleSortTitleActiveText>
            </MiddleSortTitleActiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                정확도순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                답변많은순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                좋아요순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
          </MiddleSortInnerContainer>
          <hr />
        </MiddleSortOuterContiner>
        <PostListContainer>
          <PostEach>
            <PostTop>
              <PostTopUser>
                <PostTopUserImg
                  style={{
                    backgroundColor: "#313131",
                    backgroundImage: "url(/images/icon/profile_w.png)",
                  }}
                />
                <PostTopUserId>By: testid01</PostTopUserId>
              </PostTopUser>
              <PostTopDays>2days ago</PostTopDays>
            </PostTop>
            <PostMiddle>
              <PostMiddleContentsUpper>
                <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
                <PostMiddleContentsTitle>
                  Title of the discussion will be placed ver here
                </PostMiddleContentsTitle>
              </PostMiddleContentsUpper>
              <PostMiddleContentsText>
                That ipo will be a gamd-changer land it in region keep it lean
                this proposal is a win-win situation which will cause a stellar
                paradigm shift and produce a multi-fold increase in deliverables
                will be a good game changer land it in region
              </PostMiddleContentsText>
            </PostMiddle>
            <PostBottom>
              <PostBottomTagsBox>
                <PostBottomTag>#Java</PostBottomTag>
                <PostBottomTag>#ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>
          <hr />
          <PostEach>
            <PostTop>
              <PostTopUser>
                <PostTopUserImg
                  style={{
                    backgroundColor: "#313131",
                    backgroundImage: "url(/images/icon/profile_w.png)",
                  }}
                />
                <PostTopUserId>By: testid01</PostTopUserId>
              </PostTopUser>
              <PostTopDays>2days ago</PostTopDays>
            </PostTop>
            <PostMiddle>
              <PostMiddleContentsUpper>
                <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                <PostMiddleContentsTitle>
                  Title of the discussion will be placed ver here
                </PostMiddleContentsTitle>
              </PostMiddleContentsUpper>
              <PostMiddleContentsText>
                That ipo will be a gamd-changer land it in region keep it lean
                this proposal is a win-win situation which will cause a stellar
                paradigm shift and produce a multi-fold increase in deliverables
                will be a good game changer land it in region
              </PostMiddleContentsText>
            </PostMiddle>

            <PostBottom>
              <PostBottomTagsBox>
                <PostBottomTag>#Java</PostBottomTag>
                <PostBottomTag>#ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>
          <hr />
        </PostListContainer>
      </BoardContainer>
    </>
  );
};

export default Board_Coding;
