export const menus = [
  {
    id: "about",
    label: "about",
    link: "/about",
    columns: [
      {
        title: { text: "🔥 코디터 소개", link: "/about" },
        contents: [],
      },
    ],
  },

  {
    id: "study",
    label: "study",
    link: "/study",
    columns: [
      {
        title: { text: "Java", link: "/study/java" },
        contents: [],
      },
      {
        title: { text: "Python", link: "/study/python" },
        contents: [],
      },
      {
        title: { text: "C", link: "/study/c" },
        contents: [],
      },
      {
        title: { text: "C++", link: "/study/cplus" },
        contents: [],
      },
      {
        title: { text: "JavaScript", link: "/study/javaScript" },
        contents: [],
      },
    ],
  },

  {
    id: "coding test",
    label: "coding test",
    link: "/codingtest",
    columns: [
      {
        title: { text: "Java", link: "/codingtest/java" },
        contents: [
          { text: "Practice", link: "/codingtest/java/practice" },
          { text: "Basic", link: "/codingtest/java/basic" },
          { text: "Intermediate", link: "/codingtest/java/intermediate" },
          { text: "Expert", link: "/codingtest/java/expert" },
        ],
      },
      {
        title: { text: "Python", link: "/codingtest/python" },
        contents: [
          { text: "Practice", link: "/codingtest/python/practice" },
          { text: "Basic", link: "/codingtest/python/basic" },
          { text: "Intermediate", link: "/codingtest/python/intermediate" },
          { text: "Expert", link: "/codingtest/python/expert" },
        ],
      },
      {
        title: { text: "C", link: "/codingtest/c" },
        contents: [
          { text: "Practice", link: "/codingtest/c/practice" },
          { text: "Basic", link: "/codingtest/c/basic" },
          { text: "Intermediate", link: "/codingtest/c/intermediate" },
          { text: "Expert", link: "/codingtest/c/expert" },
        ],
      },
      {
        title: { text: "C++", link: "/codingtest/cplus" },
        contents: [
          { text: "Practice", link: "/codingtest/cplus/practice" },
          { text: "Basic", link: "/codingtest/cplus/basic" },
          { text: "Intermediate", link: "/codingtest/cplus/intermediate" },
          { text: "Expert", link: "/codingtest/cplus/expert" },
        ],
      },
      {
        title: { text: "JavaScript", link: "/codingtest/javascript" },
        contents: [
          { text: "Practice", link: "/codingtest/javascript/practice" },
          { text: "Basic", link: "/codingtest/javascript/basic" },
          { text: "Intermediate", link: "/codingtest/javascript/intermediate" },
          { text: "Expert", link: "/codingtest/javascript/expert" },
        ],
      },
    ],
  },

  {
    id: "community",
    label: "community",
    link: "/community",
    columns: [
      {
        title: { text: "💻 코딩 질문", link: "/community/coding" },
        contents: [],
      },
      {
        title: { text: "🎓 진로 질문", link: "/community/course" },
        contents: [],
      },
      {
        title: { text: "✏️ 스터디", link: "/community/study" },
        contents: [],
      },
      {
        title: { text: "📋 팀 프로젝트", link: "/community/team" },
        contents: [],
      },
    ],
  },

  {
    id: "more",
    label: "more",
    link: "/more",
    columns: [
      {
        title: { text: "개발자 로드맵", link: "/more/roadmap" },
        contents: [
          { text: "프론트엔드", link: "/more/roadmap/frontend" },
          { text: "백엔드", link: "/more/roadmap/backend" },
          { text: "DevOps", link: "/more/roadmap/devops" },
          { text: "풀스택", link: "/more/roadmap/fullstack" },
          { text: "Data Analyst", link: "/more/roadmap/dataanalyst" },
          { text: "AI & Data Science", link: "/more/roadmap/aianddatascience" },
          { text: "앱 개발", link: "/more/roadmap/appdev" },
          { text: "게임 개발", link: "/more/roadmap/gamedev" },
          {
            text: "네트워크 & 보안",
            link: "/more/roadmap/networkandsecurities",
          },
        ],
      },
      {
        title: {
          text: "코딩 테스트 및 알고리즘 관련 외부 사이트",
          link: "/more/sites",
        },
        contents: [
          { text: "백준 온라인 저지", link: "https://www.acmicpc.net/" },
          {
            text: "삼성 SW 익스퍼트 아카데미",
            link: "https://swexpertacademy.com/",
          },
          { text: "프로그래머스", link: "https://programmers.co.kr/" },
          { text: "코드업", link: "https://codeup.kr/" },
          { text: "LeetCode", link: "https://leetcode.com/" },
          { text: "Codeforces", link: "https://codeforces.com/" },
          { text: "Hackerrank", link: "https://www.hackerrank.com/" },
          { text: "구름DEVTH", link: "https://devth.goorm.io/" },
        ],
      },
      {
        title: { text: "기타 정보", link: "/more/etc" },
        contents: [
          { text: "IDE Top 10", link: "/more/etc/idetop10" },
          { text: "생산성, 협업 도구 Top 10", link: "/more/etc/toolstop10" },
          { text: "IT 용어 사전", link: "/more/etc/itdictionary" },
          { text: "IT 관련 자격증 정리", link: "/more/etc/itcert" },
          {
            text: "연도별 언어 인기 순위",
            link: "/more/roadmap/languagesrank",
          },
        ],
      },
    ],
  },

  {
    id: "cs",
    label: "cs",
    link: "/cs",
    columns: [
      {
        title: {},
        contents: [
          { text: "악성 사용자 신고", link: "/cs/report" },
          { text: "건의사항", link: "/cs/question" },
        ],
      },
    ],
  },
];
