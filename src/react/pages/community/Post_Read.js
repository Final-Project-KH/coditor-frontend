import {
  Wrap,
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
  MainPostContainer,
  MainPostTitle,
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
  RelatedPostsContainer,
  RelatedPostsTitle,
  RelatedPostsList,
  RelatedPostEach,
  RelatedPostContents,
  RelatedPostContentsTitle,
  RelatedPostContentsText,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  RelatedPostContentsBottom,
  PostBottomRepliesText,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  MainPostInformation,
  MiddleDot,
  MainPostViewsBox,
  MainPostViewsImg,
  MainPostViewsText,
  MainPostDate,
  MainPostEditedText,
  MainPostThumbsUpBox,
  MainPostThumbsUpImg,
  MainPostThumbsUpText,
  MainPostThumbsDownBox,
  MainPostThumbsDownImg,
  MainPostThumbsDownText,
  MainPostMiddle,
  LeftEvBox,
  LeftEvUp,
  LeftEvDown,
  MainPostContentsBox,
  MainPostContentsText,
  MainPostTagsBox,
  MainPostTag,
  StyledHr,
  ReplyTitle,
  SuggestBox,
  MainPostTop,
  ReplyContainer,
  ReplyEach,
  ReplyUserProfileBox,
  ReplyUserProfileImg,
  ReplyUserProfileTextBox,
  ReplyUserId,
  ReplyUserDate,
  ReplyMiddle,
  ReplyMiddleText,
  ReplyList,
} from "../../styles/community/Post_Read";

