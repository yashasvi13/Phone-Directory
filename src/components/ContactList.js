import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component {
  constructor() {
    super();
    this.handleChangeFilterName = this.handleChangeFilterName.bind(this);
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired
  };

  state = {
    filterName: ""
  };

  handleChangeFilterName(e) {
    this.setState({
      filterName: e.target.value
    });
  }

  render() {
    const filteredContacts = this.props.contacts.filter(contact => {
      return (
        contact.name
          .toLowerCase()
          .indexOf(this.state.filterName.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <input
          type="text"
          value={this.state.filterName}
          onChange={this.handleChangeFilterName}
          placeholder={"Search Contact"}
        />
        <ul className="list">
          {filteredContacts.map(contact => (
            <li key={contact.phone}>
              <span className={"name"}>{contact.name} </span>

              <span className={"phone"}> {contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
