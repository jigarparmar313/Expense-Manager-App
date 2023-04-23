import React from "react";

const Footer = () => {
  return (
    <div className="g-0">
      {/* <div className="bg-dark text-light p-1">
            <h6 className="text-center p-4">
              All rights reserved &copy; JigsTechnolabs
            </h6>
  </div> */}

      <div className="container-fluid g-0 my-5 ">
        <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://www.facebook.com/ArthInfosoftPvtLtd/"
                role="button"
              >
                <i className="fa fa-facebook-f" />
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com/arthInfoSoft"
                role="button"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="https://www.google.com/search?source=hp&ei=ebpjXbq9K6zZz7sPrIyt4Ag&q=arth+infosoft&oq=arth+i&gs_l=psy-ab.3.0.0j0i10j0l3j0i10j0j0i10l2j0.576.3112..5685...0.0..0.147.704.0j6......0....1..gws-wiz.......0i131.bHVlHxSzrP8"
                role="button"
              >
                <i className="fa fa-google" />
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/arth_infosoft_pvt.ltd/"
                role="button"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/company/arth-infosoft-pvt.-ltd./"
                role="button"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://www.pinterest.com/arthinfosoft/"
                role="button"
              >
                <i className="fa fa-pinterest" />
              </a>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <a
              className="text-white"
              href="/"
              style={{ textDecoration: "none" }}
            >
              &copy; 2023 All rights reserved JigsTechnolabs
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
