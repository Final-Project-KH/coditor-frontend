import { useState } from "react";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/cs/CS";

import CS_WriteSort_Question from "./components/CS_WriteSort_Question";
import CS_WriteEditor_Question from "./components/CS_WriteEditor_Question";

const Question = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <CS_WriteSort_Question />
          <WriteTitleBox>
            <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <CS_WriteEditor_Question title={title} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Question;
