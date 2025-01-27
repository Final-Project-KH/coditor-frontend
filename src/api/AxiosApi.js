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
    return await axios.post(SPRING_DOMAIN + "/auth/login", login, {
      withCredentials: true,
    });
  },
  autologin: async () => {
    return await AxiosInstance.post(
      SPRING_DOMAIN + "/auth/autologin",
      {},
      {withCredentials: true}
    );
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
  validatenewpassword: async (email, newpassword) => {
    // requestParam
    const validate = {
      params: {
        email: email,
        newpassword: newpassword,
      },
    };
    return await axios.post(
      SPRING_DOMAIN + "/auth/forgotpw/validate",
      null,
      validate
    );
  },
  resetpassword: async (email, newpassword) => {
    const encodedemail = encodeURIComponent(email);
    const reset = {
      params: {
        newPw: newpassword,
      },
    };
    return await axios.put(
      SPRING_DOMAIN + `/auth/resetpw/${encodedemail}`,
      null,
      reset
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

  getBoard: async (
    boardType,
    page = 1,
    size = 10,
    sortBy = "createdAt",
    order = "DESC"
  ) => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/all", {
        params: {
          boardType,
          page,
          size,
          sortBy,
          order,
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error(
        "게시판 불러오기 오류 : ",

        error.response?.data || error.message
      );
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  getPost: async (boardId, boardType) => {
    // 수정 필요 (이제 보드타입 필요 없음)
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/one", {
        params: {
          id: boardId,
          boardType, // 동적으로 받은 boardType 사용
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error("게시글 불러오기 오류 : ", error);
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },
  boardreactionstatus: async (boardNum, userKey) => {
    const data = {
      params: {
        boardId: boardNum,
        userId: userKey,
      },
    };
    try {
      const response = await AxiosInstance.get(
        SPRING_DOMAIN + "/community/reaction/status",
        data
      );
      return response.data;
    } catch (error) {
      console.error("게시글 reaction 상태 불러오기 실패 : ", error);
      throw error;
    }
  },

  boardreaction: async (boardNum, userKey, reaction) => {
    const data = {
      params: {
        boardId: boardNum,
        userId: userKey,
        reaction: reaction,
      },
    };
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/reaction/voting",
        null,
        data
      );
      return response.data;
    } catch (error) {
      console.error("게시글 반응 실패 :", error);
      throw error;
    }
  },

  writeCodingPost: async (boardType, title, language, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, language: [language], content}, // POST 요청 본문
        {
          params: {boardType}, // 쿼리 파라미터
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 작성 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeCoursePost: async (boardType, title, course, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, coures: [course], content}, // POST 요청 본문
        {
          params: {boardType}, // 쿼리 파라미터
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 작성 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeStudyPost: async (boardType, title, study, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, study: [study], content}, // POST 요청 본문
        {
          params: {boardType}, // 쿼리 파라미터
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 작성 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeTeamPost: async (boardType, title, team, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, team: [team], content}, // POST 요청 본문
        {
          params: {boardType}, // 쿼리 파라미터
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 작성 중 오류 발생 : ", error);
      console.log("Request Params:", {boardType});
      console.log("Request Body:", {title, team, content});
      throw error;
    }
  },

  getReplies: async (
    page = 1,
    size = 10,
    sortBy = "createdAt",
    order = "DESC"
  ) => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/list/comment",
        {
          params: {
            page,
            size,
            sortBy,
            order,
          },
        }
      );
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error(
        "댓글 불러오기 오류 : ",
        error.response?.data || error.message
      );
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  writeReply: async (boardId, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/add/comment", // URL
        {boardId, content} // POST 요청 본문
      );
      return response.data;
    } catch (error) {
      console.error("댓글 작성 중 오류 발생 : ", error);
      throw error;
    }
  },

  getActiveBoard: async (
    boardType,
    page = 1,
    size = 10,
    sortBy = "active",
    order = "DESC"
  ) => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/all", {
        params: {
          boardType,
          page,
          size,
          sortBy,
          order,
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error(
        "게시판 불러오기 오류 : ",
        error.response?.data || error.message
      );
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  getInctiveBoard: async (
    boardType,
    page = 1,
    size = 10,
    sortBy = "inactive",
    order = "DESC"
  ) => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/all", {
        params: {
          boardType,
          page,
          size,
          sortBy,
          order,
        },
      });
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error(
        "게시판 불러오기 오류 : ",
        error.response?.data || error.message
      );
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  submitCode: async ({code, codeLanguage, questionId}) => {
    try {
      const response = await AxiosInstance.post(
        `${SPRING_DOMAIN}/api/code-challenge/submit`,
        {codeLanguage, code, questionId}
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코드 제출 과정에서 문제가 발생하였습니다. 문제가 반복될 경우 관리자에게 문의바랍니다.";
      } else {
        data["error"] = "알 수 없는 문제가 발생했습니다";
        console.error(error.message);
      }
      return data;
    }
  },

  executeCode: async (jobId) => {
    try {
      const response = await AxiosInstance.get(
        `${SPRING_DOMAIN}/api/code-challenge/execute?jobid=${jobId}`
      );
    } catch (error) {
      alert("실행 실패");
      console.log(error);
    }
  },
};

export default AxiosApi;
