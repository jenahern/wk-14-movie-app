import React, { Component } from "react";
import StarRating from "./StarRating";
import ReviewForm from "./Form2";
import ReviewList from "./ReviewList";


export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewList: [
        {
          id: 0,
          user: "Jane Doe",
          content: "Ep4 is amazing!",
          rating: 5,
        },
      ],
    };
  }

  addReview = (newUser, newContent, newRating) => {
    const newReview = {
      id: this.state.reviewList[this.state.reviewList.length - 1].id + 1, //hack needed to update
      user: newUser,
      content: newContent,
      rating: newRating,
    };
    console.log("this is a new review", newReview);

    this.setState({ reviewList: this.state.reviewList.concat(newReview) });
  };

  render() {
    return (
      <>
        <div className="row border" key="review">
          <h5 className="mt-3">Search Your Feelings</h5>
          <br></br>
          <ReviewForm
            addReview={this.addReview}
            reviewList={this.state.reviewList}
          />
          {/* {console.log(this.addReview)} */}
          <ReviewList reviewList={this.state.reviewList} />
          {console.log(this.state.reviewList)}
        </div>
      </>
    );
  }
}
