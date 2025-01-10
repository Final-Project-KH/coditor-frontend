import {
  TopWritersContainer,
  TopWritersTitle,
  TopWritersList,
  TopWritersEach,
  TopWritersImg,
  TopWritersId,
  TopWritersPoint,
} from "../../../styles/community/TopWriters";

const TopWriters = () => {
  return (
    <>
      <TopWritersContainer>
        <TopWritersTitle>Top Writers</TopWritersTitle>
        <TopWritersList>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#313131",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid01</TopWritersId>
            <TopWritersPoint>100</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#FE9226",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid02</TopWritersId>
            <TopWritersPoint>90</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#0623B7",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid03</TopWritersId>
            <TopWritersPoint>80</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#2C79C1",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid04</TopWritersId>
            <TopWritersPoint>70</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#7D2929",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid05</TopWritersId>
            <TopWritersPoint>60</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#a1a1a1",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid06</TopWritersId>
            <TopWritersPoint>50</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#38926B",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid07</TopWritersId>
            <TopWritersPoint>40</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#C14A88",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid08</TopWritersId>
            <TopWritersPoint>30</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#F6DE51",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid09</TopWritersId>
            <TopWritersPoint>20</TopWritersPoint>
          </TopWritersEach>
          <TopWritersEach>
            <TopWritersImg
              style={{
                backgroundColor: "#FD6467",
                backgroundImage: "url(/images/icon/profile_w.png)",
              }}
            />
            <TopWritersId>testid10</TopWritersId>
            <TopWritersPoint>10</TopWritersPoint>
          </TopWritersEach>
        </TopWritersList>
      </TopWritersContainer>
    </>
  );
};

export default TopWriters;
