import React from "react";
import {ContactCollection} from "../api/ContactCollection";
import {useTracker} from "meteor/react-meteor-data"

export const ContactsList = () => {
	const contacts = useTracker(() => {
		return ContactCollection.find({}).fetch()
	})
  return(
		<>
			<h2>Contacts List</h2>
			{contacts.map((contact) => (
				<li key={contact._id}>{contact.name} - {contact.email}</li>
			))}
		</>
  )
}
