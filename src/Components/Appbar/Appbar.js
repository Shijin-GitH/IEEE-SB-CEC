import React from "react";
import "./Appbar.css";

import logo1 from "../../../src/assets/images/ieee_logo.png";

function Appbar() {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark mr-2 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-success font-weight-bold" href="/">
          <img src={logo1} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/execom">
                Execom
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="https://www.ieee.org/membership/join/index.html">
                Join IEEE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contacts">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  );
}

export default Appbar;
