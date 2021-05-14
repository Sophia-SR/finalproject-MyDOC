/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from "react";

import Signup from "../src/Signup.js";

import UseForm from "../src/useForm.js"

import Layout from "./Layout/layout.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DoulaCard from "./DoulaCard.js";

import About from "./About.js";

import Contact from "./Contact.js";

function App() {
  return ( 
  <Router>
   <div> 
  <Layout>
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
