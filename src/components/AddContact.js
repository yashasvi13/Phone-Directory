import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      phone: ""
    });
  };
  render() {
    return (
      <div className="cont">
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name={"name"}
            id={"name"}
            value={this.state.name}
            onChange={this.handleChange}
            placeholder={"Enter name"}
          />
          <div>
            <label>Contact No.</label>
            <input
              type="text"
              name={"phone"}
              id={"phone"}
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder={"Enter contact no."}
            />
          </div>
          <button className="center btn" type="submit">
            New Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
