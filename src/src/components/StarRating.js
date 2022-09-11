import React, { useState } from "react";

import { BsFillStarFill } from "react-icons/bs";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              className="radio"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <BsFillStarFill
              className="star"
              color={ratingValue <= (hover || rating) ? "#faaf00" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};
export default StarRating;
