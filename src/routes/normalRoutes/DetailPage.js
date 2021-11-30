import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/DetailPage.css";
import {
  PRODUCT_DETAIL_REQUEST,
  SET_NOTIFY_REQUEST,
  REMOVE_NOTIFY_REQUEST,
  GET_NOTIFIED_PRODUCT_REQUEST,
} from "../../redux/types";

const DetailPage = (req) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_NOTIFIED_PRODUCT_REQUEST });
  }, [dispatch]);
  const { notified_List } = useSelector((state) => state.notify);
  const { pDetail } = useSelector((state) => state.product);
  const id_list = [];

  notified_List &&
    notified_List.map((notified_obj) => id_list.push(notified_obj.product_id));

  useEffect(() => {
    dispatch({
      type: PRODUCT_DETAIL_REQUEST,
      payload: req.match.params.id,
    });
  }, [dispatch, req.match.params.id]);

  const checkId = (id) => {
    return id_list.includes(id);
  };

  const setNotify = (product_id) => {
    product_id = { product_id };
    dispatch({
      type: SET_NOTIFY_REQUEST,
      payload: product_id,
    });
    window.location.replace(`/product/${req.match.params.id}`);
  };

  const removeNotify = (product_id) => {
    product_id = { product_id };
    dispatch({
      type: REMOVE_NOTIFY_REQUEST,
      payload: product_id,
    });
    window.location.replace(`/product/${req.match.params.id}`);
  };

  const alarmBtn = (id) => {
    if (checkId(id)) {
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
      {Array.isArray(pDetail)
        ? pDetail.map(({ id, name, display_image, mall_products }, index) => {
            return (
              <div key={index}>
                <div id="items" className="card_one">
                  <img src={display_image} alt="Product_img" />
                  <div style={{ width: "20rem" }}>
                    <h4 className="productName">{name}</h4>
                    <h5>
                      <a
                        className="no_deco"
                        href={mall_products.auction[0].url}
                      >
                        옥션 최저가 :{mall_products.auction[0].price}원
                      </a>
                      <br />
                      <a
                        className="no_deco"
                        href={mall_products.naver_shopping[0].url}
                      >
                        네이버 최저가 : {mall_products.naver_shopping[0].price}
                        원
                      </a>
                    </h5>
                    {alarmBtn(id)}
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default DetailPage;
