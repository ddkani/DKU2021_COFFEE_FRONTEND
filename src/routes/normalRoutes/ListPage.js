import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardOne from "../../components/ProductCardOne";
import { PRODUCT_LOADING_REQUEST } from "../../redux/types";

const ListPage = () => {
  const { pList } = useSelector((state) => state.product);
  console.log(pList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PRODUCT_LOADING_REQUEST });
  }, [dispatch]);

  return (
    <div id="page_wrap">
      <div className="cards" id="items">
        <ProductCardOne pList={pList} />
      </div>
    </div>
  );
};

export default ListPage;
