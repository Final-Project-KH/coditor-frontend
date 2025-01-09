import {
  LeftSubjectContainer,
  SubjectImgContainerJava,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
} from "../../../styles/study/Study";

const Java_SubjectTitle = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerJava />
        <SubjectTitle>Java Study</SubjectTitle>
        <SubjectContents>기본 자료형과 연산자 / 학습중</SubjectContents>
        <SubjectRateContainer>
          <SubjectRateBox>
            <SubjectRateWhite />
            <SubjectRateBlack />
          </SubjectRateBox>
          <SubjectRateContents>52%</SubjectRateContents>
        </SubjectRateContainer>
      </LeftSubjectContainer>
    </>
  );
};

export default Java_SubjectTitle;
