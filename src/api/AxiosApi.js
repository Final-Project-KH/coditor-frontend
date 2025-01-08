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
  googleLogin: async (token) => {
    try {
      // 서버로 JSON 데이터를 전송
      const response = await AxiosInstance.post(
          SPRING_DOMAIN + "/auth/google",
          {
            token: token,
          }
      );

      // 서버로부터 정상 응답 받음
      return response;
    } catch (error) {
      console.error(
          "Google login API error: ",
          error.response?.data || error.message
      );
      throw error; // 에러 발생 시 호출한 쪽에서 처리하도록 예외를 던짐
    }
  },
};

export default AxiosApi;
