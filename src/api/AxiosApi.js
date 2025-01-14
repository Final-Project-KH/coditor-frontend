import axios from "axios";
import AxiosInstance from "./AxiosInstance";

const SPRING_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  login: async (userid, pwd) => {
    const login = {
      userId: userid,
      password: pwd,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/login", login);
  },
  signup: async (userid, email, pwd, name) => {
    const user = {
      userId: userid,
      email: email,
      password: pwd,
      nickname: name,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/signup", user);
  },
  // 구글 로그인 추가
  // 구글 로그인
  googleLogin: async (token) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/auth/google/login",
        {
          token: token, // 구글 인증 토큰
        }
      );
      return response;
    } catch (error) {
      console.error(
        "Google login API error: ",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  // 카카오 로그인
  kakaoLogin: async (token) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/auth/kakao/login",
        {
          token: token, // 카카오 인증 토큰
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Kakao login API error: ",
        error.response?.data || error.message
      );
      throw error;
    }
  },
  codingtest: async (code, language, questionid) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/codingtest/result",
        {
          code: code,
          language: language,
          questionid: questionid,
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default AxiosApi;
