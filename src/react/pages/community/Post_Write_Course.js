import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor from "./components/course/Post_WriteEditor_Course";
import Post_WriteSort from "./components/common/Post_WriteSort";
import {useState} from "react";
import Post_WriteEditor_Course from "./components/course/Post_WriteEditor_Course";
import Select from "react-select";

const Post_Write_Course = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const courseOptions = [
    {value: "COMPANY", label: "회사정보"},
    {value: "PORTFOLIO", label: "포트폴리오"},
    {value: "SALARY", label: "급여"},
    {value: "RESUME", label: "자기소개서"},
    {value: "BOOTCAMP", label: "부트캠프"},
    {value: "PROJECT", label: "프로젝트"},
    {value: "ETC", label: "기타"},
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
      "&:hover": {borderColor: "blue"},
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
    option: (provided, {isSelected, isFocused}) => ({
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
      "&:hover": {backgroundColor: "red", color: "white"},
    }),
  };

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <Post_WriteSort />
          <WriteTitleBox>
            <WriteTitle
              autoComplete="off"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
            {/* <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            /> */}
            <Select
              options={courseOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_WriteEditor_Course title={title} course={selectedCourses} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Course;
