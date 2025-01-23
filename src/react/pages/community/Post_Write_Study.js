import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor_Study from "./components/study/Post_WriteEditor_Study";
import Post_WriteSort from "./components/common/Post_WriteSort";
import { useState } from "react";

const Post_Write_Study = () => {
  const [title, setTitle] = useState("");
  const [study, setStudy] = useState("");
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
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            />
          </WriteTagBox>
          <Post_WriteEditor_Study title={title} study={study} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Study;
