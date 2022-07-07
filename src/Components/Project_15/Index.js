import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  withRouter
} from "react-router-dom";




//import pages

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import "./index.css";

//import componentes

import Navbar from "./components/Navbar";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Index
