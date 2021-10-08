import React from "react";
import { Container } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./normalRoutes/LandingPage";
import AppNavbar from "../components/AppNavbar";
import DetailPage from"./normalRoutes/DetailPage";

const MyRouter = () => {
  return (
    <>
      <AppNavbar />
      <Container id="main-body">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/details" exact component={DetailPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    </>
  );
};

export default MyRouter;
