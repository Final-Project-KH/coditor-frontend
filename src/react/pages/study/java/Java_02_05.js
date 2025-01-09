import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  StickyClassBox,
  ClassContentsCodeBox,
  ClassContentsCode,
  ClassContentsImage,
  RightArrow,
  LeftArrow,
  ArrowContainer,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
} from "../../../styles/study/Study";
import { Java_ClassListSmall_02 } from "./Java_ClassListSmall";
import Java_SubjectTitle from "./Java_SubjectTitle";

const Java_02_05 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/main" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/02" className="menu-link">
            <TopBoxText>02. 기본 지료형과 연산자 / 제어문</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/02/05" className="menu-link">
            <TopBoxText>반복문</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
          <StickyClassBox>
            <Java_ClassListSmall_02 />
          </StickyClassBox>
        </LeftContainer>

        <RightContainer>
          <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>반복문</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer>
              <ClassContentsText>
                반복문이란 주어진 조건이 참인 경우 혹은 주어진 횟수만큼
                반복적으로 프로그램을 수행 합니다.
                <br />
                프로그램이 처리하는 코드의 많은 부분이 반복적으로 수행되는
                형태가 많으므로 가장 많이 사용되는 제어문 입니다.
                <br />
                <br />
                <ClassContentsTextTab>
                  1. while 문<br />
                  2. do ~ while문
                  <br />
                  3. for문
                  <br />
                  4. Enhanced for 문 : 배열이나 컬렉션과 같은 반복
                  가능한(iterable) 객체를 간편하게 순회하고 요소에 접근하는
                  반복문
                  <br />
                  <br />
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle3>while 문</ClassContentsTitle3>
              <ClassContentsText>
                주어진 조건이 참인 동안 수행되는 반복문 입니다. <br />
                반복 횟수가 명확하지 않거나, 특정 조건이 충족될 때까지 반복해야
                하는 경우에 사용됩니다.
                <br />
                <font color="red">
                  <b>
                    {`while(조건식) {`}
                    <br />
                    {`조건이 참인 동안 반복적으로 실행되는 명령문;`}
                    <br />
                    {`}`}
                  </b>
                </font>
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`while(n > 0) {`}
                    <br />
                    {`	sum += n;`}
                    <br />
                    {`	n--;`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>
                잘못 입력된 경우 반복문 계속 수행 (유효값 체크)
              </ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class While {`}
                    <br />
                    {`    public static void main(String[]args) {`}
                    <br />
                    {`        int age;`}
                    <br />
                    {`				 Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        while(true) {`}
                    <br />
                    {`            System.out.print("나이를 입력 하세요 : ");`}
                    <br />
                    {`            age = sc.nextInt();`}
                    <br />
                    {`            if (age > 0 && age < 200) break;`}
                    <br />
                    {`            else System.out.println("나이를 잘못 입력 하셨습니다. ");`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>정해진 횟수 반복하기</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`int treeHit = 0;`}
                    <br />
                    {`while (treeHit < 10) {`}
                    <br />
                    {`    treeHit++;`}
                    <br />
                    {`    System.out.println("나무를  " + treeHit + "번 찍었습니다.");`}
                    <br />
                    {`    if (treeHit == 10) {`}
                    <br />
                    {`        System.out.println("나무 넘어갑니다.");`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle2>do ~ while문</ClassContentsTitle2>
              <ClassContentsText>
                먼저 루틴을 수행하고 조건을 나중에 비교 합니다.
                <br />
                해당 루틴이 한번은 수행되어야 하는 경우 사용하며 while문으로
                대체 가능 합니다.
                <br />
                <font color="red">
                  <b>
                    {`do {`}
                    <br />
                    {`한번은 무조건 수행되고 조건이 참인 경우 반복적으로 수행되는 루틴`}
                    <br />
                    {`} while(조건식);`}
                  </b>
                </font>
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class While {`}
                    <br />
                    {`    public static void main(String[]args) {`}
                    <br />
                    {`        int age;`}
                    <br />
                    {`        do {`}
                    <br />
                    {`            System.out.print("나이를 입력 하세요 : ");`}
                    <br />
                    {`            Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`            age = sc.nextInt();`}
                    <br />
                    {`        } while(age <= 0 || age >= 200);`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle2>for문</ClassContentsTitle2>
              <ClassContentsText>
                for문내에 초기식, 조건식, 증감식에 대한 식을 가지고 있는 유한의
                갯수를 반복 수행할 때 유용하게 사용 됩니다.
                <br />
                for문내의 초기식, 조건식, 증감식은 각각 생략 할 수 있습니다.
                <br />
                for문에서 실행될 명령문이 한 중인 경우 중괄호를 생략 할 수
                있습니다. (조건문도 동일)
                <br />
                <font color="red">
                  <b>
                    {`for(초기식;조건식;증감식) {`}
                    <br />
                    {`참인 동안 반복적으로 실행되는 명령문;`}
                    <br />
                    {`}`}
                  </b>
                </font>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>기본 for문</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public static void main(String[]args) {`}
                    <br />
                    {`    for (int i = 1; i <= 100; i++) {`}
                    <br />
                    {`        System.out.printf("%4d", i);`}
                    <br />
                    {`        if (i % 10 == 0) System.out.println();`}
                    <br />
                    {`    }`}
                    <br />
                    {`    System.out.println();`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>중첩 for문(별찍기)</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`   public static void main(String[]args) {`}
                    <br />
                    {`      for (int i = 0; i < 10; i++) {`}
                    <br />
                    {`          for (int j = 0; j < 10; j++) {`}
                    <br />
                    {`              System.out.print("* ");`}
                    <br />
                    {`          }`}
                    <br />
                    {`          System.out.println();`}
                    <br />
                    {`      }`}
                    <br />
                    {`  }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>구구단 찍기</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public static void main(String[]args) {`}
                    <br />
                    {`  for (int i = 2; i < 10; i++) {`}
                    <br />
                    {`      for (int j = 1; j < 10; j++) {`}
                    <br />
                    {`          System.out.printf("%d x %d = %d\n", i, j, (i*j));`}
                    <br />
                    {`      }`}
                    <br />
                    {`      System.out.println();`}
                    <br />
                    {`  }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>사각형 찍기</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public static void main(String[]args) {`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        int n = sc.nextInt();`}
                    <br />
                    {`        for (int i = 0; i <= n*n; i++) {`}
                    <br />
                    {`            System.out.printf("%3d", i);`}
                    <br />
                    {`            if(i % n == 0) System.out.println();`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>별찍기 (2중 for 기본)</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`  int n = sc.nextInt();`}
                    <br />
                    {`  for (int i = 0; i < n; i++) {`}
                    <br />
                    {`      for (int j = 0; j < n;j++) {`}
                    <br />
                    {`          System.out.print("* ");`}
                    <br />
                    {`      }`}
                    <br />
                    {`      System.out.println();`}
                    <br />
                    {` }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle2>분기분</ClassContentsTitle2>
              <ClassContentsTitle3>break문</ClassContentsTitle3>
              <ClassContentsText>
                break 문은 루프 내에서 사용하여 해당 반복문을 완전히 종료시킨
                뒤, 반복문 바로 다음에 위치한 명령문을 실행합니다.
                <br />
                즉 루프 내에서 조건식의 판단 결과와 상관없이 반복문을 완전히
                빠져나가고 싶을 때 사용합니다.
                <br />
                주로 반복문에서 사용되며, switch 문의 case를 끝낼 때도 사용
                됩니다.
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>continue 문</ClassContentsTitle3>
              <ClassContentsText>
                continue 문은 루프 내에서 사용하여 해당 루프의 나머지 부분을
                건너뛰고, 바로 다음 조건식의 판단으로 넘어가게 해줍니다.
                <br />
                보통 반복문 내에서 특정 조건에 대한 예외 처리를 하고자 할 때
                자주 사용됩니다.
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>return 문</ClassContentsTitle3>
              <ClassContentsText>
                메소드에서 사용되며, 메소드의 실행을 종료하고 값을 반환합니다.
              </ClassContentsText>
              <ClassContentsTitle2>실습문제</ClassContentsTitle2>
              <ClassContentsTitle3>연습문제(1)</ClassContentsTitle3>
              <ClassContentsText>
                · 삼각형 별찍기
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public static void main(String[]args) {`}
                    <br />
                    {`    Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`    int n = sc.nextInt();`}
                    <br />
                    {`    for (int i = 0; i < n; i++) {`}
                    <br />
                    {`        for (int j = 0; j < i+1;j++) {`}
                    <br />
                    {`            System.out.print("* ");`}
                    <br />
                    {`        }`}
                    <br />
                    {`        System.out.println();`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(2)</ClassContentsTitle3>
              <ClassContentsText>
                · 두개의 주사위(랜덤 함수 사용)
                <br />
                <br />
                <ClassContentsCodeBox>
                  👉 Math.random(): Math 클래스의 random() 메서드는 0 이상 1
                  미만의 무작위 실수 값을 반환합니다.
                </ClassContentsCodeBox>
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public static void main(String[] args) {`}
                    <br />
                    {`    int rand1, rand2;`}
                    <br />
                    {`    int cnt = 0;`}
                    <br />
                    {`    while(true) {`}
                    <br />
                    {`        cnt++;`}
                    <br />
                    {`        rand1 = (int) ((Math.random() * 6) + 1); // 랜덤 함수는 실수형으로 값이 생성되므로 형변환이 필요.`}
                    <br />
                    {`        rand2 = (int) ((Math.random() * 6) + 1);`}
                    <br />
                    {`        if((rand1 + rand2) == 12) {`}
                    <br />
                    {`            System.out.printf("무인도를 %d 번만에 탈출 합니다.\n", cnt);`}
                    <br />
                    {`            break;`}
                    <br />
                    {`        } else {`}
                    <br />
                    {`            System.out.println("주사위의 합이 " + (rand1 + rand2) + "입니다.");`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(3)</ClassContentsTitle3>
              <ClassContentsText>
                · 중복 없는 로또 번호 만들기
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class Main {`}
                    <br />
                    {`   public static void main(String[] args) {`}
                    <br />
                    {`       int[] lotto = new int[6];`}
                    <br />
                    {`       int val, index = 0;`}
                    <br />
                    {`       boolean isExist = false;`}
                    <br />
                    {`       while(true) {`}
                    <br />
                    {`           val = (int)((Math.random() * 45) + 1);`}
                    <br />
                    {`           for (int i = 0; i < 6; i++) {`}
                    <br />
                    {`               if (lotto[i] == val) isExist = true;`}
                    <br />
                    {`           }`}
                    <br />
                    {`           if(!isExist) lotto[index++] = val;`}
                    <br />
                    {`           if(index == 6) break;`}
                    <br />
                    {`           isExist = false;`}
                    <br />
                    {`       }`}
                    <br />
                    {`       for(int i = 0; i < 6; i++) {`}
                    <br />
                    {`           System.out.print(lotto[i] + " ");`}
                    <br />
                    {`       }`}
                    <br />
                    {`       System.out.println();`}
                    <br />
                    {`   }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(4)</ClassContentsTitle3>
              <ClassContentsText>
                · 양의 정수 n을 입력 받아 n * n 크기의 행렬을 출력하는 프로그램
                작성
                <br />
                · 이 때 행렬의 값은 1부터 시작하여 왼쪽에서 오른쪽, 위에서 아래
                순서대로 채워 넣음
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`import java.util.Scanner;`}
                    <br />
                    <br />
                    {`public class Test {`}
                    <br />
                    {`    public static void main(String[] args)  {`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        System.out.print("정수 입력 : ");`}
                    <br />
                    {`        int n = sc.nextInt();`}
                    <br />
                    {`        for (int i = 1; i <= n * n; i++) {`}
                    <br />
                    {`            System.out.printf("%4d", i);`}
                    <br />
                    {`            if (i % n == 0) System.out.println();`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
              </ClassContentsText>
            </ClassContentsContainer>
          </EachClass>
          <ArrowContainer>
            <a href="/study/java/02/04" style={{ textDecoration: "none" }}>
              <LeftArrow />
            </a>
            <RightArrow />
          </ArrowContainer>
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_02_05;
