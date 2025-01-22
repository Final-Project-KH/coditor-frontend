import axios from "axios";
import AxiosInstance from "./AxiosInstance";
import Common from "../util/Common";

const SPRING_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  login: async (userid, pwd) => {
    const login = {
      userId: userid,
      password: pwd,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/login", login);
  },
  join: async (userid, email, pwd, name, otp) => {
    // requestBody
    const user = {
      userId: userid,
      email: email,
      password: pwd,
      nickname: name,
      otp: otp,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/join", user);
  },
  validate: async (key, data) => {
    // requestParam
    const validate = {
      params: {
        key: key,
        value: data,
      },
    };
    return await axios.post(
      SPRING_DOMAIN + "/auth/join/validate",
      null,
      validate
    );
  },
  verifyemail: async (email) => {
    const verify = {
      params: {
        email: email,
      },
    };
    return await axios.post(SPRING_DOMAIN + "/auth/join/verify", null, verify);
  },
  verifyotp: async (otpnumber, email) => {
    const otp = otpnumber;
    const encodedemail = encodeURIComponent(email);
    return await axios.post(
      SPRING_DOMAIN + `/auth/join/${otp}/${encodedemail}`
    );
  },
  findid: async (email) => {
    const enrolledemail = {
      params: {
        email: email,
      },
    };
    return await axios.post(
      SPRING_DOMAIN + "/auth/forgotid",
      null,
      enrolledemail
    );
  },
  findpw: async (email) => {
    const encodedemail = encodeURIComponent(email);
    return await axios.post(SPRING_DOMAIN + `/auth/forgotpw/${encodedemail}`);
  },
  verifypwsecurity: async (otpnumber, email) => {
    const otp = otpnumber;
    const encodedemail = encodeURIComponent(email);
    return await axios.post(
      SPRING_DOMAIN + `/auth/forgotpw/${otp}/${encodedemail}`
    );
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

  getBoard: async (boardType, page = 1, size = 10) => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/all", {
        params: {
          boardType, // 동적으로 받은 boardType 사용
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error("게시판 불러오기 오류 : ", error);
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  getPost: async (boardId, boardType) => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/one", {
        params: {
          boardId,
          boardType, // 동적으로 받은 boardType 사용
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error("게시글 불러오기 오류 : ", error);
      console.log("axios: ", boardId, boardType);
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함

    }
  },

//   writePost: async (boardType, title, language, content) => {
//     try {
//       const response = await axios.post(
//         SPRING_DOMAIN + "/community/new", // URL
//         { title, language, content }, // POST 요청 본문
//         {
//           params: { boardType }, // 쿼리 파라미터
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNiIsIm5pY2tuYW1lIjoidGVzdHRlc3QiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwiaWF0IjoxNzM3NDU3NzI3LCJleHAiOjE3Mzc0NjEzMjd9.ZiiinPO2coqWdbCvyUkgHnDuKdYm43xoa3og-qaiZy8",
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.error("게시글 작성 중 오류 발생 : ", error);
//       console.log("Request Params:", { boardType });
// console.log("Request Body:", { title, language, content });
//       throw error;
//     }
//   },

  writeCodingPost: async (boardType, title, language, content) => {
    try {
      const response = await axios.post(
        SPRING_DOMAIN + `/community/new/post?boardType=${boardType}`,
        {

          title,
          language,
          content,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNiIsIm5pY2tuYW1lIjoidGVzdHRlc3QiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwiaWF0IjoxNzM3NDU3NzI3LCJleHAiOjE3Mzc0NjEzMjd9.ZiiinPO2coqWdbCvyUkgHnDuKdYm43xoa3og-qaiZy8",
          },
  writePost: async (boardType, title, language, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        { title, language, content }, // POST 요청 본문
        {
          params: { boardType }, // 쿼리 파라미터
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 작성 중 오류 발생 : ", error);
      console.log("Request Params:", { boardType });
      console.log("Request Body:", { title, language, content });
      return error;
    }
  },

  // writeCodingPost: async (boardType, title, language, content) => {
  //   try {
  //     const response = await axios.post(
  //       SPRING_DOMAIN + `/community/new/post?boardType=${boardType}`,
  //       {

  //         title,
  //         language,
  //         content,
  //       },
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNiIsIm5pY2tuYW1lIjoidGVzdHRlc3QiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwiaWF0IjoxNzM3NDU3NzI3LCJleHAiOjE3Mzc0NjEzMjd9.ZiiinPO2coqWdbCvyUkgHnDuKdYm43xoa3og-qaiZy8",
  //         },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("게시글 작성 중 오류 발생 : ", error);
  //     throw error;
  //   }
  // },
};

export default AxiosApi;
