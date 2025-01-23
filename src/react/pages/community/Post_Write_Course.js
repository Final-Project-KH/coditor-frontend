import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor from "./components/course/Post_WriteEditor_Course";
import Post_WriteSort from "./components/common/Post_WriteSort";
import { useState } from "react";
import Post_WriteEditor_Course from "./components/course/Post_WriteEditor_Course";

const Post_Write_Course = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <Post_WriteSort />
          <WriteTitleBox>
          <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
          <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </WriteTagBox>
          <Post_WriteEditor_Course title={title} course={course} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Course;
