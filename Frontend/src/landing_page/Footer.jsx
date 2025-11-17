import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5 pt-5">
        {/* Top section */}
        <div className="row gy-4">
          {/* Logo and copyright */}
          <div className="col-12 col-md-3">
            <img
              src="media/logo.svg"
              alt="logo"
              style={{ width: "55%" }}
              className="mb-3"
            />
            <p className="text-muted" style={{ fontSize: "15px" }}>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company column */}
          <div className="col-6 col-md-3">
            <p className="fw-semibold mb-2">Company</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Products</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Referral programme</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Zerodha.tech</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Press & media</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support column */}
          <div className="col-6 col-md-3">
            <p className="fw-semibold mb-2">Support</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Support portal</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
              <li><a href="#" className="text-decoration-none text-muted">List of charges</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account column */}
          <div className="col-12 col-md-3">
            <p className="fw-semibold mb-2">Account</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Open an account</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li>
              <li><a href="#" className="text-decoration-none text-muted">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom text section */}
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints pertaining to securities broking
            please write to <b>complaints@zerodha.com</b>, for DP related to
            <b> dp@zerodha.com</b>. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on <b>SEBI SCORES:</b> Register on SCORES
            portal. Mandatory details for filing complaints: Name, PAN, Address,
            Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
            redressal of grievances.
          </p>

          <p>
            <b>Smart Online Dispute Resolution | Grievances Redressal Mechanism</b>
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system. 2) Update
            your e-mail and phone number with your broker / DP and receive OTP
            directly from depository. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. <b>NSE broker
            factsheet</b>.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile
            numbers/email IDs with your stock brokers. Receive transaction info
            directly from Exchange via mobile/email daily. KYC is one time when
            dealing in securities markets. If subscribing to an IPO, write the Bank
            account number and sign the IPO application form to authorize payment.
            As a business we don't give stock tips, and have not authorized anyone
            to trade on behalf of others. If you find anyone claiming to be part of
            Zerodha and offering such services, please <b>create a ticket here.</b>"
          </p>

          {/* Bottom links */}
          <div
            className="d-flex flex-wrap gap-3 pb-3 justify-content-center mt-4"
            style={{ fontSize: "13px" }}
          >
            <a href="#" className="text-decoration-none text-muted">NSE</a>
            <a href="#" className="text-decoration-none text-muted">BSE</a>
            <a href="#" className="text-decoration-none text-muted">MCX</a>
            <a href="#" className="text-decoration-none text-muted">Terms & conditions</a>
            <a href="#" className="text-decoration-none text-muted">Policies & procedures</a>
            <a href="#" className="text-decoration-none text-muted">Privacy policy</a>
            <a href="#" className="text-decoration-none text-muted">Disclosure</a>
            <a href="#" className="text-decoration-none text-muted">For investor's attention</a>
            <a href="#" className="text-decoration-none text-muted">Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
