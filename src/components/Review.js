import React, { Component } from "react";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewList: [],
    };
  }

  addReview = (newReview) => {
    this.setState({ review: this.state.review.concat(newReview) });
  };

  render() {
    return (
      <div>
        {this.props.reviewList.map((review) => (
          <div className="card">
            <div className="card-header bg-dark text-white">{this.newReview.user}</div>
            <div className="card-body">{this.newReview.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
