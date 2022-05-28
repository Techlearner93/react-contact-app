import React, { useState } from 'react'

export default function Contact(props) {
    const {
        contact,
        onDeleteContact
    } = props

    const [showMore, setShowMore] = useState(false)
    const toogleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div className="contact">
            <h3 onClick={toogleShowMore}>{contact.name}</h3>
            { showMore ? 
                <div className='contact-more'>
                    <p>{contact.phoneNumber}</p>
                    <p>{contact.email}</p>
                    <button onClick={ ()=> onDeleteContact(contact.id)}>Delete</button>
                </div> 
            : ''}
            
        </div>
    )
}