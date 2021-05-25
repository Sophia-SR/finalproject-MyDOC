import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "../src/Signup.js";

import About from "./About.js";
import Contact from "./Contact.js";
import DoulaCard from "./DoulaCard.js";
import Home from "./Home.js";
import ImageSlider from "./ImageSlider.js";
import Layout from "./Layout.js";
import UseForm from "./Login.js";
import NHSAPIClient from "./NHSApiClient.js";

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Route path="/home" component={NHSAPIClient} />
          <Route path="/signin" component={UseForm} />
          <Route path="/doulas" component={DoulaCard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
