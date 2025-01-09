import {
  LeftSubjectContainer,
  SubjectImgContainerPython,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
} from "../../../styles/study/Study";

const Python_SubjectTitle = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerPython />
        <SubjectTitle>Python Study</SubjectTitle>
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

export default Python_SubjectTitle;
