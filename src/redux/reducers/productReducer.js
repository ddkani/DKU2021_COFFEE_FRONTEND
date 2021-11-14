import {
  PRODUCT_LOADING_FAILURE,
  PRODUCT_LOADING_REQUEST,
  PRODUCT_LOADING_SUCCESS,
  CATEGORY_LOADING_REQUEST,
  CATEGORY_LOADING_SUCCESS,
  CATEGORY_LOADING_FAILURE,
} from "../types";

const initialState = {
  cList: [],
  pList: [],
  isLoading: false,
  reqResult: null,
  errorMsg: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING_REQUEST:
    case PRODUCT_LOADING_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
      };

    case CATEGORY_LOADING_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        cList: [...state.cList, ...action.payload],
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case PRODUCT_LOADING_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        pList: [...state.pList, ...action.payload],
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case CATEGORY_LOADING_FAILURE:
    case PRODUCT_LOADING_FAILURE:
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

export default productReducer;
