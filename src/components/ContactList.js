import React, { useState } from "react";
// import { contacts } from "../contacts";

const ContactList = ({ contacts, onContactSelect }) => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleContactClick = (contact) => {
    onContactSelect(contact);
    setSelectedContactId(contact.id);
  };

  console.log(contacts);

  return (
    <div className="flex-column contact-list">
      <div className="contact-list-header">
        <span>Chat with an expert</span>
      </div>
      {contacts.map((contact) => (
        <div
        key={contact.id}
        className={`flex-row contact ${
          selectedContactId === contact.id ? "active" : ""
        }`}
        onClick={() => handleContactClick(contact)}
      >
        <img className={`contact-picture ${selectedContactId === contact.id ? "active" : ""}`} src={contact.picture} />
        <div className="flex-column contact-details">
          <div className="contact-name">{contact.name}</div>
          <div className="contact-role">{contact.role}</div>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default ContactList;
