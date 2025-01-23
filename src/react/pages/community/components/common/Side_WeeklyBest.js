import {
  WeeklyBestContainer,
  WeeklyBestContents,
  WeeklyBestEach,
  WeeklyBestList,
  WeeklyBestTitle,
  WeeklyBestUserBox,
  WeeklyBestUserId,
  WeeklyBestUserImg,
} from "../../../../styles/community/WeeklyBest";

const WeeklyBest = () => {
  return (
    <>
      <WeeklyBestContainer>
        <WeeklyBestTitle>주간 인기글</WeeklyBestTitle>
        <WeeklyBestList>
          <WeeklyBestEach>
            <WeeklyBestContents>
              코딩 질문 관련 주간 인기 글 입니다 아 근데 첫번째
            </WeeklyBestContents>
            <WeeklyBestUserBox>
              <WeeklyBestUserImg
                style={{
                  backgroundColor: "#313131",
                  backgroundImage: "url(/images/icon/profile_w.png)",
                }}
              />
              <WeeklyBestUserId>testid01</WeeklyBestUserId>
            </WeeklyBestUserBox>
          </WeeklyBestEach>

          <WeeklyBestEach>
            <WeeklyBestContents>
              💦 이런 이모지도 같이 보이면 좀 더 풍성하것지
            </WeeklyBestContents>
            <WeeklyBestUserBox>
              <WeeklyBestUserImg
                style={{
                  backgroundColor: "#313131",
                  backgroundImage: "url(/images/icon/profile_w.png)",
                }}
              />
              <WeeklyBestUserId>testid01</WeeklyBestUserId>
            </WeeklyBestUserBox>
          </WeeklyBestEach>

          <WeeklyBestEach>
            <WeeklyBestContents>
              인기가 있을지 뭔지 근데 두줄 보여줘야함
            </WeeklyBestContents>
            <WeeklyBestUserBox>
              <WeeklyBestUserImg
                style={{
                  backgroundColor: "#313131",
                  backgroundImage: "url(/images/icon/profile_w.png)",
                }}
              />
              <WeeklyBestUserId>testid01</WeeklyBestUserId>
            </WeeklyBestUserBox>
          </WeeklyBestEach>

          <WeeklyBestEach>
            <WeeklyBestContents>
              같은사람이 계속 인기있으면 이상하니까 사람 바까봄
            </WeeklyBestContents>
            <WeeklyBestUserBox>
              <WeeklyBestUserImg
                style={{
                  backgroundColor: "#874646",
                  backgroundImage: "url(/images/icon/profile_w.png)",
                }}
              />
              <WeeklyBestUserId>testid134</WeeklyBestUserId>
            </WeeklyBestUserBox>
          </WeeklyBestEach>

          <WeeklyBestEach>
            <WeeklyBestContents>
              프로젝트 기간이 짧아졌네요? 강사님?
            </WeeklyBestContents>
            <WeeklyBestUserBox>
              <WeeklyBestUserImg
                style={{
                  backgroundColor: "#0F4E69",
                  backgroundImage: "url(/images/icon/profile_w.png)",
                }}
              />
              <WeeklyBestUserId>codemaster</WeeklyBestUserId>
            </WeeklyBestUserBox>
          </WeeklyBestEach>
        </WeeklyBestList>
      </WeeklyBestContainer>
    </>
  );
};

export default WeeklyBest;
