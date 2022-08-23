
// import ContactForm from './ContactForm';
// import ContactList from './ContactList/ContactList';
import Filter from './Filter';
// import Message from './Message';
import css from './App.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
// import { Pokemon } from './pokemon/pokemon';
import { useFechContactQuery,  useDeleteContactMutation } from 'redux/contactApi';
import Loader from './Loader';
import { ContactsApiList } from './ContactList/ContactList';
import { ContactFormApi } from './ContactForm/ContactForm';


const App = () => {

  const { data: contacts, isFetching } = useFechContactQuery();
  
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
// const contacts = useSelector(getContacts);
  return (
    <div className={css.container}>
      
        <h1 className={css.title}>
          Phone<span className={css.title__color}>book</span>
        </h1>
      
      <ContactFormApi />

        <h2 className={css.subtitle}>Contacts</h2>
         
      <Filter  />

      {isFetching && <Loader />}
      {contacts && <ContactsApiList contacts={contacts} onDelete={ deleteContact} deleting={isDeleting} />}

        
      </div>
    );
  }


export default App;