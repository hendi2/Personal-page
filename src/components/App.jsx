import React from "react";
import "/src/styles.css";
import Heading from "./Heading";
import About from "./About";
import Bottom from "./Bottom";
import Portfolios from "./Portfolios";
 

export default function App() {
  return(
    <div>
  <Heading />
  <About />
  <Portfolios />
  <Bottom />
  </div>
  )
}