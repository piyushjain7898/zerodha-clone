import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" pt-5" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row px-5">
        <div className="col p-5  ">
          <h3 className="fs-4 mb-3">
            Search for an browse help topics to create a ticket
          </h3>
          <input type="text" placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a style={{ marginLeft: "12px" }} href="">
            Track segment activation
          </a>
          <a style={{ marginLeft: "12px" }} href="">
            Intraday margins
          </a>
          <a style={{ marginLeft: "12px" }} href="">
            Kite user manual
          </a>
        </div>
        <div className="col  p-5 ">
          <h3 className="fs-4">Featured</h3>
          <ol>
            <li style={{ lineHeight: "45px" }}>
              <a href="">Current Takeovers and Delisting - january 2024</a>{" "}
            </li>
            <li>
              <a href="">Track segment activation</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
