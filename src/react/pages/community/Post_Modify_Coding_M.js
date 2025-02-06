import React, { useEffect, useState } from "react";
import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post_M";
import Post_ModifySort_M from "./components/common/Post_ModifySort_M";
import Post_ModifyEditor_Coding_M from "./components/coding/Post_ModifyEditor_Coding_M";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const Post_Modify_Coding_M = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [boardType, setBoardType] = useState("");
  const [boardId, setBoardId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originTitle = location.state?.boardTitle || "";
    const originContent = location.state?.boardContent || "";
    const originBoardType = location.state?.id || "";
    const originBoardId = location.state?.boardId || "";
    const originSelectedLanguages = location.state?.languages || [];
    const defaultSelectedLanguages = languageOptions
      .filter((option) => originSelectedLanguages.includes(option.value))
      .map((option) => option.value);
    setTitle(originTitle);
    setContent(originContent);
    setBoardType(originBoardType);
    setBoardId(originBoardId);
    setSelectedLanguages(defaultSelectedLanguages);

    if (originTitle === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

  const MAX_SELECTION = 10;
  const languageOptions = [
    { value: "JAVA", label: "Java" },
    { value: "JS", label: "JavaScript" },
    { value: "PYTHON", label: "Python" },
    { value: "C", label: "C" },
    { value: "CPP", label: "C++" },
    { value: "CS", label: "C#" },
    { value: "SPB", label: "Spring Boot" },
    { value: "RE", label: "React" },
    { value: "AN", label: "AngularJS" },
    { value: "EX", label: "ExpressJS" },
    { value: "NO", label: "NodeJS" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    if (selectedOptions.length > MAX_SELECTION) {
      alert(`최대 ${MAX_SELECTION}개까지 선택할 수 있습니다.`);
      selectedOptions.pop();
    }
    setSelectedLanguages(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": { borderColor: "#333333" },
      maxWidth: "1280px",
      // border: "1px solid #f1f1f1",
      border: "none",
      padding: "5px",
      fontSize: "16px",
      fontFamily: "medium, sans-serif",
      // marginLeft: "10px",
      marginRight: "10px",
    }),
    menu: (provided) => ({
      // 토글 메뉴 바 UI
      ...provided,
      marginTop: "-1px",
      backgroundColor: "white",
      boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.1)",
      zIndex: "50",
      maxWidth: "1280px",
      padding: "5px 25px",
      fontSize: "12px",
      fontFamily: "medium, sans-serif",
    }),
    option: (provided, { isSelected, isFocused }) => ({
      ...provided,
      backgroundColor: isSelected ? "black" : isFocused ? "#f1f1f1" : "white",
      color: isSelected ? "white" : "black",
      cursor: "pointer",
      zIndex: "50",
      "&:active": {
        backgroundColor: "transparent", // 클릭 순간 색상 (파란 계열 예시)
        fontFamily: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "5px",
      },
    }),
    // 태그 박스
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#333333",
      alignItems: "center",
      borderRadius: "5px",
    }),
    // 태그 텍스트
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
      marginBottom: "1px",
      fontSize: "12px",
      fontFamily: "medium",
    }),
    // 삭제버튼
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      width: "15px",
      height: "15px",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "2px",
      marginRight: "5px",
      padding: "0",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    }),
  };

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <Post_ModifySort_M />
          <WriteTitleBox>
            <WriteTitle
              disabled
              autoComplete="off"
              placeholder="제목을 입력하세요."
              value={title}
            />
          </WriteTitleBox>
          <WriteTagBox>
            <Select
              options={languageOptions}
              isMulti
              value={languageOptions.filter((option) =>
                selectedLanguages.includes(option.value)
              )}
              onChange={handleChange}
              placeholder="태그를 설정하세요. (최대 10개)"
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_ModifyEditor_Coding_M
            boardId={boardId}
            content={content}
            title={title}
            language={selectedLanguages}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Modify_Coding_M;
