import React from "react";
import InfoArea from "../toolbox/InfoArea";
import { Link } from "react-router-dom";

function PricingPage() {
  return (
    <div className="pricingPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/photo2.png",
            alt: "photo2",
            bar: "bar",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
            ],
            title: "Give your Marriage and Relationship the best.",
            type: "right",
            button: "Get Started",
            buttonTo: "/",
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <h1>Are You Having issues in your Marriage and relationship</h1>
        <p>
          Does any of this suituation discribs you ? Feel Free to Contact Us.
        </p>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <Link to="/">Get Started</Link>
      </div>

      <div className="area3">
        <InfoArea
          data={{
            src: "/image/photo3.png",
            alt: "photo3",
            bar: "none",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
              [
                "Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",
                1,
              ],
              [
                "Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",
                2,
              ],
            ],
            title: "Why I help Relationships & Marriages",
            type: "left",
            button: "",
            buttonTo: "/",
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <h1>My Results has been outstanding</h1>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <Link to="/">Get Started</Link>
      </div>

      <div className="area5">
          <h1>So how much does our services cost ?</h1>
          <div className="priceBar">
            <div>
                <h2>Lite</h2>
                <h3>$2000</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Choose Plan</button>
            </div>
            <div>
                <h2>Basic</h2>
                <h3>$5000</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Choose Plan</button>
            </div>
            <div>
                <h2>Plus</h2>
                <h3>$9000</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Choose Plan</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PricingPage;
