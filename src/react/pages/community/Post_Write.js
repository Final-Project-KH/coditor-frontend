import {
  EditorArea,
  Wrap,
  WriteButtonsArea,
  WriteCancelButton,
  WriteContainer,
  WriteSubmitButton,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor from "./components/post/Post_WriteEditor";
import Post_WriteSort from "./components/post/Post_WriteSort";

const Post_Write = () => {
  return (
    <>
      <Wrap>
        <WriteContainer>
          <Post_WriteSort />
          <WriteTitleBox>
            <WriteTitle placeholder="제목을 입력하세요." />
          </WriteTitleBox>
          <WriteTagBox>
            <WriteTags placeholder="태그를 설정하세요. (최대 10개)" />
          </WriteTagBox>
          <EditorArea>
            <Post_WriteEditor />
          </EditorArea>
          <WriteButtonsArea>
            <WriteCancelButton>취소</WriteCancelButton>
            <WriteSubmitButton>등록</WriteSubmitButton>
          </WriteButtonsArea>
        </WriteContainer>
      </Wrap>
    </>
  );
};

export default Post_Write;
