import React from 'react';
import { ContactForm } from "./ContactForm";
import { ContactsList } from "./ContactList";

export const App = () => {

  return(
  <div>
    <h1>Meteor Wallet!</h1>
    <ContactForm/>
    <ContactsList/>
  </div>
)};
