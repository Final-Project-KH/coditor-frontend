import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  TopBox,
  Container,
  AboutTitle,
  AboutContents,
} from "../../styles/about/About";

import About_M from "./About_M";
import ScrollToTopButton from "../ScrollToTopButton";

const About = () => {
  const { isMobile } = useOutletContext();
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/about");
  };

  return (
    <>
      {isMobile ? (
        <About_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>about</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>🔥 코디터 소개</TopBoxText>
              </TopBoxLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <AboutTitle>About Coditor</AboutTitle>
            <AboutContents>
              개발을 처음 접하면 방대한 정보 속에서 혼란스럽기 쉽습니다.
              <br />
              각종 학습 자료, 코딩 테스트, 코드 리뷰, 멘토링, 스터디 모집 등
              개별 서비스는 많지만
              <br />
              이 모든 것을 종합적으로 정리해 한곳에서 제공하는 플랫폼은
              드뭅니다.
              <br />
              <br />
              누구나 개발자가 될 수 있도록 coditor가 여러분을 도와드리겠습니다.
            </AboutContents>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default About;
