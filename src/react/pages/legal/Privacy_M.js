import { useRef } from "react";

import {
  TermsTitle,
  Chapter,
  ChapterTitle,
  Article,
  ArticleTitle,
  Item,
  TopBox,
  BodyContainerOuter,
  BodyContainer,
  Wrap,
  ItemTab,
  LogoContainer,
  Logo,
  StyledLink,
  TopBoxWide,
} from "../../styles/legal/Legal_M";

import NavBar_M from "../navBar/NavBar_M";
import { ScrollToTopButton_Full } from "../ScrollToTopButton";

const Privacy_M = () => {
  const mainContentRef = useRef(null);
  return (
    <>
      <Wrap>
        <NavBar_M />
        <TopBoxWide>
          <TopBox></TopBox>
        </TopBoxWide>
        <BodyContainerOuter ref={mainContentRef}>
          <BodyContainer>
            <TermsTitle>개인정보 처리방침</TermsTitle>
            <Chapter>
              <Item>
                코디터는 이용자의 개인정보 보호를 매우 중요시하며, 「개인정보
                보호법」 등 관련 법령상의 개인정보 보호규정을 준수하고 있습니다.
                회사는 「개인정보 보호법」 제30조에 따라 이용자의 개인정보를
                보호하고 이와 관련된 고충을 신속하고 원활하게 처리할 수 있도록
                하기 위하여 아래와 같이 개인정보 처리방침을 명시하며, 이용자의
                권익 보호에 최선을 다할 것입니다. 본 개인정보 처리방침은 회사의
                개인 이용약관 및 기업 이용약관 제2조에 정의된 “서비스”에
                적용되며 아래의 내용을 포함합니다.
              </Item>
            </Chapter>
            <Chapter>
              <Article>
                <ArticleTitle>제1조 [개인정보의 처리 목적]</ArticleTitle>
                <Item>
                  회사는 필요한 한도 내에서 최소한의 개인정보를 수집하며, 수집한
                  개인정보는 다음의 목적을 위해 활용합니다.
                  <br />
                  <br />
                  <ItemTab>
                    1. 홈페이지 회원 가입 및 관리
                    <br />
                    <ItemTab>
                      회원제 서비스 이용에 따른 본인 확인 및 회원 가입 의사
                      확인, 회원 자격 유지, 회원 자격 관리, 서비스 부정 이용 및
                      비인가 사용 방지, 상담 및 문의 처리, 각종 고지/통지 등을
                      목적으로 개인정보를 처리합니다.
                      <br />
                    </ItemTab>
                    2. 재화 등 서비스 제공
                    <br />
                    <ItemTab>
                      본인 인증, 채용정보 매칭 및 코딩 테스트 등 컨텐츠 제공을
                      위한 개인 식별, 서비스 제공, 서비스 이용 중에 발생하는
                      정보의 전달(채용 합∙불합 결과, 테스트 결과 등), 회원 간의
                      상호 연락, 서비스 구매 및 요금 결제, 계약서 발송, 청구서
                      발송, 콘텐츠 제공, 물품 및 증빙 발송 등을 목적으로
                      개인정보를 처리합니다.
                      <br />
                    </ItemTab>
                    3. 서비스 개발 및 마케팅ㆍ광고 활용
                    <br />
                    <ItemTab>
                      맞춤 서비스 제공, 서비스 안내 및 이용권유, 서비스 개선 및
                      신규 서비스 개발을 위한 통계 및 접속빈도 파악, 유료 서비스
                      구매 및 이용 시 요금 정산, 통계학적 특성에 따른 광고 게재,
                      이벤트 정보 및 참여기회 제공
                      <br />
                    </ItemTab>
                    4. 고용 및 취업동향 파악을 위한 통계학적 분석, 서비스
                    고도화를 위한 데이터 분석
                    <br />
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>
                  제2조 [개인정보의 처리 및 보유 기간]
                </ArticleTitle>
                <Item>
                  회사는 법령에 따라 개인정보 보유, 이용 기간 또는
                  정보주체로부터 개인정보의 수집 시에 동의 받은 개인정보를 이용
                  기간 내에서 처리, 보유합니다. 각각의 개인정보 처리 및 보유
                  기간은 다음과 같습니다.
                  <br />
                  <br />
                  <ItemTab>
                    1. 회사 내부 방침에 따라 보유하는 개인정보의 보유 기간
                    <br />
                    <ItemTab>
                      가. 온라인/모바일 서비스 제공을 위해 수집한 회원가입 정보
                      : 회원탈퇴 시까지
                      <br />
                      나. 개별적으로 이용자의 동의를 받은 경우 : 동의를 받은
                      기간
                      <br />
                      다. 회사와 이용자 간에 민원, 소송 등 분쟁이 발생한 경우에
                      그 보유기간 내에 분쟁이 해결되지 않을 경우 : 그 분쟁이
                      해결될 때까지
                      <br />
                    </ItemTab>
                    2. 관련 법령에 의한 개인정보 보유 기간
                    <br />
                    <ItemTab>
                      가. 이용자의 인터넷 등 로그 기록, 접속지 정보, 웹사이트
                      방문기록 : 3개월(통신비밀보호법)
                      <br />
                      나. 표시・광고에 관한 기록 : 6개월(전자상거래 등에서의
                      소비자보호에 관한 법률)
                      <br />
                      다. 계약 또는 청약철회 등에 관한 기록 : 5년(전자상거래
                      등에서의 소비자보호에 관한 법률)
                      <br />
                      라. 대금결제 및 재화 등의 공급에 관한 기록 :
                      5년(전자상거래 등에서의 소비자보호에 관한 법률)
                      <br />
                      마. 소비자의 불만 또는 분쟁처리에 관한 기록 :
                      3년(전자상거래 등에서의 소비자보호에 관한 법률)
                      <br />
                      바. 세금계산서, 영수증 등 거래내역 관련 정보 :
                      5년(부가가치세법)
                      <br />
                    </ItemTab>
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제3조 [개인정보 제3자에 대한 제공]</ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 회사는 정보주체의 개인정보를 본 개인정보 처리방침
                    제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                    법률의 특별한 규정 등 「개인정보 보호법」 제17조(개인정보의
                    제공)에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                    <br />
                    2. 「개인정보 보호법」 제18조에 의거하거나, 수사 목적으로
                    법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는
                    경우에도 개인정보가 제공될 수 있습니다.
                    <br />
                    3. 개인정보의 제3자 제공에 대해, 이용자는 동의하지 않을 수
                    있고 언제든지 제3자 제공 동의를 철회할 수 있습니다. 다만,
                    회원가입을 제외한 제3자 제공에 기반한 관련된 일부 서비스의
                    이용이 제한될 수 있음을 알려드립니다.
                    <br />
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제4조 [개인정보의 처리 위탁]</ArticleTitle>
                <Item>
                  회사는 원활한 서비스 제공을 위해 개인정보를 타인에게 위탁할 수
                  있습니다. 필요한 경우 수탁업체가 변경될 수 있으며, 이 경우 본
                  개인정보 처리방침에 변경 사항을 반영하여 고지합니다.
                </Item>
              </Article>

              <Article>
                <ArticleTitle>
                  제5조 [정보주체의 권리, 의무 및 행사방법]
                </ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 정보주체는 회사의 코디터 홈페이지에서 언제든지 개인정보
                    처리와 관련하여 이하의 권리를 행사할 수 있습니다.
                    <br />
                    <ItemTab>
                      가. 개인정보 열람, 정정, 삭제 요구의 권리
                      <br />
                      <ItemTab>
                        정보주체는 언제든지 등록되어 있는 자신 혹은 해당
                        미성년자 이용자의 개인정보를 열람하거나 정정할 수 있고
                        삭제를 요구할 수 있습니다. 정보주체가 개인정보 열람,
                        정정 및 삭제를 하고자 할 경우에는 직접 열람, 정정 및
                        삭제하거나 또는 회사의 개인정보 보호 책임자 및
                        담당자에게 서면 또는 전자우편으로 연락하는 경우 지체없이
                        조치하도록 하겠습니다. 다만, 정보주체는 다른 법령에서 그
                        개인정보가 수집대상으로 명시되어 있는 경우에는 삭제를
                        요구할 수 없으며, 개인정보를 정정・삭제하는 경우 일부
                        또는 전부의 서비스 이용이 불가능할 수 있습니다.
                        <br />
                      </ItemTab>
                      나. 개인정보 처리정지 요구의 권리
                      <br />
                      <ItemTab>
                        정보주체는 언제든지 등록되어 있는 자신 혹은 미성년자
                        이용자의 개인정보의 처리정지를 요구할 수 있습니다.
                        개인정보 처리의 정지를 원하는 경우 회사의 개인정보 보호
                        책임자 및 담당자에게 서면 또는 전자우편으로 연락하는
                        경우 지체 없이 조치하도록 하겠습니다. 다만, 회사는 관련
                        법령에 따라 이용자의 처리정지 요구에도 불구하고 계속하여
                        개인정보를 처리할 수 있으며, 이러한 경우에는 지체 없이
                        그 내용을 정보주체에게 알리도록 하겠습니다.
                        <br />
                      </ItemTab>
                      다. 개인정보 수집, 이용, 제공에 대한 동의 철회의 권리
                      <br />
                      <ItemTab>
                        정보주체는 언제든지 등록되어 있는 자신 혹은 해당
                        미성년자 이용자의 개인정보의 수집, 이용, 제공에 대한
                        동의를 철회할 수 있습니다. 이를 위하여 정보주체는
                        [회원탈퇴] 절차를 진행할 수 있고, 또는 회사의 개인정보
                        보호 책임자 및 담당자에게 서면 또는 전자우편으로
                        연락하여 철회를 신청할 수 있습니다. 이러한 경우 회사는
                        본인 확인 절차를 거친 후 개인정보의 삭제 등 필요한
                        조치를 하겠습니다.
                        <br />
                      </ItemTab>
                    </ItemTab>
                    2. 본조 제1항에 따른 권리 행사는 정보주체의 법정대리인이나
                    위임을 받은 자 등 대리인을 통하여서 할 수 있습니다. 이 경우
                    「개인정보 보호법」에서 정한 서식에 따른 위임장을 제출해야
                    합니다.
                    <br />
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제6조 [처리하는 개인정보 항목]</ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 회사는 코디터 회원 및 서비스 분류에 따라 다음의 개인정보
                    항목을 수집, 이용, 보유, 파기하고 있습니다. 회원은 본 조의
                    선택 항목 제공 동의를 거부할 권리가 있으며, 미동의 시 서비스
                    가입/이용에 제약이 있을 수 있습니다.
                    <br />
                    <ItemTab>
                      가. 코디터 회원
                      <br />
                      <ItemTab>
                        ①. 회원가입(코디터 자체 계정)
                        <br />
                        <ItemTab>
                          - 필수 항목: 성명, 이메일(아이디), 비밀번호
                          <br />
                          - 선택 항목: 생년월일, 소속 기업, 전화번호, 한 줄
                          소개, 홈페이지, 활동 지역, 페이스북 등 외부 서비스와의
                          연동을 위해 이용자가 설정한 계정 정보, 본인확인값(CI,
                          DI), 마케팅 정보 수신 동의(이메일)
                          <br />
                        </ItemTab>
                        ②. 회원가입(제휴사 계정)
                        <br />
                        <ItemTab>
                          - 구글 : 이름, 이메일, 프로필 사진
                          <br />
                          - 페이스북 : 이름, 이메일, 프로필 사진
                          <br />
                          - 카카오 : 이메일, 닉네임
                          <br />
                          - 네이버 : 이메일, 닉네임
                          <br />
                          - 깃허브 : 이메일, 프로필 사진
                          <br />
                        </ItemTab>
                        ③. 회원가입(기업회원)
                        <br />
                        <ItemTab>
                          - 필수 항목: 성명, 이메일(아이디), 비밀번호, 전화번호
                          <br />
                        </ItemTab>
                        ④. 프로그래밍 경진 대회
                        <br />
                        <ItemTab>
                          - 필수 항목: 필요 시 지원 기업의 자사 양식 이력서에서
                          요구하는 개인정보
                          <br />
                          - 선택 항목: 생년월일
                          <br />
                        </ItemTab>
                        ⑤. 채용 서비스 이용
                        <br />
                        <ItemTab>
                          - 필수 항목: 성명, 이메일, 전화번호
                          <br />
                          - 선택 항목: 저장소 주소, 블로그 또는 웹사이트 주소,
                          1줄 소개, 경력사항(회사 이름, 직무, 기간, 역할, 기타
                          링크, 기타 설명), 토이 프로젝트(프로젝트 이름,
                          프로젝트 1줄 설명, 팀 구성, 제작 연도, 역할, 저장소
                          링크, 오픈 여부), 학력 사항(학교 또는 기관명, 전공,
                          학위, 기간, 졸업 여부, 기타 설명), 외국어 능력(외국어
                          이름, 활용능력, 어학시험 점수)
                          <br />
                        </ItemTab>
                        ⑥. 유료 서비스 이용
                        <br />
                        <ItemTab>
                          - 필수 항목: 결제정보
                          <br />
                          - 카드 결제: 카드사명, 카드번호, 카드 유효기간
                          <br />
                          - 휴대폰 결제: 휴대폰번호, 통신사정보
                          <br />
                          - 무통장계좌이체: 은행명, 계좌번호
                          <br />
                        </ItemTab>
                        ⑦. 문의하기
                        <br />
                        <ItemTab>
                          - 필수 항목 : 이메일
                          <br />
                        </ItemTab>
                      </ItemTab>
                      나. 코딩역량인증시험 응시자
                      <br />
                      <ItemTab>
                        ①. 시험 접수 시<br />
                        <ItemTab>
                          - 필수 항목: 이름, 생년월일, 아이디, 비밀번호,
                          휴대폰번호, 이메일, 과목명, 응시 일시, CI
                          <br />
                          - 선택 항목: 단체명, 장애등급
                          <br />
                        </ItemTab>
                        ②. 시험 합격 시<br />
                        <ItemTab>
                          - 필수 항목 : 성명, 생년월일, 과목명, 레벨 등급,
                          합격일자, 자격번호, CI
                          <br />
                          - 선택 항목 : 단체명
                          <br />
                        </ItemTab>
                      </ItemTab>
                      다. 코딩 테스트 응시자
                      <br />
                      <ItemTab>
                        ①. 코딩 테스트 응시
                        <br />
                        <ItemTab>
                          - 필수 항목: 성명, 이메일(아이디), (채용 테스트 응시
                          시) 지원 기업 진행 코딩 테스트 결과
                          <br />
                        </ItemTab>
                        ②. 응시자 감독
                        <br />
                        <ItemTab>
                          - 필수 항목: 컴퓨터 화면 기록, 웹캠 또는 휴대전화
                          카메라로 촬영된 영상
                          <br />
                        </ItemTab>
                        ③. 응시자 신원 확인
                        <br />
                        <ItemTab>
                          - 필수 항목: 성명, 생년월일, 웹캠 또는 휴대전화
                          카메라로 촬영된 응시자 사진, 신분증 사본
                          <br />
                        </ItemTab>
                        ④. 화상 감독 서비스 품질 향상을 위한 영상 데이터 분석
                        <br />
                        <ItemTab>
                          - 선택 항목: 컴퓨터 화면 기록, 웹캠 또는 휴대전화
                          카메라로 촬영된 영상
                          <br />
                        </ItemTab>
                      </ItemTab>
                    </ItemTab>
                    2. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로
                    생성되어 수집될 수 있습니다.
                    <br />
                    <ItemTab>
                      가. IP 주소, 쿠키, 서비스 이용 기록, 방문 기록, 불량 이용
                      기록 등
                      <br />
                    </ItemTab>
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>
                  제7조 [개인정보 자동 수집 장치의 설치/운영 및 거부에 관한
                  사항]
                </ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 개인화되고 맞춤화 된 서비스를 제공하기 위해서 회사는
                    코디터 서비스 사용 정보를 저장하고 수시로 불러오는
                    '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데
                    이용되는 서버가 사용자의 브라우저에 보내는 조그마한 데이터
                    꾸러미로 회원님 컴퓨터의 하드디스크에 저장됩니다. 회사가
                    쿠키를 통해 수집하는 정보는 회원의 고유번호(User ID)에
                    한하며, 그 외의 다른 정보는 수집하지 않습니다. 회사가
                    쿠키(cookie)를 통해 수집한 회원의 고유번호는 다음의 목적을
                    위해 사용될 수 있습니다.
                    <br />
                    <ItemTab>
                      가. 쿠키의 사용 목적
                      <br />
                      <ItemTab>
                        회원과 비회원의 접속 빈도나 방문 시간 등을 분석,
                        이용자의 관심 분야를 파악 및 자취 추적, 각종 이벤트 참여
                        정도 및 방문 횟수 파악 등을 통한 개인 맞춤 서비스 제공
                        <br />
                      </ItemTab>
                      나. 쿠키 설정 거부 방법
                      <br />
                      <ItemTab>
                        귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                        따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든
                        쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나,
                        아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
                        <br />
                      </ItemTab>
                      다. 설정 방법
                      <br />
                      <ItemTab>
                        - Internet Explorer: 웹 브라우저 상단의 도구 → 인터넷
                        옵션 → 개인정보 → 개인정보처리 수준 설정
                        <br />
                        - Chrome : 웹 브라우저 우측 설정 메뉴 → 도구 → 인터넷
                        사용기록 삭제
                        <br />
                      </ItemTab>
                    </ItemTab>
                    2. 회사는 서비스 세션(session)을 통하여 이용자의 정보를 얻고
                    있습니다. 세션이란, 이용자가 “서비스” 사이트를 방문할 때
                    “서비스”의 서버 로부터 이용자의 컴퓨터에 보내진 시스템
                    파일로서 이용자의 연결 유지를 위하여 잠시 이용자의 컴퓨터에
                    머무는 파일입니다. 이러한 세션은 현재 연결의 유지에만
                    사용되며 브라우저를 종료할 경우 삭제됩니다.
                    <br />
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제8조 [개인정보의 파기]</ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등
                    개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
                    파기합니다.
                    <br />
                    2. 정보주체가 동의한 개인정보 보유 기간이 경과하거나
                    처리목적이 달성되었음에도 다른 법령에 따라 개인정보를 계속
                    보존하여야 하는 경우, 법령에 따라 해당 개인정보를
                    보유합니다.
                    <br />
                    3. 개인정보 파기 절차 및 방법은 다음과 같습니다.
                    <br />
                    <ItemTab>
                      가. 파기 절차
                      <br />
                      <ItemTab>
                        수집·이용목적이 달성된 개인정보는 지체없이 파기되며,
                        관련 법령에 따라 보관되어야 할 경우 별도의 DB에 옮겨져
                        내부 규정 및 관련 법령을 준수하여 일정기간(개인정보의
                        처리 및 보유기간 참조) 동안 안전하게 보관된 후 지체없이
                        파기됩니다. 이때, DB로 옮겨진 개인정보는 법률에 의한
                        경우를 제외하고 다른 목적으로 이용하지 않습니다.
                        <br />
                      </ItemTab>
                      나. 파기 방법
                      <br />
                      <ItemTab>
                        전자적 파일형태로 저장된 개인정보는 기록을 재생할 수
                        없는 기술적 방법을 사용하여 삭제하며, 종이에 기록,
                        출력된 개인정보는 분쇄하거나 소각을 통하여 파기합니다.
                        <br />
                      </ItemTab>
                    </ItemTab>
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제9조 [개인정보의 안전성 확보 조치]</ArticleTitle>
                <Item>
                  회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실,
                  도난, 유출, 위조, 변조 또는 훼손되지 않도록 개인정보의 안전성
                  확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고
                  있습니다.
                  <br />
                  <br />
                  <ItemTab>
                    1. 내부관리계획의 수립 및 시행
                    <br />
                    <ItemTab>
                      개인정보의 안전한 처리를 위하여 그렙 개인정보보호
                      내부관리계획 수립 및 시행하고 있습니다.
                      <br />
                    </ItemTab>
                    2. 개인정보 취급 담당자의 최소화 및 교육
                    <br />
                    <ItemTab>
                      개인정보를 취급하는 담당자를 지정하고 관리하고 있으며
                      취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고
                      있습니다.
                      <br />
                    </ItemTab>
                    3. 개인정보에 대한 접근 제한
                    <br />
                    <ItemTab>
                      개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
                      부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를
                      위하여 필요한 조치를 하고 있습니다.
                      <br />
                    </ItemTab>
                    4. 접속기록의 보관
                    <br />
                    <ItemTab>
                      개인정보처리시스템에 접속한 기록을 최소 2년 이상 보관,
                      관리하고 있습니다.
                      <br />
                    </ItemTab>
                    5. 개인정보의 암호화
                    <br />
                    <ItemTab>
                      개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고
                      있습니다.
                      <br />
                    </ItemTab>
                    6. 보안 프로그램 설치 및 주기적 점검
                    <br />
                    <ItemTab>
                      해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을
                      막기 위하여 보안 프로그램을 설치하고 주기적으로 점검하고
                      있습니다.
                      <br />
                    </ItemTab>
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>
                  제10조 [개인정보 보호 책임자 및 개인정보 침해 문의]
                </ArticleTitle>
                <Item>
                  <ItemTab>
                    1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                    개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을
                    위해 아래와 같이 개인정보 보호 담당 부서를 지정하고
                    있습니다. 고객의 개인정보와 관련한 문의 사항이 있으면
                    코디터에 연락 주시기 바랍니다.
                    <br />
                    2. 기타 개인정보 침해에 대한 피해 구제, 상담은 아래의 기관에
                    문의하실 수 있습니다.
                    <br />
                    <ItemTab>
                      가. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
                      (www.kopico.go.kr)
                      <br />
                      나. 개인정보침해신고센터 : (국번없이) 118
                      (privacy.kisa.or.kr)
                      <br />
                      다. 대검찰청 사이버수사과 : (국번없이) 1301
                      (www.spo.go.kr)
                      <br />
                      라. 경찰청 사이버수사국 : (국번없이) 182
                      (cyberbureau.police.go.kr)
                      <br />
                    </ItemTab>
                  </ItemTab>
                </Item>
              </Article>

              <Article>
                <ArticleTitle>제11조 [개인정보 처리방침의 변경]</ArticleTitle>
                <Item>
                  회사의 개인정보 처리방침은 법령 및 지침의 변경과 회사의 약관
                  및 내부 정책에 따라 변경될 수 있으며 이를 개정하는 경우,
                  회사는 변경사항에 대해 「개인정보 보호법」 제30조 및 동법
                  시행령 제31조에 따라 개정 내용을 회사 홈페이지 또는 전자우편을
                  통해 공개하겠습니다.
                </Item>
              </Article>
            </Chapter>
            <Item>
              게시일: 2025년 1월 1일
              <br />
              적용일: 2025년 1월 1일
              <br />
            </Item>
          </BodyContainer>
        </BodyContainerOuter>
        <ScrollToTopButton_Full mainContentRef={mainContentRef} />
      </Wrap>
    </>
  );
};

export default Privacy_M;
