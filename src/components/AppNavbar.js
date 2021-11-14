import React, { useCallback, useEffect } from "react";
import "../assets/AppNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faUser,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY_LOADING_REQUEST, LOGOUT_REQUEST } from "../redux/types";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const { cList } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch({ type: CATEGORY_LOADING_REQUEST });
    showMenu("nav-toggle", "navbar");
    linkColor();
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  /* EXPANDER MENU */
  const showMenu = (toggleId, navbarId) => {
    const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId);

    if (toggle && navbar) {
      toggle.addEventListener("click", () => {
        navbar.classList.toggle("expander");
      });
    }
  };

  /* LINK ACTIVE */
  const linkColor = () => {
    const linkColor = document.querySelectorAll(".nav__link");
    function colorLink() {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  };

  /* COLLAPSE MENU */
  // const collapse = () => {
  //   const linkCollapse = document.getElementsByClassName("collapse__link");
  //   console.log(linkCollapse);
  //   var i;

  //   for (i = 0; i < linkCollapse.length; i++) {
  //     linkCollapse[i].addEventListener("click", function () {
  //       const collapseMenu = this.nextElementSibling;
  //       console.log("collapseMenu= ", collapseMenu);
  //       collapseMenu.classList.toggle("showCollapse");

  //       const rotate = collapseMenu.previousElementSibling;
  //       console.log("rotate: ", rotate);
  //       rotate.classList.toggle("rotate");
  //     });
  //   }
  // };

  const authLink = (
    <>
      <Link to="#!">
        <FontAwesomeIcon icon={faBell} className="header__icon" />
      </Link>
      <Link to="/mypage">
        <FontAwesomeIcon icon={faUser} className="header__icon" />
      </Link>
      <a href="#!" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="header__icon" />
      </a>
    </>
  );

  const guestLink = (
    <>
      {/* <Link to="#!">
        <FontAwesomeIcon icon={faBell} className="header__icon" />
      </Link> */}
      <a href="/login">
        <FontAwesomeIcon icon={faSignInAlt} className="header__icon" />
      </a>
      <a href="/signup">
        <FontAwesomeIcon icon={faUserPlus} className="header__icon" />
      </a>
    </>
  );

  return (
    <>
      {/* <!-- Header(상단 바) --> */}
      <header className="header">
        <div className="header__container">
          {/* <!-- 로고 --> */}
          <Link to="/" className="header__logo">
            커피두잔
          </Link>

          {/* <!-- 검색창 --> */}
          <div className="header__search">
            <input
              type="search"
              placeholder="Search"
              className="header__input"
            />
            <button className="search__btn" type="submit" name="click" value="">
              <FontAwesomeIcon icon={faSearch} className="search__icon" />
            </button>
          </div>

          {/* <!-- 메뉴 아이콘 --> */}
          <div>{isAuthenticated ? authLink : guestLink}</div>
          {/* <div>{isAuthenticated ? guestLink : authLink}</div> */}
        </div>
      </header>

      {/* <!-- Nav(카테고리 네비게이션)--> */}
      <div className="nav__container" id="navbar">
        <nav className="nav">
          <div>
            <div className="nav__brand" id="nav-toggle">
              <FontAwesomeIcon
                icon={faBars}
                className="nav__toggle"
                id="nav-toggle"
              />
              <span className="nav__logo">Categories</span>
            </div>

            {/* <!-- 카테고리 --> */}
            <div className="nav__list">
              <Link to="/list" style={{ textDecoration: "none" }}>
                <div
                  href="#!"
                  className="nav__link collapse"
                  style={{ display: "grid" }}
                >
                  <div className="nav__icon"></div>
                  <span className="nav_name" style={{ fontSize: "1.2rem" }}>
                    모든 상품 보기
                  </span>
                </div>
              </Link>
              <Categories cList={cList} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AppNavbar;
