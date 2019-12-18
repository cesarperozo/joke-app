import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
