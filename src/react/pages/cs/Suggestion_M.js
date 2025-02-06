import { useState } from "react";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
  WriteSortOuterContiner,
  WriteSortInnerContainer,
  WriteSortTitleActive,
} from "../../styles/cs/CS_M";

import CS_WriteEditor_Suggestion_M from "./components/CS_WriteEditor_Suggestion_M";

const Suggestion_M = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <WriteSortOuterContiner>
            <WriteSortInnerContainer>
              <WriteSortTitleActive>건의사항</WriteSortTitleActive>
            </WriteSortInnerContainer>
          </WriteSortOuterContiner>
          <WriteTitleBox>
            <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <CS_WriteEditor_Suggestion_M title={title} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Suggestion_M;
