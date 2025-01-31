import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
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
import Python_Main from "./react/pages/study/python/Python_Main";
import Python_01 from "./react/pages/study/python/python_01/Python_01";
import Python_01_01 from "./react/pages/study/python/python_01/Python_01_01";
import C_Main from "./react/pages/study/c/C_Main";
import C_01 from "./react/pages/study/c/c_01/C_01";
import C_01_01 from "./react/pages/study/c/c_01/C_01_01";
import CPlus_Main from "./react/pages/study/cplus/CPlus_Main";
import CPlus_01 from "./react/pages/study/cplus/cplus_01/CPlus_01";
import CPlus_01_01 from "./react/pages/study/cplus/cplus_01/CPlus_01_01";
import JavaScript_Main from "./react/pages/study/javascript/JavaScript_Main";
import JavaScript_01 from "./react/pages/study/javascript/javascript_01/JavaScript_01";
import JavaScript_01_01 from "./react/pages/study/javascript/javascript_01/JavaScript_01_01";
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
import FindId from "./react/pages/login/FindId";
import FindPw from "./react/pages/login/FindPw";

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
        <Route path="/community/course/write" element={<Post_Write_Course />} />
        <Route path="/community/study/write" element={<Post_Write_Study />} />
        <Route path="/community/team/write" element={<Post_Write_Team />} />
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
  { path: "/study/python", element: <Python_Main /> },
  { path: "/study/python/01", element: <Python_01 /> },
  { path: "/study/python/01/01", element: <Python_01_01 /> },
  { path: "/study/c", element: <C_Main /> },
  { path: "/study/c/01", element: <C_01 /> },
  { path: "/study/c/01/01", element: <C_01_01 /> },
  { path: "/study/cplus", element: <CPlus_Main /> },
  { path: "/study/cplus/01", element: <CPlus_01 /> },
  { path: "/study/cplus/01/01", element: <CPlus_01_01 /> },
  { path: "/study/javascript", element: <JavaScript_Main /> },
  { path: "/study/javascript/01", element: <JavaScript_01 /> },
  { path: "/study/javascript/01/01", element: <JavaScript_01_01 /> },
];

const CodingTestRoutes = [
  { path: "/codingtest/practice", element: <Practice /> },
  { path: "/codingtest/challenge/:questionId", element: <CodeChallenge /> },
];

const CommunityRoutes = [
  { path: "/community", element: <Community_Main /> },
  { path: "/community/coding", element: <Community_Coding /> },
  { path: "/community/:boardType/post/:boardId", element: <Post_Read /> },
  { path: "/community/course", element: <Community_Course /> },
  { path: "/community/study", element: <Community_Study /> },
  { path: "/community/team", element: <Community_Team /> },
  { path: "/community/testid01", element: <User_Main /> },
];
