import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
import Signup from "./react/pages/signup/signup";
import GlobalStyle from "././react/styles/GlobalStyle";
import Terms from "./react/pages/legal/Terms";
import Privacy from "./react/pages/legal/Privacy";
import About from "./react/pages/about/About";
import Main from "./react/pages/main/main";
import Java_Main from "./react/pages/study/java/Java_Main";
import Java_01_01 from "./react/pages/study/java/Java_01_01";
import Java_01_02 from "./react/pages/study/java/Java_01_02";
import Java_01_03 from "./react/pages/study/java/Java_01_03";
import CodingTestCommons from "./react/pages/codingtest/CodingTestCommon";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/study/java/main" element={<Java_Main />} />
            <Route path="/study/java/01_01" element={<Java_01_01 />} />
            <Route path="/study/java/01_02" element={<Java_01_02 />} />
            <Route path="/study/java/01_03" element={<Java_01_03 />} />
            <Route path="/ct_commons" element={<CodingTestCommons />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
