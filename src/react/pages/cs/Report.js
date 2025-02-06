import { useEffect, useState } from "react";

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
} from "../../styles/cs/CS";

import CS_WriteEditor_Report from "./components/CS_WriteEditor_Report";
import Report_M from "./Report_M";

const Report = () => {
  const [title, setTitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기 화면 크기 체크
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize); // 화면 크기 변화에 따른 상태 업데이트
    handleResize(); // 컴포넌트 마운트 시 초기 상태 설정
    return () => {
      window.removeEventListener("resize", handleResize); // 클린업
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Report_M />
      ) : (
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
              <CS_WriteEditor_Report title={title} />
            </WriteContainer>
          </WriteWrap>
        </>
      )}
    </>
  );
};

export default Report;
