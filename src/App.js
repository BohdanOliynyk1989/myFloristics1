import React, { Component } from "react";
import "./App.css";
import "./App_media.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Components/Header";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Progects from "./Components/Progects";
import Footer from "./Components/Footer";
import Forms from "./Components/Forms";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <About
          id="about"
        />
        <Progects
          id="progects"
        />
        <Forms />
        <Contacts
          id="contacts"
        />
        <Footer />
      </div>
    );
  }
}

export default App;