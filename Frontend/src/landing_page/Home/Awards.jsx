import React from "react";


function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="media/largestBroker.svg"
            alt="largest broker"
            className="img-fluid"  // 👈 makes image auto-resize
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-lg-6 col-md-6 col-12 px-4">
          <h1 className="fs-2 fs-md-1">Largest stock broker in India</h1> {/* 👈 font size adjusts */}
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all the
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/pressLogos.png"
            alt="press logo"
            className="img-fluid mt-3"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
