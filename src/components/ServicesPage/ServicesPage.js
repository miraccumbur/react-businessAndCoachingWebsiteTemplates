import React from "react";
import { Link } from "react-router-dom";
import CommentArea from "../toolbox/CommentArea";
import InfoArea from "../toolbox/InfoArea";
import SubscribeArea from "../toolbox/SubscribeArea";

function ServicesPage() {
  return (
    <div className="servicesPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/photo3.png",
            alt: "photo3",
            bar: "none",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.",
                0,
              ],
            ],
            title: "We Provide Virtual Coaching services",
            type: "right",
            button:"",
            buttonTo:"/"
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <InfoArea
          data={{
            src: "/image/photo4.png",
            alt: "photo4",
            bar: "none",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.",
                0,
              ],
            ],
            title: "We Provide Post & Pre Marital Coaching",
            type: "left",
            button:"",
            buttonTo:"/"
          }}
        ></InfoArea>
      </div>

      <div className="area3">
          <h1>Are you ready to transfrom your Marriage and Relationship Book a  session with us</h1>
          <Link to="/" >Make an Appointment</Link>
      </div>

      <div className="area4">
          <CommentArea></CommentArea>
      </div>

      <div className="area5">
          <SubscribeArea></SubscribeArea>
      </div>
    </div>
  );
}

export default ServicesPage;
