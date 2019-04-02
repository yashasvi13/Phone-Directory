import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [
      {
        name: "",
        phone: ""
      }
    ]
  };
  addContact = contact => {
    contact.id = Math.random();
    let contacts = [...this.state.contacts, contact];
    this.setState({
      contacts: contacts
    });
  };
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
