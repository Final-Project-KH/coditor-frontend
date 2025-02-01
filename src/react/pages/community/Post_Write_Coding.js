import React, { useState } from "react";
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
import Select from "react-select";

const Post_Write_Coding = () => {
  const [title, setTitle] = useState("");

  const MAX_SELECTION = 10;

  const [selectedLanguages, setSelectedLanguages] = useState([]);
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
          <Post_WriteSort />
          <WriteTitleBox>
            <WriteTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
            {/* <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            /> */}
            <Select
              options={languageOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요. (최대 10개)"
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_WriteEditor_Coding title={title} language={selectedLanguages} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Coding;
