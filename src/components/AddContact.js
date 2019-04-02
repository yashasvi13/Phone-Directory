import React, { Component } from "react";
import PropTypes from "prop-types";

class AddContact extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static = {
    onSubmit: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
      <div>
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
              placeholder={"Enter phone no"}
            />
          </div>
          <button className="center btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
