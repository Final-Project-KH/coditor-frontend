import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
import FindId from "./react/pages/login/FindId";
import FindPw from "./react/pages/login/FindPw";
import Signup from "./react/pages/signup/signup";
import GlobalStyle from "././react/styles/GlobalStyle";
import Terms from "./react/pages/legal/Terms";
import Privacy from "./react/pages/legal/Privacy";
import About from "./react/pages/about/About";
import Main from "./react/pages/main/Main";
import Study_Main from "./react/pages/study/Study_Main";
import Java_Main from "./react/pages/study/java/Java_Main";
import Java_01 from "./react/pages/study/java/java_01/Java_01";
import Java_01_01 from "./react/pages/study/java/java_01/Java_01_01";
import Java_01_02 from "./react/pages/study/java/java_01/Java_01_02";
import Java_01_03 from "./react/pages/study/java/java_01/Java_01_03";
import Java_02 from "./react/pages/study/java/java_02/Java_02";
import Java_02_01 from "./react/pages/study/java/java_02/Java_02_01";
import Java_02_02 from "./react/pages/study/java/java_02/Java_02_02";
import Java_02_03 from "./react/pages/study/java/java_02/Java_02_03";
import Java_02_04 from "./react/pages/study/java/java_02/Java_02_04";
import Java_02_05 from "./react/pages/study/java/java_02/Java_02_05";
import Java_03 from "./react/pages/study/java/java_03/Java_03";
import Java_04 from "./react/pages/study/java/java_04/Java_04";
import Java_05 from "./react/pages/study/java/java_05/Java_05";
import Java_06 from "./react/pages/study/java/java_06/Java_06";
import Java_07 from "./react/pages/study/java/java_07/Java_07";
import Java_08 from "./react/pages/study/java/java_08/Java_08";
import Java_09 from "./react/pages/study/java/java_09/Java_09";
import Python_Main from "./react/pages/study/python/Python_Main";
import Python_01 from "./react/pages/study/python/python_01/Python_01";
import Python_01_01 from "./react/pages/study/python/python_01/Python_01_01";
import Python_01_02 from "./react/pages/study/python/python_01/Python_01_02";
import Python_01_03 from "./react/pages/study/python/python_01/Python_01_03";
import Python_01_04 from "./react/pages/study/python/python_01/Python_01_04";
import Python_01_05 from "./react/pages/study/python/python_01/Python_01_05";
import Python_01_06 from "./react/pages/study/python/python_01/Python_01_06";
import Python_01_07 from "./react/pages/study/python/python_01/Python_01_07";
import Python_01_08 from "./react/pages/study/python/python_01/Python_01_08";
import Python_01_09 from "./react/pages/study/python/python_01/Python_01_09";
import Python_01_10 from "./react/pages/study/python/python_01/Python_01_10";
import Python_02 from "./react/pages/study/python/python_02/Python_02";
import Python_03 from "./react/pages/study/python/python_03/Python_03";
import Python_04 from "./react/pages/study/python/python_04/Python_04";
import Python_05 from "./react/pages/study/python/python_05/Python_05";
import Python_06 from "./react/pages/study/python/python_06/Python_06";
import C_Main from "./react/pages/study/c/C_Main";
import C_01 from "./react/pages/study/c/c_01/C_01";
import C_01_01 from "./react/pages/study/c/c_01/C_01_01";
import C_02 from "./react/pages/study/c/c_02/C_02";
import C_03 from "./react/pages/study/c/c_03/C_03";
import C_04 from "./react/pages/study/c/c_04/C_04";
import C_05 from "./react/pages/study/c/c_05/C_05";
import CPlus_Main from "./react/pages/study/cplus/CPlus_Main";
import CPlus_01 from "./react/pages/study/cplus/cplus_01/CPlus_01";
import CPlus_01_01 from "./react/pages/study/cplus/cplus_01/CPlus_01_01";
import CPlus_02 from "./react/pages/study/cplus/cplus_02/CPlus_02";
import CPlus_03 from "./react/pages/study/cplus/cplus_03/CPlus_03";
import CPlus_04 from "./react/pages/study/cplus/cplus_04/CPlus_04";
import CPlus_05 from "./react/pages/study/cplus/cplus_05/CPlus_05";
import CPlus_06 from "./react/pages/study/cplus/cplus_06/CPlus_06";
import CPlus_07 from "./react/pages/study/cplus/cplus_07/CPlus_07";
import CPlus_08 from "./react/pages/study/cplus/cplus_08/CPlus_08";
import CPlus_09 from "./react/pages/study/cplus/cplus_09/CPlus_09";
import CPlus_10 from "./react/pages/study/cplus/cplus_10/CPlus_10";
import JavaScript_Main from "./react/pages/study/javascript/JavaScript_Main";
import JavaScript_01 from "./react/pages/study/javascript/javascript_01/JavaScript_01";
import JavaScript_01_01 from "./react/pages/study/javascript/javascript_01/JavaScript_01_01";
import JavaScript_01_02 from "./react/pages/study/javascript/javascript_01/JavaScript_01_02";
import JavaScript_01_03 from "./react/pages/study/javascript/javascript_01/JavaScript_01_03";
import JavaScript_02 from "./react/pages/study/javascript/javascript_02/JavaScript_02";
import JavaScript_03 from "./react/pages/study/javascript/javascript_03/JavaScript_03";
import JavaScript_04 from "./react/pages/study/javascript/javascript_04/JavaScript_04";
import JavaScript_05 from "./react/pages/study/javascript/javascript_05/JavaScript_05";
import Practice from "./react/pages/codingtest/subpages/Practice";
import CodeChallenge from "./react/pages/codingtest/subpages/CodeChallenge";
import Community_Main from "./react/pages/community/Community_Main";
import Community_Coding from "./react/pages/community/Community_Coding";
import Community_Course from "./react/pages/community/Community_Course";
import Community_Study from "./react/pages/community/Community_Study";
import Community_Team from "./react/pages/community/Community_Team";
import Post_Read from "./react/pages/community/Post_Read";
import Post_Write_Coding from "./react/pages/community/Post_Write_Coding";
import Post_Write_Course from "./react/pages/community/Post_Write_Course";
import Post_Write_Study from "./react/pages/community/Post_Write_Study";
import Post_Write_Team from "./react/pages/community/Post_Write_Team";
import User_Main from "./react/pages/community/User_Main";
import Report from "./react/pages/cs/Report";
import Suggestion from "./react/pages/cs/Suggestion";
import Roadmap_Frontend from "./react/pages/more/Roadmap_Frontend";
import Roadmap_Backend from "./react/pages/more/Roadmap_Backend";
import Roadmap_DevOps from "./react/pages/more/Roadmap_DevOps";
import Roadmap_Fullstack from "./react/pages/more/Roadmap_Fullstack";
import RequiredAuth from "./util/RequiredAuth";
import MyPage from "./react/pages/mypage/MyPage";
import MyPage_UserFeed from "./react/pages/mypage/MyPage_UserFeed";
import MyPage_Withdrawal from "./react/pages/mypage/MyPage_Withdrawal";
import MyPage_Study from "./react/pages/mypage/MyPage_Study";
import MyPage_CodingTest from "./react/pages/mypage/MyPage_CodingTest";
import MyPage_Community from "./react/pages/mypage/MyPage_Community";
import MyPage_Report from "./react/pages/mypage/MyPage_Report";
import MyPage_Suggestion from "./react/pages/mypage/MyPage_Suggestion";
import Post_Modify_Coding from "./react/pages/community/Post_Modify_Coding";
import Post_Modify_Course from "./react/pages/community/Post_Modify_Course";
import Post_Modify_Study from "./react/pages/community/Post_Modify_Study";
import Post_Modify_Team from "./react/pages/community/Post_Modify_Team";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AppContents />
      </Router>
    </>
  );
};

