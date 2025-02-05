import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_ModifyEditor_Course from "./components/course/Post_ModifyEditor_Course";
import Post_ModifySort from "./components/common/Post_ModifySort";
import React, { useEffect, useState } from "react";
import Post_WriteEditor_Course from "./components/course/Post_WriteEditor_Course";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const Post_Modify_Course = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [course, setCourse] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [boardType, setBoardType] = useState("");
  const [boardId, setBoardId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originTitle = location.state?.boardTitle || "";
    const originContent = location.state?.boardContent || "";
    const originBoardType = location.state?.id || "";
    const originBoardId = location.state?.boardId || "";
    const originSelectedCourses = location.state?.courses || [];
    const defaultSelectedCourses = courseOptions
      .filter((option) => originSelectedCourses.includes(option.value))
      .map((option) => option.value);
    setTitle(originTitle);
    setContent(originContent);
    setBoardType(originBoardType);
    setBoardId(originBoardId);
    setSelectedCourses(defaultSelectedCourses);

    if (originTitle === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

  const courseOptions = [
    { value: "COMPANY", label: "회사정보" },
    { value: "PORTFOLIO", label: "포트폴리오" },
    { value: "SALARY", label: "급여" },
    { value: "RESUME", label: "자기소개서" },
    { value: "BOOTCAMP", label: "부트캠프" },
    { value: "PROJECT", label: "프로젝트" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedCourses(selectedOptions.map((option) => option.value));
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
              options={courseOptions}
              isMulti
              value={courseOptions.filter((option) =>
                selectedCourses.includes(option.value)
              )}
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_ModifyEditor_Course
            boardId={boardId}
            content={content}
            title={title}
            course={selectedCourses}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Modify_Course;
