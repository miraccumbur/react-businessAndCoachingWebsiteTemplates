import React from "react";
import Circles7x10 from "../toolbox/Circles7x10";

function CommentArea() {
  return (
    <div className="commentAreaTool">
      <h1>What our customers say about us</h1>
      <div className="circles1">
        <Circles7x10></Circles7x10>
      </div>
      <div className="circles2">
        <Circles7x10></Circles7x10>
      </div>

      <div className="commentArea">
        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user1.png" alt="user"></img>
              <div>
                <h2>Queen Rita</h2>
                <p>USA</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user2.png" alt="user"></img>
              <div>
                <h2>Gloria Uko</h2>
                <p>Nigeria</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user3.png" alt="user"></img>
              <div>
                <h2>ChiChi</h2>
                <p>South Africa</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentArea;
