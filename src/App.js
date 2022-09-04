import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";

import MovieCard from "./components/MovieCard";
import movieList from "./components/movieList";
import Review from "./components/Review";
import StarRating from "./components/Stars";
import SubmitReview from "./components/review-form";


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid-sm m-3">
        <div className="row row-sm">
        
            <MovieCard details={movieList}/>
            <Review />        
            <SubmitReview />
    </div>
    </div>
  
  
    );
  }
}

