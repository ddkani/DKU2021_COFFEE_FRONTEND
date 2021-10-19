import React, { useEffect } from "react";
import "../assets/AppNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faUser,
  faSignInAlt,
  faSignOutAlt,
  faChevronDown,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const AppNavbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

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
  const collapse = () => {
    const linkCollapse = document.getElementsByClassName("collapse__link");
    var i;

    for (i = 0; i < linkCollapse.length; i++) {
      linkCollapse[i].addEventListener("click", function () {
        const collapseMenu = this.nextElementSibling;
        console.log("collapseMenu= ", collapseMenu);
        collapseMenu.classList.toggle("showCollapse");

        const rotate = collapseMenu.previousElementSibling;
        console.log("rotate: ", rotate);
        rotate.classList.toggle("rotate");
      });
    }
  };

  const authLink = (
    <>
      <a href="#!">
        <FontAwesomeIcon icon={faBell} className="header__icon" />
      </a>
      <a href="/mypage">
        <FontAwesomeIcon icon={faUser} className="header__icon" />
      </a>
      <a href="/logout">
        <FontAwesomeIcon icon={faSignOutAlt} className="header__icon" />
      </a>
    </>
  );

  const guestLink = (
    <>
      <a href="#!">
        <FontAwesomeIcon icon={faBell} className="header__icon" />
      </a>
      <a href="/login">
        <FontAwesomeIcon icon={faSignInAlt} className="header__icon" />
      </a>
      <a href="/signup">
        <FontAwesomeIcon icon={faUserPlus} className="header__icon" />
      </a>
    </>
  );

  useEffect(() => {
    showMenu("nav-toggle", "navbar");
    linkColor();
    collapse();
  }, []);

  return (
    <div id="root">
      {/* <!-- Header(상단 바) --> */}
      <header className="header">
        <div className="header__container">
          {/* <!-- 로고 --> */}
          <a href="/" className="header__logo">
            커피두잔
          </a>

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
              <div
                href="#!"
                className="nav__link collapse"
                style={{ display: "grid" }}
              >
                <div className="nav__icon"></div>
                {/* <ion-icon name="home-outline" className="nav__icon"></ion-icon> */}
                {/* <FontAwesomeIcon icon={faHome} className="nav__icon" /> */}
                <span className="nav_name">생활</span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="collapse__link"
                />
                {/* <ion-icon
                  name="chevron-down-outline"
                  className="collapse__link"
                ></ion-icon> */}

                <ul className="collapse__menu">
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      1
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      2
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      3
                    </a>
                  </li>
                </ul>
              </div>

              <div
                href="#!"
                className="nav__link collapse"
                style={{ display: "grid" }}
              >
                <div className="nav__icon"></div>

                <span className="nav_name">전자제품</span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="collapse__link"
                />

                <ul className="collapse__menu">
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      1
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      2
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      3
                    </a>
                  </li>
                </ul>
              </div>

              <div
                href="#!"
                className="nav__link collapse"
                style={{ display: "grid" }}
              >
                <div className="nav__icon"></div>

                <span className="nav_name">음식</span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="collapse__link"
                />

                <ul className="collapse__menu">
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      1
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      2
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      3
                    </a>
                  </li>
                </ul>
              </div>

              <div
                href="#!"
                className="nav__link collapse"
                style={{ display: "grid" }}
              >
                <div className="nav__icon"></div>

                <span className="nav_name">패션</span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="collapse__link"
                />

                <ul className="collapse__menu">
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      1
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      2
                    </a>
                  </li>
                  <li className="collapse__sublink">
                    <a href="#!" className="collapse__sublink">
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AppNavbar;
