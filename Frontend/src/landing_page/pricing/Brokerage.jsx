import React from "react";
function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-8 p-5">
          <a href=""><h3 className="text-center fs-4 p-4">Brokerage calculator</h3></a>
          <ul style={{fontSize:"small", lineHeight:"2.4"}} className="text-muted">
            <li>Call & Trade and RMS auto-squareOff:Additional charges of 50 + Gst per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Call & Trade and RMS auto-squareOff:Additional charges of 50 + Gst per order.</li>
            <li>Call & Trade and RMS auto-squareOff:Additional charges of 50 + Gst per order.</li>
            <li>for NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower).</li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <a href=""><h3 className="text-center fs-4 p-4">List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
