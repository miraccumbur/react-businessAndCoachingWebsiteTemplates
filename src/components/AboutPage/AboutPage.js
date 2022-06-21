import React from "react";
import { Link } from "react-router-dom";
import SubscribeArea from "../toolbox/SubscribeArea";
import InfoArea from "../toolbox/InfoArea";

function AboutPage() {
  return (
    <div className="aboutPage">
      <InfoArea
        data={{
          src: "/image/photo1.png",
          alt: "photo1",
          bar: "none",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",1],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",2]
          ],
          title:"Jean Joe - FOUNDER",
          type:"right",
          button:"",
          buttonTo:"/"
        }}
      ></InfoArea>

      <div className="area2">
        <h1>
          Are you ready to transfrom your Marriage and Relationship Book a
          session with us
        </h1>
        <Link to="/">Make an Appointment</Link>
      </div>

      <SubscribeArea></SubscribeArea>
    </div>
  );
}

export default AboutPage;
