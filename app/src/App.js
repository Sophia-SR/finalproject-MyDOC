/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from "react";

import Signup from "../src/Signup.js";

import UseForm from "./Login.js"

import Layout from "./layout.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DoulaCard from "./DoulaCard.js";

import About from "./About.js";

import Contact from "./Contact.js";

import Home from "./Home.js"
import ImageSlider from "./ImageSlider.js";

import NHSAPIClient from "./NHSApiClient.js"


function App() {
  return ( 
  <Router>
   <div> 
  <Layout>
  <Route path="/home"
  component={NHSAPIClient} />
  <Route path="/signin" component={UseForm} />
  <Route path="/doulas" component={DoulaCard} />
  <Route path="/about"
  component={About} />
  <Route path="/contact"
  component={Contact} />
  </Layout>
  </div>
  </Router>
  )
}

export default App;
