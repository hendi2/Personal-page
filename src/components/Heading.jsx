import React from "react";
import About from "./About";
import Bottom from "./Bottom";
import Portfolios from "./Portfolios";

import cloud from "/public/images/cloud.png";
import mountain from "/public/images/mountain.png";

function Heading() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid fluid">
          <a class="navbar-brand book" href="#">
            M o .
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav navpar">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" path="/Bottom" href="#portfolios">
                Portfolios
              </a>
              <a class="nav-link" href="#about">
                About
              </a>
              <a class="nav-link" href="#bottom">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="top-container">
        <div>
          <img class="top-cloud" src={cloud} alt="cloud" />
        </div>
        <div class="title-text">
          <h1>I'm Mohammed.</h1>
          <h2>
            a <span class="pro">pro</span>grammer.
          </h2>
        </div>
        <div>
          <div>
            <img class="bottom-cloud" src={cloud} alt="cloud" />
          </div>

          <img class="mountain" src={mountain} alt="mountain-img" />
        </div>
      </div>
    </div>
  );
}
export default Heading;
