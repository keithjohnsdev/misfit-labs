import React from "react";
import Container from "./Shared/Container";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1 className="header fade-in">
          Here’s to the Misfits,
          <br />
          the troublemakers…
        </h1>
        <p className="hero-desc slide-up" style={{margin: "100px 0 308px"}}>
          <span className="first-line">
            Misfit Labs is a technology venture studio H.Q. in Miami, FL.
          </span>
          <br /> We develop, manage and scale products in partnership with
          entrepreneurs, investors and innovative corporations.
        </p>
      </Container>
    </div>
  );
};

export default Hero;
