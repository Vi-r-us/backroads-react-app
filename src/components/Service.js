import React from "react";
import { services } from "../data";

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) => {
        const { icon, title, text } = service;
        return (
          <article className="service">
            <span className="service-icon">
              <i className={`fas fa-${icon} fa-fw`}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Service;
