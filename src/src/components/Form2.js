import React, { Component } from "react";
import StarRating from './StarRating';
import Review from './Review';

export class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      content: "",
      starRating: (0)
    };
    console.log(this.state);
  }

  onChange = (event) => {
    // Sets our piece of state to whatever is currently in the textbox
    console.log("onChange:", event.target.value);
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event being fired");

    this.props.addReview(
      this.state.user,
      this.state.content,
      this.state.starRating
    );
    this.setState({
      userValue: "",
      contentValue: "",
      starRatingValue: (0)
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="container" id="review-form" key='review-form'>

          <div className='my-3' name="starRating" onChange={this.onChange}>
            <StarRating
              onSubmit={this.onSubmit}
              value={this.props.ratingValue} 
            />
          </div>

          <input
            type="text"
            value={this.state.userValue}
            onChange={this.onChange}
            name="user"
            placeholder="User Name"
            className="col mb-2"
          />
          <textarea
            type="text"
            value={this.state.contentValue}
            onChange={this.onChange}
            name="content"
            placeholder="Your Review"
            className="form-control col mb-2"
            id="review-form"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="col mb-2 btn btn-primary"
            onClick={this.onSubmit}>Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
