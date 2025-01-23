import {
  LeftSubjectContainer,
  SubjectImgContainerJavaScript,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
} from "../../../../styles/study/Class_Title";

const JavaScript_Title = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerJavaScript />
        <SubjectTitle>JavaScript Study</SubjectTitle>
        <SubjectContents>학습전</SubjectContents>
        <SubjectRateContainer>
          <SubjectRateBox>
            <SubjectRateWhite />
          </SubjectRateBox>
          <SubjectRateContents>0%</SubjectRateContents>
        </SubjectRateContainer>
      </LeftSubjectContainer>
    </>
  );
};

export default JavaScript_Title;
