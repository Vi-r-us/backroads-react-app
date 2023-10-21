import React from "react";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />
      <Tour />
    </section>
  );
};

export default Tours;
