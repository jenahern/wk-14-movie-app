import React, { Component } from "react";
// import Review from './components/Review';

const MovieCard = (movies) => {
  
  return (
    <>
      {movies.details.map((value, index) => (
       
       <div className="col-4">
              <div className="card m-4 g-4" key={index}>
                <img src={value.img} alt=" " />
                <div className="card-img-top"></div>

                <div className="card-body">
                  <h5 className="card-title">{value.Title}</h5>
                  <p className="card-subtitle">
                    {`Year: ${value.Year}  `}<br></br>
                    {`Rating: ${value.Rating}  `} <br></br>
                    {`Runtime: ${value.Runtime}  `}
                  </p>
                </div>

                <div className="card-footer mt-3">
            {/* <Review/> */}
                </div>
              </div>
              </div>
         
       
      ))}
      
    </>
  );
};

export default MovieCard;
    {/* <Review {...{user: user, content: content}}/> */}