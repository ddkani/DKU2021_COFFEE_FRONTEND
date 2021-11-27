import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./normalRoutes/LandingPage";
import AppNavbar from "../components/AppNavbar";
import DetailPage from "./normalRoutes/DetailPage";
import LoginPage from "./normalRoutes/LoginPage";
import SignupPage from "./normalRoutes/SignupPage";
import ListPage from "./normalRoutes/ListPage";

const MyRouter = () => {
  return (
    <>
      <AppNavbar />
      <div id="main-body">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/product/:id" exact component={DetailPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/list" exact component={ListPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </>
  );
};

export default MyRouter;
