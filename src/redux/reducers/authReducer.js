import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  USER_LOADING_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: "",
  userEmail: "",
  userName: "",
  errorMsg: "",
  reqResult: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state, // 얕은 복사 이후에 // 변화시키고 싶은 상태 값을 적게된다
        errorMsg: "",
        isLoading: true,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case REGISTER_FAILURE:
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userEmail: null,
        isAuthenticated: false,
        isLoading: false,
        reqResult: false,
        errorMsg: "front-end error",
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userEmail: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: "",
      };

    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        userEmail: action.payload._id,
        userName: action.payload.name,
      };

    case USER_LOADING_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
