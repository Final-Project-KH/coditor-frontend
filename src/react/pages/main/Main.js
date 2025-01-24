import {useState, useEffect, useCallback} from "react";
import {useOutletContext, useNavigate} from "react-router-dom";
import Carousel from "./Carousel";
import {Wrap} from "../../styles/main/Main";
import Main_M from "./Main_M";
import ScrollToTopButton from "../ScrollToTopButton";
import {
  setLoginCondition,
  logoutCondition,
} from "../../../redux/slice/loginSlice";
import {useSelector, useDispatch} from "react-redux";
import Common from "../../../util/Common";
import AxiosApi from "../../../api/AxiosApi";
import {setLoginData, logoutAuth} from "../../../redux/slice/authSlice";

const Main = () => {
  const {isMobile} = useOutletContext();

  const isautologin = useSelector((state) => state.login.autologin);
  const accesstoken = useSelector((state) => state.auth.accesstoken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function autologin() {
    try {
      const resposne = await AxiosApi.autologin();
      return resposne.data;
    } catch (error) {}
  }

  useEffect(() => {
    if (!isautologin) {
      navigate("/");
      return;
    }
    const autoLoginProcess = async () => {
      try {
        let token = accesstoken;
        console.log(token);

        if (!token) {
          token = await Common.refreshAccessToken();
          if (!token) {
            dispatch(logoutAuth());
            dispatch(logoutCondition());
            navigate("/");
            return;
          }
        }
        console.log("자동 로그인 시도...");
        const res = await autologin();
        if (res) {
          console.log("자동 로그인 성공, 유저 데이터 저장");
          const keynumber = Common.getNewUserKeyNumber(token);
          const nickname = Common.getNewNickname(token);

          dispatch(setLoginData({keynumber: keynumber, nickname: nickname}));
        } else {
          console.log("자동 로그인 실패, 로그아웃 처리");
          dispatch(logoutAuth());
          dispatch(logoutCondition());
          navigate("/");
        }
      } catch (error) {
        console.error("자동 로그인 실패:", error);
        dispatch(logoutAuth());
        dispatch(logoutCondition());
        navigate("/");
      }
    };
    autoLoginProcess();
  }, [accesstoken, isautologin]);

  return (
    <>
      {isMobile ? (
        <Main_M /> // 모바일 화면일 경우 MainPage_M 컴포넌트를 렌더링
      ) : (
        <Wrap>
          <Carousel />
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Main;
