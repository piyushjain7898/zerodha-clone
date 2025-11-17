import React from "react";
function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="media\education.svg" alt="education svg"  style={{width:"80%"}}/>
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-3">Free and open market education</h1>
          <p>
            Varsity the largest online stock market education book in the world covering everyting from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
           <p className="mt-5">
            Trading Q&A, the most active trading and investment community in india for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
