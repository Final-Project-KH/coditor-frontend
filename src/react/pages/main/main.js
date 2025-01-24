import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";
import {Wrap} from "../../styles/main/Main";
import ScrollToTopButton from "../../styles/ScrollToTopButton";
import {setAutoLogin} from "../../../redux/slice/loginSlice";
import {useSelector, useDispatch} from "react-redux";
import {setLoginData, setError} from "../../../redux/slice/authSlice";
import Common from "../../../util/Common";

const Main = () => {
  const isautologin = useSelector((state) => state.login.isautologin);

  useEffect(() => {
    if (isautologin) {
    } else {
    }
  }, []);

  return (
    <Wrap>
      <Carousel />
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Main;
