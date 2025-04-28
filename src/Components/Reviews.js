import React from 'react';
import './style.css';  // Ensure to import your CSS file

const reviewsData = [
  {
    name: 'John Deo',
    image: 'image/unnamed (5).jpg',
    rating: 5,
  },
  {
    name: 'Jane Doe',
    image: 'image/unnamed (6).jpg',
    rating: 4.5,
  },
  {
    name: 'Alice Smith',
    image: 'image/unnamed (4).jpg',
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">Client's <span>reviews</span></h1>
      <div className="box-container">
        {reviewsData.map((review, index) => (
          <div key={index} className="box">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${i < Math.floor(review.rating) ? '' : 'fa-star-half-alt'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
