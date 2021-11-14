import React from "react";
import "../assets/AppNavBar.css";
import { Link } from "react-router-dom";

const SubCategories = ({ sub_categories }) => {
  return (
    <>
      {Array.isArray(sub_categories)
        ? sub_categories.map(({ code, name }) => {
            return (
              <li key={code} className="collapse__sublink">
                <Link to="#!" className="collapse__sublink">
                  {name}
                </Link>
              </li>
            );
          })
        : null}
    </>
  );
};

export default SubCategories;
