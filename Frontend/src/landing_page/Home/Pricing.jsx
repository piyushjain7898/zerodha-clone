import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-4">Unbeatable pricing</h1>
          <p>
            {" "}
            We pioneered the concept of descount broking and price transparency
            in india . Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row">
            <div className="col p-4 border">
              <h1 className="mb-3  text-center">₹0</h1>
              <p className="text-center">Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col p-4 border">
              <h1 className="mb-3 text-center">₹20</h1>
              <p className="text-center">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
