import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center border-bottom   p-5 ">
        <h1 className=" mt-4 ">Pricing</h1>
        <h3 className="text-muted fs-5 mb-5 mt-2">
          
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row mt-5 p-3 text-center">
        <div className="col-4">
          <img src="media/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media\other-trades.svg" alt="" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
         Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
           All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
