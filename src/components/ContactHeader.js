import React from 'react'
import Button from './Button'

export default function ContactHeader(props) {
    const {
        title,
        onClickAddContact,
        showAddContact
    } = props

    return (
        <div className="contact-header">
            <h1>{title}</h1>
            <Button 
                className="btn btn-primary btn-contact-addcontact"
                color='black'
                text={ showAddContact ? 'Close' : 'Add Contact'}
                onClick={onClickAddContact}
            />
        </div>
    )
}
