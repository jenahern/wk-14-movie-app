import React, { Component } from "react";
import Review from "./Review";
import StarRating from "./StarRating";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      content: props.content,
      rating: props.rating,
    };
  }

  render() {
    let reviews = [];
    let index = 0;
    // console.log('review list render function');
    if (this.state.reviews) {
      // console.log('review list if statement');
      for (let Review of this.state.reviews) {
        index++;
        reviews.push(<ReviewList key={index} {...Review} />);
      }
    }

    return (
      <div className="card-footer border-light mt-3" key="review-list">
        <h4>The Force is with your Reviews</h4>
        {this.props.reviewList.map((Review) => (
          <div className="col my-2 border">
            <div className="text-bg-secondary">
              {Review.user}
            </div>
            <div className="col mb-3">
              <StarRating {...Review.rating}/>
              {Review.content}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
