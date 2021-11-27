import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_NOTIFY_REQUEST, SET_NOTIFY_REQUEST } from "../redux/types";
import { Link, useHistory } from "react-router-dom";

const ProductCardOne = ({ pList }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const setNotify = (product_id) => {
    const pid = product_id;
    product_id = { product_id };
    dispatch({
      type: SET_NOTIFY_REQUEST,
      payload: product_id,
    });
    localStorage.setItem(`p${pid}`, pid);
    history.push("/list");
  };

  const removeNotify = (product_id) => {
    const pid = product_id;
    product_id = { product_id };
    dispatch({
      type: REMOVE_NOTIFY_REQUEST,
      payload: product_id,
    });
    localStorage.removeItem(`p${pid}`);
    history.push("/list");
  };

  const alarmBtn = (product_id) => {
    const pId = localStorage.getItem(`p${product_id}`);

    if (Number(pId) === product_id) {
      return (
        <button
          className="alarmbtn"
          type="button"
          onClick={() => removeNotify(product_id)}
        >
          🔔❌ 알림해제
        </button>
      );
    } else {
      return (
        <button
          className="alarmbtn"
          type="button"
          onClick={() => setNotify(product_id)}
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
                  <img src={display_image} alt="Product_img" />
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
