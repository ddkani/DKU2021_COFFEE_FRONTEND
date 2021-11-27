import {
  GET_NOTIFY_FAILURE,
  GET_NOTIFY_SUCCESS,
  GET_NOTIFY_REQUEST,
  READ_NOTIFY_FAILURE,
  READ_NOTIFY_REQUEST,
  READ_NOTIFY_SUCCESS,
  REMOVE_NOTIFY_FAILURE,
  REMOVE_NOTIFY_REQUEST,
  REMOVE_NOTIFY_SUCCESS,
  SET_NOTIFY_FAILURE,
  SET_NOTIFY_REQUEST,
  SET_NOTIFY_SUCCESS,
} from "../types";

const initialState = {
  nList: [],
  isLoading: false,
  reqResult: null,
  errorMsg: "",
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFY_REQUEST:
    case READ_NOTIFY_REQUEST:
    case REMOVE_NOTIFY_REQUEST:
    case SET_NOTIFY_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
      };

    case GET_NOTIFY_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        nList: [...state.pList, ...action.payload],
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case READ_NOTIFY_SUCCESS:
    case REMOVE_NOTIFY_SUCCESS:
    case SET_NOTIFY_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case GET_NOTIFY_FAILURE:
    case READ_NOTIFY_FAILURE:
    case REMOVE_NOTIFY_FAILURE:
    case SET_NOTIFY_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        reqResult: false,
        errorMsg: "front-end error",
      };

    default:
      return state;
  }
};

export default notifyReducer;
