import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor from "./components/post/Post_WriteEditor_Course";
import Post_WriteSort from "./components/post/Post_WriteSort";

const Post_Write_Course = () => {
  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <Post_WriteSort />
          <WriteTitleBox>
            <WriteTitle placeholder="제목을 입력하세요." />
          </WriteTitleBox>
          <WriteTagBox>
            <WriteTags placeholder="태그를 설정하세요. (최대 10개)" />
          </WriteTagBox>

          <Post_WriteEditor />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Course;
