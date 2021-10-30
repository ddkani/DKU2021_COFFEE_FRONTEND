import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <hr />
      <a
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "3rem",
          textAlign: "center",
        }}
        href="https://github.com/live2skull/DKU2021_COFFEE_FRONTEND"
      >
        @Github LINK
      </a>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <b>커피두잔</b> 상품 가격 비교 플랫폼
      </div>
    </div>
  );
};

export default Footer;
