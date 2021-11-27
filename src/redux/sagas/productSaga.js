import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
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

// Products Search
const productsSearchAPI = (param) => {
  return axios.get(`products/search?keyword=${param}`);
};

function* productsSearch(action) {
  try {
    const result = yield call(productsSearchAPI, action.payload);
    console.log(result.data);
    yield put({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PRODUCT_SEARCH_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchProductsSearch() {
  yield takeEvery(PRODUCT_SEARCH_REQUEST, productsSearch);
}

// Product Detail
const productDetailAPI = (id) => {
  return axios.get(`products/${id}`);
};

function* productDetail(action) {
  try {
    const result = yield call(productDetailAPI, action.payload);
    console.log(result.data, "productDetail");
    yield put({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PRODUCT_DETAIL_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchProductDetail() {
  yield takeEvery(PRODUCT_DETAIL_REQUEST, productDetail);
}

export default function* productSaga() {
  yield all([
    fork(watchProductsLoad),
    fork(watchCategoriesLoad),
    fork(watchProductsSearch),
    fork(watchProductDetail),
  ]);
}
