import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    contacts: [
      // {
      //   name: "",
      //   phone: ""
      // }
    ]
  };
  addContact = contact => {
    contact.id = Math.random();
    let contacts = [...this.state.contacts, contact];
    this.setState({
      contacts: contacts
    });
  };
  deleteContact = id => {
    let contacts = this.state.contacts.filter(contact => {
      return contact.id !== id;
    });
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
            <h3 className="center ">My Contacts</h3>
            <Contact
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
            <AddContact addContact={this.addContact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
