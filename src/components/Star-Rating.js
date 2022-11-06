import React, { useState } from "react";

//  Got this whole thing from some website. Am I supposed to know how to do this or know what
//   ANY of this means?  How do I store this data and post it?  So the star rating is on the 
//   page, but it's not truly functional.

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}   
      </div>
    );
  };

export default StarRating;