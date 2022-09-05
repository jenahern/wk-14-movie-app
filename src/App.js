import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import MovieCard from "./components/MovieCard";
import movieList from "./components/movieList";
import Review from "./components/Review";
import StarRating from "./components/Stars";
import ReviewForm from "./components/review-form";



export default class App extends Component {
  render() {
    return (
      <div className="container-fluid-sm m-3">
        <div className="row row-sm">
        
            <MovieCard details={movieList}/>
                {/* <Review /> */}
                {/* <Review addReview={this.addReview} /> */}
            <ReviewForm />
      
    </div>
    </div>
  
  
    );
  }
}


