import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList2";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid-md m-3">
        <h3>Every Movie is the Best... From a Certain Point of View</h3>
        <MovieList />
      </div>
    );
  }
}
