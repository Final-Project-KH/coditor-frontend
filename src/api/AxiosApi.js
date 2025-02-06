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
  uploadprofile: async (formData) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/my/profile/imageupload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  deleteprofile: async () => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/my/profile/imagedelete"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getprofile: async () => {
    return await AxiosInstance.get(SPRING_DOMAIN + "/my/profile");
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

  gettopwriter: async () => {
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/topWriter");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getpopularpost: async () => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/weeklyPopularPost"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getotherpost: async (userId, page, size) => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/list/others/post",
        {
          params: {
            userId,
            page,
            size,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getotherprofile: async (userId) => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/list/others/profile",
        {
          params: {
            userId,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getBoard: async (
    page,
    size,
    boardType,
    sortBy,
    order,
    status,
    enumFilter,
    search
  ) => {
    try {
      if (boardType === "course") {
        status = "";
      }
      console.log("스테이터스 체인지 : ", status);

      const response = await axios.get(SPRING_DOMAIN + "/community/list/all", {
        params: {
          page: page,
          size: size,
          boardType: boardType,
          sortBy: sortBy,
          order: order,
          status: status,
          enumFilter: enumFilter,
          search: search,
        },
      });
      console.log("게시글 테스트 : ", response.data);
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error(
        "게시판 불러오기 오류 : ",

        error.response?.data || error.message
      );
      throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리하도록 함
    }
  },

  getPostCheck: async (boardId) => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/list/one/check",
        {
          params: {
            id: boardId,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  modifyPostStatus: async (boardId, status, boardType) => {
    const boardRequest = {
      boardId,
      status,
    };
    try {
      const response = await AxiosInstance.put(
        SPRING_DOMAIN + "/community/modify/post",
        boardRequest,
        {params: {boardType}}
      );
      console.log("수정 결과 : ", response);
      return response.data;
    } catch (error) {
      console.error("게시글 수정 중 오류 발생 : ", error);
    }
  },

  deletePost: async (boardId) => {
    try {
      const response = await AxiosInstance.delete(
        SPRING_DOMAIN + "/community/delete/post",
        {params: {id: boardId}}
      );
      console.log("게시글 삭제 response : ", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPost: async (boardId) => {
    // 수정 필요 (이제 보드타입 필요 없음)
    try {
      const response = await axios.get(SPRING_DOMAIN + "/community/list/one", {
        params: {
          id: boardId,
        },
      });
      console.log("response: ", response.data);
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
      const response = await axios.get(
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
        {title, language, content}, // POST 요청 본문
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

  modifyCodingPost: async (boardType, boardId, title, language, content) => {
    try {
      const response = await AxiosInstance.put(
        SPRING_DOMAIN + "/community/modify/post",
        {boardId, title, language, content},
        {
          params: {boardType},
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 수정 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeCoursePost: async (boardType, title, course, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, course, content}, // POST 요청 본문
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
  modifyCoursePost: async (boardType, boardId, title, course, content) => {
    try {
      const response = await AxiosInstance.put(
        SPRING_DOMAIN + "/community/modify/post",
        {boardId, title, course, content},
        {
          params: {boardType},
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 수정 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeStudyPost: async (boardType, title, study, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, study, content}, // POST 요청 본문
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

  modifyStudyPost: async (boardType, boardId, title, study, content) => {
    try {
      const response = await AxiosInstance.put(
        SPRING_DOMAIN + "/community/modify/post",
        {boardId, title, study, content},
        {
          params: {boardType},
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 수정 중 오류 발생 : ", error);
      throw error;
    }
  },

  writeTeamPost: async (boardType, title, team, content) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/community/new/post", // URL
        {title, team, content}, // POST 요청 본문
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

  modifyTeamPost: async (boardType, boardId, title, team, content) => {
    try {
      const response = await AxiosInstance.put(
        SPRING_DOMAIN + "/community/modify/post",
        {boardId, title, team, content},
        {
          params: {boardType},
        }
      );
      return response.data;
    } catch (error) {
      console.error("게시글 수정 중 오류 발생 : ", error);
      throw error;
    }
  },

  getReplies: async (boardId, page, size, sortBy, order) => {
    try {
      const response = await axios.get(
        SPRING_DOMAIN + "/community/list/comment",
        {
          params: {
            boardId,
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

  getInactiveBoard: async (
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

  getChallengeDetail: async (questionId, userId) => {
    try {
      let url = `${SPRING_DOMAIN}/api/code-challenge/challenge/${questionId}`;
      const response = await AxiosInstance.get(
        userId === null ? url : url + `?user=${userId}`
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코딩 테스트 정보를 조회하는 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  getChallengeList: async (difficulty, userId) => {
    try {
      let url = `${SPRING_DOMAIN}/api/code-challenge/challenges/${difficulty}`;
      const response = await AxiosInstance.get(
        userId === null ? url : url + `?user=${userId}`
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코딩 테스트 목록을 조회하는 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  submitCode: async ({code, codeLanguage, questionId}) => {
    try {
      // sse 연결 과정에서 Access Token이 만료되지 않도록 재발급
      Common.clearAccessToken();
      const response = await AxiosInstance.post(
        `${SPRING_DOMAIN}/api/code-challenge/submit`,
        {codeLanguage, code, questionId}
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        // 단순 토큰 재발급 이므로
        if (error.response.status === 401) {
          return null;
        }

        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코드 제출 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  executeCode: async (jobId) => {
    try {
      const response = await AxiosInstance.post(
        `${SPRING_DOMAIN}/api/code-challenge/execute`,
        {jobId}
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코드 실행 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  cancelJob: async (jobId) => {
    try {
      const response = await AxiosInstance.post(
        `${SPRING_DOMAIN}/api/code-challenge/cancel`,
        {jobId}
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코드 실행 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  getChallengeSubmissionHistory: async (questionId) => {
    try {
      const response = await AxiosInstance.get(
        `${SPRING_DOMAIN}/api/code-challenge/submission/${questionId}`
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코딩 테스트 제출 기록을 조회하는 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  getChallengeSubmissionHistoryList: async () => {
    try {
      const response = await AxiosInstance.get(
        `${SPRING_DOMAIN}/api/code-challenge/submissions`
      );
      return response.data;
    } catch (error) {
      const data = {};

      if (error.request && !error.response) {
        data["error"] =
          "서버가 응답하지 않습니다. 네트워크 연결 상태를 확인해주세요.";
      } else if (error.response) {
        Object.assign(data, error.response.data);
        if (!data["error"])
          data["error"] =
            "코딩 테스트 제출 기록을 조회하는 과정에서 예기치 못한 문제가 발생하였습니다😭. 문제가 반복될 경우 관리자에게 문의해주세요.";
      }
      return data;
    }
  },

  getmyprofile: async () => {
    try {
      const response = await AxiosInstance.get(SPRING_DOMAIN + "/my/profile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMyPosts: async (
    page = 1,
    size = 10,
    sortBy = "createdAt",
    order = "DESC"
  ) => {
    try {
      const response = await AxiosInstance.get(
        SPRING_DOMAIN + "/my/post/list",
        {
          params: {page, size, sortBy, order},
        }
      );
      return response.data;
    } catch (error) {
      console.error("내 게시글 가져오기 오류 : ", error);
      throw error;
    }
  },

  getMyReportPosts: async (
    page = 1,
    size = 10,
    sortBy = "createdAt",
    order = "DESC",
    status = "INACTIVE"
  ) => {
    try {
      const response = await AxiosInstance.get(
        SPRING_DOMAIN + "/my/report/list",
        {
          params: { page, size, sortBy, order, status },
        }
      );
      return response.data;
    } catch (error) {
      console.error("내 신고 게시글 가져오기 오류 : ", error);
      throw error;
    }
  },

  getMySuggestionPosts: async (
    page = 1,
    size = 10,
    sortBy = "createdAt",
    order = "DESC",
    status = "INACTIVE"
  ) => {
    try {
      const response = await AxiosInstance.get(
        SPRING_DOMAIN + "/my/suggestion/list",
        {
          params: { page, size, sortBy, order, status },
        }
      );
      return response.data;
    } catch (error) {
      console.error("내 건의사항 게시글 가져오기 오류 : ", error);
      throw error;
    }
  },
  
  newReportPost: async (boardId, title, content, report) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/customerService/new/reportPost",
        {boardId, title, content, report}
      );
      return response.data;
    } catch (error) {
      console.error("신고 실패 : ", error);
      throw error;
    }
  },
  newSuggestionPost: async (title, content, suggestion) => {
    try {
      const response = await AxiosInstance.post(
        SPRING_DOMAIN + "/customerService/new/suggestionPost",
        {title, content, suggestion}
      );
      return response.data;
    } catch (error) {
      console.error("건의 실패 : ", error);
      throw error;
    }
  },
};

export default AxiosApi;
