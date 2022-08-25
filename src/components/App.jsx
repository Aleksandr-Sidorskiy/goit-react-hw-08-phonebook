import Filter from './Filter';
import css from './App.module.css';
import { useFechContactQuery } from 'redux/contactApi';
import { Spinner } from './Spinner/Spinner';
import { ContactsApiList } from './ContactList/ContactList';
import { ContactFormApi } from './ContactForm/ContactForm';


const App = () => {

  const { data: contacts, isLoading } = useFechContactQuery();
  
  
  return (
    <div className={css.container}>
      
        <h1 className={css.title}>
          Phone<span className={css.title__color}>book</span>
        </h1>
      
      <ContactFormApi />

        <h2 className={css.subtitle}>Contacts</h2>
         
      <Filter  />

      { contacts && <ContactsApiList contacts={contacts}  />}
      {isLoading && <Spinner color='blue' size={30} />}

        
      </div>
    );
  }


export default App;