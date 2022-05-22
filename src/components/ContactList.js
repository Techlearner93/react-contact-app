import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
    const {
        contacts,
        onDeleteContact
    } = props

     

    return (
        <div className="contact-list">
            <div>
                {contacts.map((contact) => (
                    <Contact 
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
            </div>
        </div>
    )
}