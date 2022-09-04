import React, { Component } from "react";



export default class Review extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: props.user,
  //     content: props.content
  //   }
  // }

  render() {
    // let reviews = [];
    // if(this.state.reviews){
    //   for(let review of this.state.reviews) {
    //     reviews.push(<Review {...user}{...content}/>);
    //   }
    // }

    
    return (
      
        <div className="card">
          <div className="card-header bg-dark text-white">
            {/* {this.state.user} */}
          </div>
          <div className="card-body">
            {/* {this.state.content} */}
            </div>
        </div>
     
    );
  }
}
