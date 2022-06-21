import React, { useEffect, useState } from "react";
import Circles7x10 from "./Circles7x10";
import { useMediaQuery } from "react-responsive";

function PhotoArea({ data }) {
  return (
    <div className="photoArea">
      <div className="circleArea">
        <Circles7x10></Circles7x10>
      </div>
      <img src={data.src} alt={data.alt}></img>
      {data.bar === "bar" ? (
        <div className="resultArea">
          <div className="box">
            <div className="percent">
              <svg className="svgForMobile">
                <circle cx="15" cy="15" r="15"></circle>
                <circle cx="15" cy="15" r="15"></circle>
              </svg>
              <svg className="svgForOther">
                <circle cx="25" cy="25" r="25"></circle>
                <circle cx="25" cy="25" r="25"></circle>
              </svg>

              <div className="number">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
          </div>
          <p>Success Result</p>
        </div>
      ) : null}
    </div>
  );
}

export default PhotoArea;
