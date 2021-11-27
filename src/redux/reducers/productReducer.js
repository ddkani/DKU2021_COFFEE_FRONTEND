import {
  PRODUCT_LOADING_FAILURE,
  PRODUCT_LOADING_REQUEST,
  PRODUCT_LOADING_SUCCESS,
  CATEGORY_LOADING_REQUEST,
  CATEGORY_LOADING_SUCCESS,
  CATEGORY_LOADING_FAILURE,
  PRODUCT_SEARCH_FAILURE,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../types";

const initialState = {
  cList: [],
  pList: [],
  pDetail: [],
  isLoading: false,
  reqResult: null,
  errorMsg: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
        cList: [],
      };

    case PRODUCT_LOADING_REQUEST:
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
        pList: [],
      };

    case PRODUCT_SEARCH_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
        pList: [],
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

    case PRODUCT_SEARCH_SUCCESS:
    case PRODUCT_LOADING_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        pList: [...state.pList, ...action.payload],
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };

    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        pDetail: [action.payload],
        errorMsg: action.payload.error_message,
        reqResult: action.payload.result,
      };
    case PRODUCT_SEARCH_FAILURE:
    case PRODUCT_DETAIL_FAILURE:
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
