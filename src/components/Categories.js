import React, { useEffect } from "react";
import "../assets/AppNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SubCategories from "./SubCategories";

const Categories = ({ cList }) => {
  useEffect(() => {
    collapse();
  });

  /* COLLAPSE MENU */
  const collapse = () => {
    const linkCollapse = document.getElementsByClassName("collapse__link");

    var i;

    for (i = 0; i < linkCollapse.length; i++) {
      linkCollapse[i].addEventListener("click", function () {
        const collapseMenu = this.nextElementSibling;

        collapseMenu.classList.toggle("showCollapse");

        const rotate = collapseMenu.previousElementSibling;

        rotate.classList.toggle("rotate");
      });
    }
  };

  return (
    <>
      {Array.isArray(cList)
        ? cList.map(({ code, name, sub_categories }) => {
            return (
              <div
                href="#!"
                className="nav__link collapse"
                style={{ display: "grid" }}
                key={code}
              >
                <div className="nav__icon"></div>
                <span className="nav_name">{name}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="collapse__link"
                />
                <ul className="collapse__menu">
                  <SubCategories sub_categories={sub_categories} />
                </ul>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Categories;
