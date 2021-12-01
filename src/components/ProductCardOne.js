import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_NOTIFY_REQUEST,
  SET_NOTIFY_REQUEST,
  GET_NOTIFIED_PRODUCT_REQUEST,
} from "../redux/types";
import { Link } from "react-router-dom";

const ProductCardOne = ({ pList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NOTIFIED_PRODUCT_REQUEST });
  }, [dispatch]);

  const { notified_List } = useSelector((state) => state.notify);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const id_list = [];

  const setNotify = (product_id) => {
    if (!isAuthenticated) {
      alert("로그인 후 이용해주세요 ! ");
    }
    product_id = { product_id };
    dispatch({
      type: SET_NOTIFY_REQUEST,
      payload: product_id,
    });
    window.location.replace("/list");
  };

  const removeNotify = (product_id) => {
    product_id = { product_id };
    dispatch({
      type: REMOVE_NOTIFY_REQUEST,
      payload: product_id,
    });
    window.location.replace("/list");
  };

  const checkId = (id) => {
    notified_List &&
      notified_List.map((notified_obj) =>
        id_list.push(notified_obj.product_id)
      );
    return id_list.includes(id);
  };

  const alarmBtn = (id) => {
    if (isAuthenticated && checkId(id)) {
      return (
        <button
          className="alarmbtn"
          type="button"
          onClick={() => removeNotify(id)}
        >
          🔔❌ 알림해제
        </button>
      );
    } else {
      return (
        <button
          className="alarmbtn"
          type="button"
          onClick={() => setNotify(id)}
        >
          🔔 알람설정
        </button>
      );
    }
  };

  return (
    <>
      {Array.isArray(pList)
        ? pList.map(({ id, name, display_image }) => {
            return (
              <div id="items" className="card_one" key={id}>
                <Link to={`/product/${id}`} className="no_deco" key={id}>
                  <img src={display_image} id="img" alt="Product_img" />
                </Link>
                <div style={{ width: "20rem" }}>
                  <h4>{name}</h4>
                  {alarmBtn(id)}
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ProductCardOne;
