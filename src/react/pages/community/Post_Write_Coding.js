import { useState } from "react";
import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteSort from "./components/common/Post_WriteSort";
import Post_WriteEditor_Coding from "./components/coding/Post_WriteEditor_Coding";

const Post_Write_Coding = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

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
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </WriteTagBox>
          <Post_WriteEditor_Coding title={title} language={language} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Coding;
