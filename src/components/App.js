import React, { useState } from 'react'
import '../css/app.css'
import ContactList from './ContactList'
import ContactHeader from './ContactHeader'
import AddContact from './AddContact'


function App() {

  const [showAddContact, setShowAddContact] = useState(false)

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Naruto',
      phoneNumber: '111-111-111',
      email: 'naruto@gmail.com'
    },
    {
      id: 2,
      name: 'Sakura',
      phoneNumber: '222-222-222',
      email: 'sakura@gmail.com'
    },
    {
      id: 3,
      name: 'Sasuke',
      phoneNumber: '333-333-333',
      email: 'sasuke@gmail.com'
    }
  ])

  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newContact = { id, ...contact }
    setContacts([...contacts, newContact])
  }

  const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }

  const toogleAdd = () => {
    setShowAddContact(!showAddContact)
  }

  return (
    <div className="container">
      <ContactHeader 
        title="Contacts"
        onClickAddContact={toogleAdd}
        showAddContact={showAddContact}
      />
      {showAddContact ? <AddContact onAddContact={addContact} showAddContact={showAddContact}/> : ''}
      <ContactList 
        contacts={contacts} 
        onDeleteContact={deleteContact}
      /> 
      
    </div>
  );
}

export default App;
