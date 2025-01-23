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

const Post_Write_Team = () => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");
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
            <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </WriteTagBox>

          <Post_WriteEditor_Team title={title} team={team} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Team;
