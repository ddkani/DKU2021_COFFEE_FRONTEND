import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas/index";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// 웹의 모든 상태를 담고있는 초기 값
const initialState = {};

// middleware 추가시 여기에 추가하면 됨.
const middlewares = [sagaMiddleware, routerMiddleware(history)];
// chrome browser에서 개발자 도구를 사용하기 위함
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// 배포 환경(production)에선 개발자도구를 안보이게 해야 함.
const composeEnhancer =
  process.env.NODE_ENV === "production" ? compose : devtools || compose;

const store = createStore(
  //()안에 있는 것들을 포함한 store를 create
  createRootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga); // sagamiddleware를 run.

export default store;
