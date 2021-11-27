import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
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

// GET NOTIFY
const getNotifyAPI = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  return axios.get("notifies/get_notify", config);
};

function* getNotify(action) {
  try {
    const result = yield call(getNotifyAPI, action.payload);
    yield put({
      type: GET_NOTIFY_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_NOTIFY_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchGetNotify() {
  yield takeEvery(GET_NOTIFY_REQUEST, getNotify);
}

// READ NOTIFY
const readNotifyAPI = (req) => {
  console.log(req, "req");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  return axios.post("notifies/read_notify", req, config);
};

function* readNotify(action) {
  try {
    const result = yield call(readNotifyAPI, action.payload);
    yield put({
      type: READ_NOTIFY_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: READ_NOTIFY_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchReadNotify() {
  yield takeEvery(READ_NOTIFY_REQUEST, readNotify);
}

// REMOVE NOTIFY
const removeNotifyAPI = (req) => {
  console.log(req, "req");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  };
  return axios.post("notifies/remove_product_notify/", req, config);
};

function* removeNotify(action) {
  try {
    const result = yield call(removeNotifyAPI, action.payload);
    yield put({
      type: REMOVE_NOTIFY_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: REMOVE_NOTIFY_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchRemoveNotify() {
  yield takeEvery(REMOVE_NOTIFY_REQUEST, removeNotify);
}

// SET NOTIFY
const setNotifyAPI = (req) => {
  console.log(req, "req");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  };
  return axios.post("notifies/set_product_notify/", req, config);
};

function* setNotify(action) {
  try {
    const result = yield call(setNotifyAPI, action.payload);
    yield put({
      type: SET_NOTIFY_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: SET_NOTIFY_FAILURE,
      payload: e.response,
    });
    console.log(e, "error");
  }
}

function* watchSetNotify() {
  yield takeEvery(SET_NOTIFY_REQUEST, setNotify);
}

export default function* productSaga() {
  yield all([
    fork(watchGetNotify),
    fork(watchReadNotify),
    fork(watchRemoveNotify),
    fork(watchSetNotify),
  ]);
}
