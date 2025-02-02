import { useState } from "react";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/cs/CS";

import CS_WriteSort_Report from "./components/CS_WriteSort_Report";
import CS_WriteEditor_Report from "./components/CS_WriteEditor_Report";

const Report = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <CS_WriteSort_Report />
          <WriteTitleBox>
            <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <CS_WriteEditor_Report title={title} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Report;
