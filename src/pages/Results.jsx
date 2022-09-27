import React, { useState, useEffect } from "react";
import "../styles/Results.css";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const { orderedCats } = location.state;

  return (
    <div className="container">
      <a className="button" href="/">
        Rank again
      </a>
      <div className="gallery">
        {orderedCats &&
          orderedCats.reverse().map((cat, i) => (
            <div className="combo" key={i}>
              <img
                src={cat.url}
                alt="Cat"
                height={80}
                width={80}
                className="catImage"
              />
              <div> Number {i + 1} </div>
            </div>
          ))}
      </div>
    </div>
  );
}
