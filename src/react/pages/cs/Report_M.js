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

import CS_WriteEditor_Report_M from "./components/CS_WriteEditor_Report_M";

const Report_M = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <WriteSortOuterContiner>
            <WriteSortInnerContainer>
              <WriteSortTitleActive>악성 사용자 신고</WriteSortTitleActive>
            </WriteSortInnerContainer>
          </WriteSortOuterContiner>
          <WriteTitleBox>
            <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <CS_WriteEditor_Report_M title={title} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Report_M;
