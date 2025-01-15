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
  PagenationContainer,
  PagenationEachBoxActive,
  PagenationEachBoxInactive,
  PagenationLLInactive,
  PagenationLInactive,
  PagenationNumber,
  PagenationRActive,
  PagenationRRActive,
  PostListHr,
} from "../../../styles/community/Board";

const Board_Main = () => {
  return (
    <>
      <BoardContainer>
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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

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
                <PostBottomTag># Java</PostBottomTag>
                <PostBottomTag># ETC</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>875 views</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>

          <PagenationContainer>
            <PagenationEachBoxInactive>
              <PagenationLLInactive />
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationLInactive />
            </PagenationEachBoxInactive>
            <PagenationEachBoxActive>
              <PagenationNumber>1</PagenationNumber>
            </PagenationEachBoxActive>
            <PagenationEachBoxInactive>
              <PagenationNumber>2</PagenationNumber>
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationNumber>3</PagenationNumber>
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationNumber>4</PagenationNumber>
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationNumber>5</PagenationNumber>
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationNumber>6</PagenationNumber>
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationNumber>7</PagenationNumber>
            </PagenationEachBoxInactive>

            <PagenationEachBoxInactive>
              <PagenationRActive />
            </PagenationEachBoxInactive>
            <PagenationEachBoxInactive>
              <PagenationRRActive />
            </PagenationEachBoxInactive>
          </PagenationContainer>
        </PostListContainer>
      </BoardContainer>
    </>
  );
};

export default Board_Main;
