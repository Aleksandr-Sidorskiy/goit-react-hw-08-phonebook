
import ContactForm from './ContactForm';
// import ContactList from './ContactList/ContactList';
import Filter from './Filter';
// import Message from './Message';
import css from './App.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
import { Pokemon } from './pokemon/pokemon';
import { useFechContactQuery,  useDeleteContactMutation } from 'redux/contactApi';
import Loader from './Loader';
import { ContactsApiList } from './ContactList/ContactList';


const App = () => {

  const { data: contacts, isFetching } = useFechContactQuery();
  console.log({data:contacts})
  const [deleteContact] = useDeleteContactMutation();
// const contacts = useSelector(getContacts);
  return (
    <div className={css.container}>
        <h1>POKEMON</h1>
        <Pokemon/>

        <h1 className={css.title}>
          Phone<span className={css.title__color}>book</span>
        </h1>
        <ContactForm  />

        <h2 className={css.subtitle}>Contacts</h2>
        
      <Filter />
        
        {/* {contacts.length > 0 ?  */}
          {/* <ContactList /> */}
        
          {/* <Message text="Contact list is empty." /> */}
          {/* )} */}
        
        {isFetching && <Loader />}
      {contacts && <ContactsApiList contacts={contacts} onDelete={ deleteContact} />}

        
      </div>
    );
  }


export default App;