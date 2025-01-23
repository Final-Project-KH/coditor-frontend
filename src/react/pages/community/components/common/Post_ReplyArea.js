import { useEffect, useState } from "react";
import {
  ReplyContainer,
  ReplyTitle,
  SuggestBox,
  ReplyList,
  ReplyEach,
  ReplyUserProfileBox,
  ReplyUserProfileImg,
  ReplyUserId,
  ReplyUserProfileTextBox,
  ReplyUserDate,
  ReplyMiddle,
  ReplyMiddleText,
  EditorBox,
} from "../../../../styles/community/Post";
import AxiosApi from "../../../../../api/AxiosApi";
import { useParams } from "react-router-dom";
import { Editor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Post_Reply_WriteEditor from "./Post_Reply_WriteEditor";

const Post_ReplyArea = ({ boardType }) => {
  const { boardId } = useParams();
  const [posts, setPosts] = useState([]);
  const [editorOpen, setEditorOpen] = useState(false);

  // Get Replies from Backend
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId, boardType);
        setPosts([response]);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId, boardType]);

  // Reply Editor Open
  const handleBoxClick = () => {
    if (!editorOpen) {
      setEditorOpen(true); // 클릭 시 에디터 열기
    }
  };

  // Reply Editor Close
  const handleCloseEditor = () => {
    setEditorOpen(false);
  };

  return (
    <>
      {posts.map((post, index) => (
        <ReplyContainer key={index}>
          <ReplyTitle>답변 {post.commentCnt}</ReplyTitle>
          <SuggestBox expanded={editorOpen} onClick={handleBoxClick}>
            <span>💡testid01님, 답변을 작성해보세요.</span>
            {editorOpen && (
              <EditorBox expanded={editorOpen}>
                <Post_Reply_WriteEditor handleCloseEditor={handleCloseEditor} />
              </EditorBox>
            )}
          </SuggestBox>
          <ReplyList>
            <ReplyEach>
              <ReplyUserProfileBox>
                <ReplyUserProfileImg
                  style={{
                    backgroundImage:
                      "url(https://cdn.inflearn.com/public/users/thumbnails/1185935/814690f1-6520-423f-be46-3e1a86b0a81c?w=168)",
                  }}
                />
                <ReplyUserProfileTextBox>
                  <ReplyUserId>댓글유저아이디</ReplyUserId>
                  <ReplyUserDate>2025.01.11.16:01 작성</ReplyUserDate>
                </ReplyUserProfileTextBox>
              </ReplyUserProfileBox>
              <ReplyMiddle>
                <ReplyMiddleText>댓글내용</ReplyMiddleText>
              </ReplyMiddle>
            </ReplyEach>
          </ReplyList>
        </ReplyContainer>
      ))}
    </>
  );
};

export default Post_ReplyArea;
