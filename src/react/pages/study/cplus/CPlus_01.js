import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitlePathLink,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
  NavigatePath,
  PathLink,
} from "../../../styles/study/Class_Main";
import { CPlusStudyChapter } from "../../../../util/study/CPlusStudyChapter";
import CPlus_Title from "./CPlus_Title";

const CPlus_01 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {firstpath, secondpath, thirdpath} = location.state || {};
  
    const handleStudy = () => {
      navigate("/study", {
        state: {
          firstpath: firstpath,
        },
      });
    };
    const handleStudyCPlus = () => {
      navigate("/study/cplus", {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
        },
      });
    };
    const handleRefresh = () => {
      navigate("/study/cplus/01", {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
          thirdpath: thirdpath,
        },
      });
      window.location.reload();
    };
  
    const handleNext = (cls) => {
      navigate(`/study/cplus/${cls.id}`, {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
          thirdpath: cls.title,
        },
      });
    };
  
    // 챕터리스트 토글링 및 간소화
    const handleNavigation = (navigatepath, data) => {
      navigate(navigatepath, {state: data});
    };
  
    const [isToggleOpenId, setIsToggleOpenId] = useState([]);
  
    const toggleVisibility = (id) => {
      setIsToggleOpenId((prevId) =>
        prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
      );
    };
  
    const updatedCPlusStudyChapter = CPlusStudyChapter.map((menu) => ({
      ...menu,
      contents: menu.contents.map((content) => ({
        ...content,
        label: content.label,
        navigatepath: content.navigatepath,
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: content.thirdpath,
      })),
    }));
  
    // 우측 스터디 영역 컴포넌트로 분리
    const EachClassComponent = ({cls, isOpen, onToggle}) => (
      <EachClass key={cls.id}>
        <ClassHeader isOpen={isOpen}>
          <ClassHeaderTitle onClick={() => handleNext(cls)}>
            {cls.title}
          </ClassHeaderTitle>
          <ClassHeaderTitleButton
            isOpen={isOpen}
            onClick={() => onToggle(cls.id)}
          />
        </ClassHeader>
        <ClassContents isOpen={isOpen}>
          {cls.contents.map((content, index) => (
            <ClassSet key={index}>
              <ClassName
                onClick={() =>
                  handleNavigation(content.navigatepath, {
                    firstpath: firstpath,
                    secondpath: secondpath,
                    thirdpath: content.thirdpath,
                    fourthpath: content.label,
                  })
                }
              >
                {content.label}
              </ClassName>
            </ClassSet>
          ))}
        </ClassContents>
      </EachClass>
    );
  
    const filteredCPlusStudyChapter = CPlusStudyChapter.filter(
      (chapter) => chapter.id === "01"
    );

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyCPlus()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{thirdpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <CPlus_Title />
        </LeftContainer>
        <RightContainer>
        {filteredCPlusStudyChapter.map((cls) => (
            <EachClassComponent
              key={cls.id}
              cls={cls}
              isOpen={isToggleOpenId.includes(cls.id)}
              onToggle={toggleVisibility}
            />
          ))}
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_01;
