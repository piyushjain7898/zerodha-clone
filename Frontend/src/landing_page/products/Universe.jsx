import React from "react";

function Universe() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-semibold mb-2">The Zerodha Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row justify-content-center">
        {/* Zerodha Fund House */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "45%" }}
          />
          <p className="text-muted mt-3 small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "50%" }}
          />
          <p className="text-muted mt-3 small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/tijori.svg" alt="Tijori" style={{ width: "35%" }} />
          <p className="text-muted mt-3 small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-3 small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "45%" }}
          />
          <p className="text-muted mt-3 small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-md-4 col-sm-6 mb-5">
          <img
            src="media/ditto-logo.png"
            alt="Ditto"
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-3 small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className=" mb-5 fs-5 p-3 btn btn-primary "
          style={{ width: "20%", margin: "0  auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
