import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_ModifyEditor_Study from "./components/study/Post_ModifyEditor_Study";
import Post_ModifySort from "./components/common/Post_ModifySort";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const Post_Modify_Study = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedStudies, setSelectedStudies] = useState([]);
  const [boardType, setBoardType] = useState("");
  const [boardId, setBoardId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originTitle = location.state?.boardTitle || "";
    const originContent = location.state?.boardContent || "";
    const originBoardType = location.state?.id || "";
    const originBoardId = location.state?.boardId || "";
    const originSelectedStudies = location.state?.studies || [];
    const defaultSelectedStudies = studyOptions
      .filter((option) => originSelectedStudies.includes(option.value))
      .map((option) => option.value);
    setTitle(originTitle);
    setContent(originContent);
    setBoardType(originBoardType);
    setBoardId(originBoardId);
    setSelectedStudies(defaultSelectedStudies);

    if (originTitle === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

  const studyOptions = [
    { value: "ALGORITHM", label: "알고리즘" },
    { value: "STRUCTURE", label: "자료구조" },
    { value: "CODING", label: "코딩테스트" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedStudies(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      borderColor: state.isFocused ? "blue" : "#ccc",
      boxShadow: state.isFocused ? "0 0 5px rgba(0, 0, 255, 0.5)" : "none",
      "&:hover": { borderColor: "blue" },
      maxWidth: "1280px",
      border: "1px solid #f1f1f1",
      padding: "5px",
      fontSize: "20px",
      fontFamily: "medium, sans-serif",
      marginLeft: "10px",
      marginRight: "10px",
    }),
    menu: (provided) => ({
      // 토글 메뉴 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      zIndex: "50",
      maxWidth: "1280px",
      padding: "5px 25px",
      fontSize: "15px",
      fontFamily: "medium, sans-serif",
    }),
    option: (provided, { isSelected, isFocused }) => ({
      ...provided,
      backgroundColor: isSelected ? "blue" : isFocused ? "#f0f0f0" : "white",
      color: isSelected ? "white" : "black",
      cursor: "pointer",
      zIndex: "50",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#d1e7fd",
      alignItems: "center",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "red",
      width: "25px",
      height: "25px",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": { backgroundColor: "red", color: "white" },
    }),
  };

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <Post_ModifySort />
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
              options={studyOptions}
              isMulti
              value={studyOptions.filter((option) =>
                selectedStudies.includes(option.value)
              )}
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_ModifyEditor_Study
            boardId={boardId}
            content={content}
            title={title}
            study={selectedStudies}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Modify_Study;
