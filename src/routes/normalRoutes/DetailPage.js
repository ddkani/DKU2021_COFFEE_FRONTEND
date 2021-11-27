import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/DetailPage.css";
import { PRODUCT_DETAIL_REQUEST } from "../../redux/types";

const DetailPage = (req) => {
  const dispatch = useDispatch();
  const { pDetail } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch({
      type: PRODUCT_DETAIL_REQUEST,
      payload: req.match.params.id,
    });
  }, [dispatch, req.match.params.id]);

  return (
    <>
      {Array.isArray(pDetail)
        ? pDetail.map(({ name, display_image, mall_products }, index) => {
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
                        옥션 최저가
                      </a>
                      <br />
                      <a
                        className="no_deco"
                        href={mall_products.naver_shopping[0].url}
                      >
                        네이버 최저가
                      </a>
                    </h5>
                    <button className="alarmbtn" type="button">
                      🔔 알람설정
                    </button>
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
