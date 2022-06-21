import React from "react";
import InfoArea from "../toolbox/InfoArea";
import { Link } from "react-router-dom";

function WebniarPage() {
  return (
    <div className="webniarPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/photo1.png",
            alt: "photo1",
            bar: "bar",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
            ],
            title: "Don't miss this amazing webinar!",
            type: "right",
            button: "Reserve Your Spot",
            buttonTo: "/",
          }}
        ></InfoArea>
      </div>
      <div className="area2">
        <h1>More Reasons To Join My Webinar</h1>
        <div className="webniarInfoRow">
          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="webniarInfoRow">
          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <Link to="/">Reserve Your Spot</Link>
      </div>

      <div className="area3">
        <div>
          <div>
            <div>
              <img src="/icon/calendar.png" alt="calender"></img>
              <h2>Date</h2>
              <p>November 12th</p>
            </div>
            <div>
              <img src="/icon/time.png" alt="time"></img>
              <h2>Time</h2>
              <p>10 am GMT+1</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/icon/mic.png" alt="mic"></img>
              <h2>Duration</h2>
              <p>2 Hours</p>
            </div>
            <div>
              <img src="/icon/price.png" alt="price"></img>
              <h2>Price</h2>
              <p>Free</p>
            </div>
          </div>
        </div>

        <Link to="/">Reserve Your Spot</Link>
      </div>
    </div>
  );
}

export default WebniarPage;
