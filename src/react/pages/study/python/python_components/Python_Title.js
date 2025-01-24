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
} from "../../../../styles/study/Class_Title";

const Python_Title = () => {
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

export default Python_Title;
