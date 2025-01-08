import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainerJava,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassName,
  ClassContents,
  ClassStatus,
  ClassStatusDot,
  ClassStatusText,
  ClassSet,
} from "../../../styles/study/Study";

const Java_ClassListFull = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>01. Java 시작</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/01" className="menu-link">
                Java 시작하기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/02" className="menu-link">
                Java 개발 환경 구축
              </a>
            </ClassName>

            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/03" className="menu-link">
                Java 프로젝트 생성 및 기본
              </a>
            </ClassName>{" "}
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>02. 기본 자료형과 연산자 / 제어문</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/01" className="menu-link">
                변수와 자료형
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/02" className="menu-link">
              변수와 시스템 입출력
              </a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/03" className="menu-link">
              연산자
              </a>
              </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/04" className="menu-link">
              조건문
              </a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/05" className="menu-link">
              반복문</a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>03. 배열과 문자열(참조 타입)</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>참조 타입과 메모리 구조</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>배열</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>String</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#FF0000" }}>●</ClassStatusDot>
              <ClassStatusText>학습 중</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (회원정보)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>04. 객체 지향 프로그래밍</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>객체 지향 프로그래밍과 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>메소드와 필드</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (영화표 예매)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>this와 this()</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (아이패드 주문하기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Method Overloading</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>상속</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (TV 만들기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>다형성</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>super & super()</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>접근 제한자 & Getter, Setter</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>정적 멤버 & Method</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Singleton</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (에어컨 만들기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>추상 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Interface</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Default Method</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (자동차 만들기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Down Casting & instance of</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>객체를 배열로 관리하기</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>다중 인터페이스와 상속</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>익명 객체</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>중첩 클래스와 중첩 인터페이스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Template Method</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Annotation</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Package</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>05. Java API 클래스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>Java API</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Object 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>StringBuffer, StringBuilder</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Math 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Enum 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Date & Calendar 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Wrapper 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Arrays 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>System 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>String Tokenizer</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Class 클래스</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>06. 제네릭 / 컬렉션 프레임워크</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>제네릭</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>컬렉션 프레임워크</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>List</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Map</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Set Interface</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>검색기능을 강화시킨 컬렉션</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Comparable & Comparator</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>LIFO와 FIFO</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Iterator와 향상된 for문</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (컬렉션 프레임워크)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>07. Thread / 예외 처리</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>Thread</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (RPG 게임 만들기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>예외 처리</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>08. 람다와 스트림 / 입력과 출력</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>함수형 프로그래밍</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>스트림</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>입출력 스트림</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>

      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>09. 네트워킹</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>웹의 개요</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>TCP / IP와 소켓 통신</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>TCP 네트워킹</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Server (단일 채팅 서버)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Client (단일 채팅 클라이언트)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>socket을 이용한 다중 채팅</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>직렬화를 이용한 네트워크</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListFull;
