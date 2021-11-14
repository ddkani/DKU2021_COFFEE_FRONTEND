import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  PRODUCT_LOADING_FAILURE,
  PRODUCT_LOADING_REQUEST,
  PRODUCT_LOADING_SUCCESS,
  CATEGORY_LOADING_REQUEST,
  CATEGORY_LOADING_SUCCESS,
  CATEGORY_LOADING_FAILURE,
} from "../types";

// Categories Load
const categoriesLoadAPI = () => {
  return axios.get("markets/category/");
};

function* categoriesLoad(action) {
  try {
    const result = yield call(categoriesLoadAPI, action.payload);
    yield put({
      type: CATEGORY_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: CATEGORY_LOADING_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchCategoriesLoad() {
  yield takeEvery(CATEGORY_LOADING_REQUEST, categoriesLoad);
}

// Products List Load
const productsLoadAPI = () => {
  return axios.get("products/");
};

function* productsLoad(action) {
  try {
    const result = yield call(productsLoadAPI, action.payload);
    yield put({
      type: PRODUCT_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PRODUCT_LOADING_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchProductsLoad() {
  yield takeEvery(PRODUCT_LOADING_REQUEST, productsLoad);
}

export default function* productSaga() {
  yield all([fork(watchProductsLoad), fork(watchCategoriesLoad)]);
}
