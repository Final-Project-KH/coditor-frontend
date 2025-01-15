import {
  ReplyContainer,
  ReplyTitle,
  SuggestBox,
  ReplyList,
} from "../../../../styles/community/Post";
import Post_EachReply from "./Post_EachReply";

const Post_ReplyArea = () => {
  return (
    <>
      <ReplyContainer>
        <ReplyTitle>답변 5</ReplyTitle>
        <SuggestBox>💡testid01님, 답변을 작성해보세요.</SuggestBox>
        <ReplyList>
          <Post_EachReply />
        </ReplyList>
      </ReplyContainer>
    </>
  );
};

export default Post_ReplyArea;
