import React, { Component } from "react";
import StarRating from "./Stars";
import Review from "./Review";

export default class ReviewForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      userValue: "",
      contentValue: ""
    }
  }

  // function needs to keep btn from clearing app
  // add Review user and content value to newReview
  // clear form for next entry
  onSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state.userValue);
    this.props.addReview(this.state.contentValue);
    const emptyInput = {userValue:'', contentValue: ''}
  }

  handleChange = (event) => {
    // sets piece of State to text box input
    this.setState({userValue: event.target.value});
  }

  render() {
    return (
      <div className="container-fluid my-2">
        <h4>Add Movie Review</h4>
        <div className="form">
          <div className="col mb-2">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.userValue}
              name="user"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="col mb-2">
            <textarea
              // onChange={this.handleChange}
              // value={this.state.contentValue}
              name="content"
              className="form-control"
              placeholder="Your Review"
            />
          </div>
          {/* <div className="col mb-2">
          <StarRating />
            <input
              type={StarRating}
            //   onChange={handleChange}
            //   value={this.state.star}
            //   name="{StarRating}"
            //   className="form-control"
            //   placeholder=" Star Rating"
            />
          </div> */}
          <div className="col my-2">
          <button
            type="button"
            onClick= {this.onSubmit}
            className="btn btn-primary"
          >
            Add Review
          </button>
          </div>
        </div>
      </div>
    );
  }
}

