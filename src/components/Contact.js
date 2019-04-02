import React from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
const Contacts = props => (
  <div>
    <ContactList contacts={props.contacts} />
    <AddContact addContact={props.addContact} />
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func
};

export default Contacts;
