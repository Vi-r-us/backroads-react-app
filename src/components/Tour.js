import React from "react";
import { tours } from "../data";

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => {
        return (
          <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt={tour.tourTitle} />
              <p className="tour-date">{tour.tourDate}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.tourTitle}</h4>
              </div>
              <p>{tour.tourDescription}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {tour.tourCountry}
                </p>
                <p>{tour.tourDays}</p>
                <p>{tour.tourPrice}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
