import React from "react";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const hasLists = true;
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const authLink = hasLists ? (
    <h4 style={{ textAlign: "center" }}>찜한 상품 리스트 </h4>
  ) : (
    <h4 style={{ textAlign: "center" }}>찜한 상품이 없습니다.</h4>
  );

  const authLink2 = hasLists ? (
    <h4 style={{ textAlign: "center" }}>찜한 상품이 없습니다.</h4>
  ) : (
    <h4 style={{ textAlign: "center" }}>찜한 상품 리스트 </h4>
  );

  const guestLink = (
    <h4 style={{ textAlign: "center" }}>로그인 후 이용해주세요!</h4>
  );

  return (
    <div id="page_wrap" style={{ textAlign: "center" }}>
      <p>
        로그인 전{isAuthenticated ? authLink : guestLink}
        로그인 시(찜 했을 시){isAuthenticated ? guestLink : authLink}
        로그인 시(찜 안했을 시){isAuthenticated ? guestLink : authLink2}
      </p>
    </div>
  );
};

export default LandingPage;