export default App;

const AppContents = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/community/coding/write" element={<Post_Write_Coding />} />
        <Route
          path="/community/coding/modify:boardId"
          element={<Post_Modify_Coding />}
        />
        <Route path="/community/course/write" element={<Post_Write_Course />} />
        <Route
          path="/community/course/modify:boardId"
          element={<Post_Modify_Course />}
        />
        <Route path="/community/study/write" element={<Post_Write_Study />} />
        <Route
          path="/community/study/modify:boardId"
          element={<Post_Modify_Study />}
        />
        <Route path="/community/team/write" element={<Post_Write_Team />} />
        <Route
          path="/community/team/modify:boardId"
          element={<Post_Modify_Team />}
        />
        <Route path="/cs/report" element={<Report />} />
        <Route path="/cs/suggestion" element={<Suggestion />} />
        <Route
          path="/codingtest/challenge/:questionId"
          element={<CodeChallenge />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          {StudyRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {CodingTestRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {CommunityRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {MoreRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {MyPageRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

const StudyRoutes = [
  { path: "/study", element: <Study_Main /> },
  { path: "/study/java", element: <Java_Main /> },
  { path: "/study/java/01", element: <Java_01 /> },
  { path: "/study/java/01/01", element: <Java_01_01 /> },
  { path: "/study/java/01/02", element: <Java_01_02 /> },
  { path: "/study/java/01/03", element: <Java_01_03 /> },
  { path: "/study/java/02", element: <Java_02 /> },
  { path: "/study/java/02/01", element: <Java_02_01 /> },
  { path: "/study/java/02/02", element: <Java_02_02 /> },
  { path: "/study/java/02/03", element: <Java_02_03 /> },
  { path: "/study/java/02/04", element: <Java_02_04 /> },
  { path: "/study/java/02/05", element: <Java_02_05 /> },
  { path: "/study/java/03", element: <Java_03 /> },
  { path: "/study/java/04", element: <Java_04 /> },
  { path: "/study/java/05", element: <Java_05 /> },
  { path: "/study/java/06", element: <Java_06 /> },
  { path: "/study/java/07", element: <Java_07 /> },
  { path: "/study/java/08", element: <Java_08 /> },
  { path: "/study/java/09", element: <Java_09 /> },
  { path: "/study/python", element: <Python_Main /> },
  { path: "/study/python/01", element: <Python_01 /> },
  { path: "/study/python/01/01", element: <Python_01_01 /> },
  { path: "/study/python/01/02", element: <Python_01_02 /> },
  { path: "/study/python/01/03", element: <Python_01_03 /> },
  { path: "/study/python/01/04", element: <Python_01_04 /> },
  { path: "/study/python/01/05", element: <Python_01_05 /> },
  { path: "/study/python/01/06", element: <Python_01_06 /> },
  { path: "/study/python/01/07", element: <Python_01_07 /> },
  { path: "/study/python/01/08", element: <Python_01_08 /> },
  { path: "/study/python/01/09", element: <Python_01_09 /> },
  { path: "/study/python/01/10", element: <Python_01_10 /> },
  { path: "/study/python/02", element: <Python_02 /> },
  { path: "/study/python/03", element: <Python_03 /> },
  { path: "/study/python/04", element: <Python_04 /> },
  { path: "/study/python/05", element: <Python_05 /> },
  { path: "/study/python/06", element: <Python_06 /> },
  { path: "/study/c", element: <C_Main /> },
  { path: "/study/c/01", element: <C_01 /> },
  { path: "/study/c/01/01", element: <C_01_01 /> },
  { path: "/study/c/02", element: <C_02 /> },
  { path: "/study/c/03", element: <C_03 /> },
  { path: "/study/c/04", element: <C_04 /> },
  { path: "/study/c/05", element: <C_05 /> },
  { path: "/study/cplus", element: <CPlus_Main /> },
  { path: "/study/cplus/01", element: <CPlus_01 /> },
  { path: "/study/cplus/01/01", element: <CPlus_01_01 /> },
  { path: "/study/cplus/02", element: <CPlus_02 /> },
  { path: "/study/cplus/03", element: <CPlus_03 /> },
  { path: "/study/cplus/04", element: <CPlus_04 /> },
  { path: "/study/cplus/05", element: <CPlus_05 /> },
  { path: "/study/cplus/06", element: <CPlus_06 /> },
  { path: "/study/cplus/07", element: <CPlus_07 /> },
  { path: "/study/cplus/08", element: <CPlus_08 /> },
  { path: "/study/cplus/09", element: <CPlus_09 /> },
  { path: "/study/cplus/10", element: <CPlus_10 /> },
  { path: "/study/javascript", element: <JavaScript_Main /> },
  { path: "/study/javascript/01", element: <JavaScript_01 /> },
  { path: "/study/javascript/01/01", element: <JavaScript_01_01 /> },
  { path: "/study/javascript/01/02", element: <JavaScript_01_02 /> },
  { path: "/study/javascript/01/03", element: <JavaScript_01_03 /> },
  { path: "/study/javascript/02", element: <JavaScript_02 /> },
  { path: "/study/javascript/03", element: <JavaScript_03 /> },
  { path: "/study/javascript/04", element: <JavaScript_04 /> },
  { path: "/study/javascript/05", element: <JavaScript_05 /> },
];

const CodingTestRoutes = [
  { path: "/codingtest/practice", element: <Practice /> },
];

const CommunityRoutes = [
  { path: "/community", element: <Community_Main /> },
  { path: "/community/coding", element: <Community_Coding /> },
  { path: "/community/:boardType/post/:boardId", element: <Post_Read /> },
  { path: "/community/course", element: <Community_Course /> },
  { path: "/community/study", element: <Community_Study /> },
  { path: "/community/team", element: <Community_Team /> },
  { path: "/community/user/:userId", element: <User_Main /> },
];

const MoreRoutes = [
  { path: "/roadmap/frontend", element: <Roadmap_Frontend /> },
  { path: "/roadmap/backend", element: <Roadmap_Backend /> },
  { path: "/roadmap/devops", element: <Roadmap_DevOps /> },
  { path: "/roadmap/fullstack", element: <Roadmap_Fullstack /> },
];

const MyPageRoutes = [
  {
    path: "/mypage",
    element: (
      <RequiredAuth>
        <MyPage />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/accountmanager",
    element: (
      <RequiredAuth>
        <MyPage />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/userfeed",
    element: (
      <RequiredAuth>
        <MyPage_UserFeed />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/withdrawal",
    element: (
      <RequiredAuth>
        <MyPage_Withdrawal />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/study",
    element: (
      <RequiredAuth>
        <MyPage_Study />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/codingtest",
    element: (
      <RequiredAuth>
        <MyPage_CodingTest />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/community",
    element: (
      <RequiredAuth>
        <MyPage_Community />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/report",
    element: (
      <RequiredAuth>
        <MyPage_Report />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/suggestion",
    element: (
      <RequiredAuth>
        <MyPage_Suggestion />
      </RequiredAuth>
    ),
    auth: true,
  },
];
