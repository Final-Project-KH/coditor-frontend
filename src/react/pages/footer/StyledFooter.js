import {
  Wrap,
  Container,
  FooterName,
  FooterContents,
  MainBox,
} from "../../styles/footer/StyledFooter";

const StyledFooter = () => {
  return (
    <>
      <Wrap>
        <Container>
          <MainBox>
            <FooterName>© 2025 coditor. All rights reserved.</FooterName>
            <FooterContents>
              📍 회사 정보
              <br />
              상호명: 코디터 | 대표자: 홍길동 | 사업자등록번호: 123-45-67890{" "}
              <br />
              주소: 서울특별시 강남구 테헤란로 123, 코디터 빌딩 5층 <br />
              이메일: support@coditer.com | 고객센터: 02-1234-5678 (운영시간:
              평일 10:00~18:00)
              <br />
              <br />
              🔗 이용약관 | 개인정보처리방침
              <br />
              <br />
              🚀 **코디터는 최고의 코딩 학습 경험을 제공합니다.**
            </FooterContents>
          </MainBox>
        </Container>
      </Wrap>
    </>
  );
};

export default StyledFooter;
