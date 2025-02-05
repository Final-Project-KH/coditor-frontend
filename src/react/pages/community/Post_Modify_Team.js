import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_ModifyEditor_Team from "./components/team/Post_ModifyEditor_Team";
import Post_ModifySort from "./components/common/Post_ModifySort";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const Post_Modify_Team = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [boardType, setBoardType] = useState("");
  const [boardId, setBoardId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originTitle = location.state?.boardTitle || "";
    const originContent = location.state?.boardContent || "";
    const originBoardType = location.state?.id || "";
    const originBoardId = location.state?.boardId || "";
    const originSelectedTeam = location.state?.teams || [];
    const defaultSelectedTeam = teamOptions
      .filter((option) => originSelectedTeam.includes(option.value))
      .map((option) => option.value);
    setTitle(originTitle);
    setContent(originContent);
    setBoardType(originBoardType);
    setBoardId(originBoardId);
    setSelectedTeam(defaultSelectedTeam);

    if (originTitle === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

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
            {/* <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            /> */}
            <Select
              options={teamOptions}
              isMulti
              value={teamOptions.filter((option) =>
                selectedTeam.includes(option.value)
              )}
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>

          <Post_ModifyEditor_Team
            boardId={boardId}
            content={content}
            title={title}
            team={selectedTeam}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Modify_Team;
