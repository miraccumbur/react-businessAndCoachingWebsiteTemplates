import React from "react";

function SubscribeArea() {
  return (
    <div className="subscribeArea">
      <h1>Subscribe to our newsletter</h1>
      <p>
        We recommend you to subscribe to our newsletter , drop your email below
        to get daliy update about us
      </p>
      <form>
        <input type="text" placeholder="Enter Your Email Adress"></input>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SubscribeArea;
