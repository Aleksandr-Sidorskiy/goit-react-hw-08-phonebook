import {useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Message from './Message';
import css from './App.module.css';
import { useSelector } from 'react-redux';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
  // const [filter, setFilter] = useState('');
  const value = useSelector(state => state.filter.value);
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

   const filtredContacts = () => {
    const normalizedFilter = value.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

    return (
      <div className={css.container}>
        <h1 className={css.title}>
          Phone<span className={css.title__color}>book</span>
        </h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter
          filter={value}
          // changeFilter={changeFilter} 
          
          />
        
        {contacts.length > 0 ? (
          <ContactList
            contacts={filtredContacts()} 
            onDeleteContact={deleteContact}
          />
        ) : (
          <Message text="Contact list is empty." />
        )}
        
      </div>
    );
  }


export default App;