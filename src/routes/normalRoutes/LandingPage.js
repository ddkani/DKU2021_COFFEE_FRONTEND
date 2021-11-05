import React from "react";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const hasLists = true;
  const { isAuthenticated } = useSelector((state) => state.auth);

  const authLink = hasLists ? (
    <h4 style={{ textAlign: "center" }}>찜한 상품 리스트 </h4>
  ) : (
    <h4 style={{ textAlign: "center" }}>찜한 상품이 없습니다.</h4>
  );

  const guestLink = (
    <h4 style={{ textAlign: "center" }}>로그인 후 이용해주세요!</h4>
  );

  return (
    <div id="page_wrap" style={{ textAlign: "center" }}>
      {isAuthenticated ? authLink : guestLink}
    </div>
  );
};

export default LandingPage;
