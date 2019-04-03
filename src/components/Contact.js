import React from "react";

const Contact = ({ contacts, deleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map(contact => {
        return (
          <div className="contact" key={contact.id}>
            <p>
              <div>Name: {contact.name}</div>
              <div>Phone: {contact.phone}</div>

              <button
                className="btn center"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete Contact
              </button>
            </p>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
