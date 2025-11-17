import React from "react";

function Stats() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 p-4 text-center text-lg-start">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments
          </p>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments
          </p>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments
          </p>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments
          </p>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="media/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%", height: "auto" }}
          />

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              Try Kite demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
