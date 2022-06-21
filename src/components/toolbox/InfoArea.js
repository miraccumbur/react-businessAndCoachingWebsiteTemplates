import React from "react";
import { Link } from "react-router-dom";
import PhotoArea from "../toolbox/PhotoArea";

function InfoArea({ data }) {
  return (
    <div
      className="infoArea"
      style={{
        flexDirection: data.type === "right" ? "column-reverse" : "column",
      }}
    >
      {data.type === "right" ? null : (
        <PhotoArea
          data={{ src: data.src, alt: data.alt, bar: data.bar }}
        ></PhotoArea>
      )}
      <div className="leftArea">
        <h1>{data.title}</h1>
        {data.p.map((currentP) => (
          <p key={currentP[1]}>{currentP[0]}</p>
        ))}
        {data.button !== "" ? (
          <Link to={data.buttonTo}>{data.button}</Link>
        ) : null}
      </div>
      {data.type === "right" ? (
        <PhotoArea
          data={{ src: data.src, alt: data.alt, bar: data.bar }}
        ></PhotoArea>
      ) : null}
    </div>
  );
}

export default InfoArea;
