import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history), // reducer를 만들 때마다 아래 적으면 combine
    auth: authReducer,
    product: productReducer,
  });

export default createRootReducer;
