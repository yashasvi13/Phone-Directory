import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <h1 className="center ">My Contacts</h1>
            <AddContact />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
