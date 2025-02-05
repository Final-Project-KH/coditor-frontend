import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_WriteEditor_Team from "./components/team/Post_WriteEditor_Team";
import Post_WriteSort from "./components/common/Post_WriteSort";
import { useState } from "react";
import Select from "react-select";

const Post_Modify_Team = () => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");

  const [selectedTeam, setSelectedTeam] = useState([]);
  const teamOptions = [
    { value: "FRONT", label: "프론트엔드" },
    { value: "BACK", label: "백엔드" },
    { value: "DBA", label: "DBA" },
    { value: "DBS", label: "DBS" },
    { value: "DESIGNER", label: "디자이너" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedTeam(selectedOptions.map((option) => option.value));
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
              autoComplete="off"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
            {/* <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            /> */}
            <Select
              options={teamOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>

          <Post_WriteEditor_Team title={title} team={selectedTeam} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Modify_Team;
