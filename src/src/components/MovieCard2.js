import React, { Component } from "react";
import Review from "./Review";

export class Movie extends Component {
  render() {
    return (
      <>
        <div className="card m-4 g-4" key="movie">
          <img
            src={this.props.img}
            id="movie-image"
            className="card-img-top rounded"
            alt="movie-poster"
          ></img>
          <div className="card-body">
            <h4 id="title">{this.props.Title}</h4>
            <p className="card-subtitle" id="about">
              Year: {this.props.Year} <br></br>
              Rated: {this.props.Rating} <br></br>
              Runtime: {this.props.Runtime}
            </p>
            <div className="my-3 mx-2">
              <Review />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
