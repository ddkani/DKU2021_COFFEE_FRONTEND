import { all, fork } from "redux-saga/effects";
import axios from "axios";

import authSaga from "./authSaga";

import dotenv from "dotenv";
import productSaga from "./productSaga";

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

// *표시는 generator 함수.
// 일반 함수는 값 하나를 반환하지만, 제너레이터 함수는 여러 값[]을 반환 할 수 있음.
export default function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga)]);
}
