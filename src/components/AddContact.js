import React, { useState } from 'react'

export default function AddContact({ onAddContact }) {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please enter Name')
            return
        }
        if (!phoneNumber) {
            alert('Please enter Phone Number')
            return
        }
        onAddContact({name, phoneNumber, email})
        setName('')
        setPhoneNumber('')
        setEmail('')
    }

    return (
        <form
            className='add-contact-form'
            onSubmit={onSubmit}
        >
            <div className='form-control'>
                <label>Name</label>
                <input 
                    type='text'
                    placeholder='Add Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Phone Number</label>
                <input 
                    type='text'
                    placeholder='Add Phone Number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='text'
                    placeholder='Add Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <input 
                className='btn btn-primary btn-save-contact'
                type='submit' 
                value='Save Contact' />
        </form>
    )
}