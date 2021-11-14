import React from "react";

const ProductCardOne = ({ pList }) => {
  return (
    <>
      {Array.isArray(pList)
        ? pList.map(({ id, name, display_image }) => {
            return (
              <div href="#!" id="items" className="card_one" key={id}>
                <img src={display_image} alt="Product_img" />

                <div style={{ width: "20rem" }}>
                  <ul>
                    <li>{name}</li>
                    <li>price</li>
                    <li>shops</li>
                  </ul>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ProductCardOne;
