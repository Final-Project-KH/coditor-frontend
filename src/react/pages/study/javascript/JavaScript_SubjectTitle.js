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
} from "../../../styles/study/Study";

const JavaScript_SubjectTitle = () => {
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

export default JavaScript_SubjectTitle;
