import {useState, useEffect} from "react";

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
import {useLocation, useNavigate} from "react-router-dom";

const Report_M = () => {
  const [boardId, setBoardId] = useState("");
  const [writerName, setWriterName] = useState("");
  const [boardTitle, setBoardTitle] = useState("");
  const [boardUrl, setBoardUrl] = useState("");
  const [title, setTitle] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originBoardId = location.state?.boardId || "";
    const originWriterName = location.state?.writerName || "";
    const originBoardTitle = location.state?.boardTitle || "";
    const originBoardUrl = location.state?.boardUrl || "";
    setBoardId(originBoardId);
    setWriterName(originWriterName);
    setBoardTitle(originBoardTitle);
    setBoardUrl(originBoardUrl);

    console.log(originBoardId);
    console.log(originWriterName);
    console.log(originBoardTitle);
    console.log(originBoardUrl);

    if (originBoardId === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

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
          <CS_WriteEditor_Report_M
            boardId={boardId}
            writerName={writerName}
            boardTitle={boardTitle}
            boardUrl={boardUrl}
            title={title}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Report_M;