const Post_Read = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/community" className="menu-link">
              <TopBoxText>community</TopBoxText>
            </a>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <a href="/community/coding" className="menu-link">
              <TopBoxText>코딩 질문</TopBoxText>
            </a>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <a href="/community/coding/post1" className="menu-link">
              <TopBoxText>Post</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <MainPostContainer>
              <MainPostTop>
                <MainPostTitle>
                  Title of the discussion will be placed ver here
                </MainPostTitle>
                <MainPostInformation>
                  <MainPostDate>작성 2025.01.01. 11:00</MainPostDate>
                  <MiddleDot />
                  <MainPostViewsBox>
                    <MainPostViewsImg />
                    <MainPostViewsText>875</MainPostViewsText>
                  </MainPostViewsBox>
                  <MiddleDot />
                  <MainPostEditedText>수정됨</MainPostEditedText>
                  <MiddleDot />
                  <MainPostThumbsUpBox>
                    <MainPostThumbsUpImg />
                    <MainPostThumbsUpText>283</MainPostThumbsUpText>
                  </MainPostThumbsUpBox>
                  <MiddleDot />
                  <MainPostThumbsDownBox>
                    <MainPostThumbsDownImg />
                    <MainPostThumbsDownText>8</MainPostThumbsDownText>
                  </MainPostThumbsDownBox>
                </MainPostInformation>
              </MainPostTop>
              <MainPostMiddle>
                <LeftEvBox>
                  <LeftEvUp />
                  <LeftEvDown />
                </LeftEvBox>
                <MainPostContentsBox>
                  <MainPostContentsText>
                    Hey everyone! 🎉
                    <br />
                    <br />
                    I'm thrilled to share some exciting news with you all.
                    Starting next week,
                    <br />
                    we'lll be launching a brand new series on our blog focusing
                    on [your topic of interest]. 🚀
                    <br />
                    <br />
                    Get ready for insightful articles, expert interviews,
                    <br />
                    and valuable tips that will [mention the benefits]. 📚💡
                    <br />
                    <br />
                    Your feedback has always been our driving force,
                    <br />
                    so feel free to drop your thoughts and suggestions in the
                    comments.
                    <br />
                    Let's make this journey together! 🌈✨
                    <br />
                    <br />
                    Stay tuned for more updates! 📣
                    <br />
                  </MainPostContentsText>
                  <MainPostTagsBox>
                    <MainPostTag># Java</MainPostTag>
                    <MainPostTag># ETC</MainPostTag>
                  </MainPostTagsBox>
                </MainPostContentsBox>
              </MainPostMiddle>
            </MainPostContainer>
            <StyledHr />
            <ReplyContainer>
              <ReplyTitle>답변 5</ReplyTitle>
              <SuggestBox>💡testid01님, 답변을 작성해보세요.</SuggestBox>
              <ReplyList>
                <ReplyEach>
                  <ReplyUserProfileBox>
                    <ReplyUserProfileImg
                      style={{
                        backgroundImage: "url(/images/icon/profile_w.png)",
                      }}
                    />
                    <ReplyUserProfileTextBox>
                      <ReplyUserId>testid03</ReplyUserId>
                      <ReplyUserDate>2024.12.24.12.30 작성</ReplyUserDate>
                    </ReplyUserProfileTextBox>
                  </ReplyUserProfileBox>
                  <ReplyMiddle>
                    <ReplyMiddleText>
                      Hey everyone! 🎉
                      <br />
                      <br />
                      I'm thrilled to share some exciting news with you all.
                      Starting next week, we'lll be launching a brand new series
                      on our blog focusing on [your topic of interest]. 🚀
                      <br />
                      <br />
                      Get ready for insightful articles, expert interviews, and
                      valuable tips that will [mention the benefits]. 📚💡
                      <br />
                      <br />
                      Your feedback has always been our driving force, so feel
                      free to drop your thoughts and suggestions in the
                      comments. Let's make this journey together! 🌈✨
                      <br />
                      <br />
                      Stay tuned for more updates! 📣
                      <br />
                    </ReplyMiddleText>
                  </ReplyMiddle>
                </ReplyEach>
                <StyledHr />
              </ReplyList>
            </ReplyContainer>
          </LeftContainer>
          <RightContainer>
            <UserProfileBox>
              <UserProfileImg
                style={{ backgroundImage: "url(/images/icon/profile_w.png)" }}
              />
              <UserProfileTextBox>
                <UserId>testid01</UserId>
                <UserPostAmount>작성한 질문수 28</UserPostAmount>
              </UserProfileTextBox>
            </UserProfileBox>
            <RelatedPostsContainer>
              <RelatedPostsTitle>비슷한 질문</RelatedPostsTitle>
              <RelatedPostsList>
                <RelatedPostEach>
                  <RelatedPostContents>
                    <RelatedPostContentsTitle>
                      Title of the discussion will be placed ver here
                    </RelatedPostContentsTitle>
                    <RelatedPostContentsText>
                      That ipo will be a gamd-changer land it in region keep it
                      lean this proposal is a win-win situation which will cause
                      a stellar paradigm shift
                    </RelatedPostContentsText>
                  </RelatedPostContents>
                  <RelatedPostContentsBottom>
                    <PostBottomRepliesBox>
                      <PostBottomRepliesImg />
                      <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                    </PostBottomRepliesBox>
                    <MiddleDot />
                    <PostBottomViewsBox>
                      <PostBottomViewsImg />
                      <PostBottomViewsText>875 views</PostBottomViewsText>
                    </PostBottomViewsBox>
                  </RelatedPostContentsBottom>
                </RelatedPostEach>

                <RelatedPostEach>
                  <RelatedPostContents>
                    <RelatedPostContentsTitle>
                      Title of the discussion will be placed ver here
                    </RelatedPostContentsTitle>
                    <RelatedPostContentsText>
                      That ipo will be a gamd-changer land it in region keep it
                      lean this proposal is a win-win situation which will cause
                      a stellar paradigm shift
                    </RelatedPostContentsText>
                  </RelatedPostContents>
                  <RelatedPostContentsBottom>
                    <PostBottomRepliesBox>
                      <PostBottomRepliesImg />
                      <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                    </PostBottomRepliesBox>
                    <MiddleDot />
                    <PostBottomViewsBox>
                      <PostBottomViewsImg />
                      <PostBottomViewsText>875 views</PostBottomViewsText>
                    </PostBottomViewsBox>
                  </RelatedPostContentsBottom>
                </RelatedPostEach>

                <RelatedPostEach>
                  <RelatedPostContents>
                    <RelatedPostContentsTitle>
                      Title of the discussion will be placed ver here
                    </RelatedPostContentsTitle>
                    <RelatedPostContentsText>
                      That ipo will be a gamd-changer land it in region keep it
                      lean this proposal is a win-win situation which will cause
                      a stellar paradigm shift
                    </RelatedPostContentsText>
                  </RelatedPostContents>
                  <RelatedPostContentsBottom>
                    <PostBottomRepliesBox>
                      <PostBottomRepliesImg />
                      <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                    </PostBottomRepliesBox>
                    <MiddleDot />
                    <PostBottomViewsBox>
                      <PostBottomViewsImg />
                      <PostBottomViewsText>875 views</PostBottomViewsText>
                    </PostBottomViewsBox>
                  </RelatedPostContentsBottom>
                </RelatedPostEach>

                <RelatedPostEach>
                  <RelatedPostContents>
                    <RelatedPostContentsTitle>
                      Title of the discussion will be placed ver here
                    </RelatedPostContentsTitle>
                    <RelatedPostContentsText>
                      That ipo will be a gamd-changer land it in region keep it
                      lean this proposal is a win-win situation which will cause
                      a stellar paradigm shift
                    </RelatedPostContentsText>
                  </RelatedPostContents>
                  <RelatedPostContentsBottom>
                    <PostBottomRepliesBox>
                      <PostBottomRepliesImg />
                      <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                    </PostBottomRepliesBox>
                    <MiddleDot />
                    <PostBottomViewsBox>
                      <PostBottomViewsImg />
                      <PostBottomViewsText>875 views</PostBottomViewsText>
                    </PostBottomViewsBox>
                  </RelatedPostContentsBottom>
                </RelatedPostEach>

                <RelatedPostEach>
                  <RelatedPostContents>
                    <RelatedPostContentsTitle>
                      Title of the discussion will be placed ver here
                    </RelatedPostContentsTitle>
                    <RelatedPostContentsText>
                      That ipo will be a gamd-changer land it in region keep it
                      lean this proposal is a win-win situation which will cause
                      a stellar paradigm shift
                    </RelatedPostContentsText>
                  </RelatedPostContents>
                  <RelatedPostContentsBottom>
                    <PostBottomRepliesBox>
                      <PostBottomRepliesImg />
                      <PostBottomRepliesText>28 replies</PostBottomRepliesText>
                    </PostBottomRepliesBox>
                    <MiddleDot />
                    <PostBottomViewsBox>
                      <PostBottomViewsImg />
                      <PostBottomViewsText>875 views</PostBottomViewsText>
                    </PostBottomViewsBox>
                  </RelatedPostContentsBottom>
                </RelatedPostEach>
              </RelatedPostsList>
            </RelatedPostsContainer>
          </RightContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default Post_Read;
