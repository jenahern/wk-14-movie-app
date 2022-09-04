import React, { Component } from "react";
// import formData from "./form-input";
import StarRating from "./Stars";

export default class SubmitReview extends Component {
  constructor(props){
    super(props);}
    
  //   this.state ={
  //     user: null,
  //     content: "content here",
  //   };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  render() {
    return (
      <div className="container-fluid my-2">
        <h4>Add Movie Review</h4>
        <div className="form">
          <div className="col mb-2">
            <input
              type="text"
              //   onChange={handleChange}
              //   value={this.state.user}
              name="user"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="col mb-2">
            <textarea
              //   onChange={handleChange}
              //   value={this.state.content}
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
            type="submit"
            // onClick={handleSubmit}
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

