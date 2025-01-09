import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
import Signup from "./react/pages/signup/signup";
import GlobalStyle from "././react/styles/GlobalStyle";
import Terms from "./react/pages/legal/Terms";
import Privacy from "./react/pages/legal/Privacy";
import About from "./react/pages/about/About";
import Main from "./react/pages/main/Main";
import Study from "./react/pages/study/Study";
import Java_Main from "./react/pages/study/java/Java_Main";
import Java_01 from "./react/pages/study/java/Java_01";
import Java_01_01 from "./react/pages/study/java/Java_01_01";
import Java_01_02 from "./react/pages/study/java/Java_01_02";
import Java_01_03 from "./react/pages/study/java/Java_01_03";
import Java_02 from "./react/pages/study/java/Java_02";
import Java_02_01 from "./react/pages/study/java/Java_02_01";
import Java_02_02 from "./react/pages/study/java/Java_02_02";
import Java_02_03 from "./react/pages/study/java/Java_02_03";
import Java_02_04 from "./react/pages/study/java/Java_02_04";
import Java_02_05 from "./react/pages/study/java/Java_02_05";
import Python_Main from "./react/pages/study/python/Python_Main";
import Python_01 from "./react/pages/study/python/Python_01";
import Python_01_01 from "./react/pages/study/python/Python_01_01";
import C_Main from "./react/pages/study/c/C_Main";
import C_01 from "./react/pages/study/c/C_01";
import C_01_01 from "./react/pages/study/c/C_01_01";
import CPlus_Main from "./react/pages/study/cplus/CPlus_Main";
import CPlus_01 from "./react/pages/study/cplus/CPlus_01";
import CPlus_01_01 from "./react/pages/study/cplus/CPlus_01_01";
import JavaScript_Main from "./react/pages/study/javascript/JavaScript_Main";
import JavaScript_01 from "./react/pages/study/javascript/JavaScript_01";
import JavaScript_01_01 from "./react/pages/study/javascript/JavaScript_01_01";
import CodingTestCommons from "./react/pages/codingtest/CodingTestCommon";
import Community_Main from "./react/pages/community/Community_Main";
import Community_Coding from "./react/pages/community/Community_Coding";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/study" element={<Study />} />
            <Route path="/study/java" element={<Java_Main />} />
            <Route path="/study/java/01" element={<Java_01 />} />
            <Route path="/study/java/01/01" element={<Java_01_01 />} />
            <Route path="/study/java/01/02" element={<Java_01_02 />} />
            <Route path="/study/java/01/03" element={<Java_01_03 />} />
            <Route path="/study/java/02" element={<Java_02 />} />
            <Route path="/study/java/02/01" element={<Java_02_01 />} />
            <Route path="/study/java/02/02" element={<Java_02_02 />} />
            <Route path="/study/java/02/03" element={<Java_02_03 />} />
            <Route path="/study/java/02/04" element={<Java_02_04 />} />
            <Route path="/study/java/02/05" element={<Java_02_05 />} />
            <Route path="/study/python" element={<Python_Main />} />
            <Route path="/study/python/01" element={<Python_01 />} />
            <Route path="/study/python/01/01" element={<Python_01_01 />} />
            <Route path="/study/c" element={<C_Main />} />
            <Route path="/study/c/01" element={<C_01 />} />
            <Route path="/study/c/01/01" element={<C_01_01 />} />
            <Route path="/study/cplus" element={<CPlus_Main />} />
            <Route path="/study/cplus/01" element={<CPlus_01 />} />
            <Route path="/study/cplus/01/01" element={<CPlus_01_01 />} />
            <Route path="/study/javascript" element={<JavaScript_Main />} />
            <Route path="/study/javascript/01" element={<JavaScript_01 />} />
            <Route
              path="/study/javascript/01/01"
              element={<JavaScript_01_01 />}
            />
            <Route path="/ct_commons" element={<CodingTestCommons />} />
            <Route path="/community" element={<Community_Main />} />
            <Route path="/community/coding" element={<Community_Coding />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
