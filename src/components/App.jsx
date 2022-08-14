// import { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Message from './Message';
import css from './App.module.css';
import { useSelector } from 'react-redux';
// import { setFilter } from '../redux/filter';
// import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/contactsSlice';

const App = () => {
  // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
  // const [filter, setFilter] = useState('');
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
// ==================== Filter======================================

// const value = useSelector(state => state.filter.value);
// console.log(value)

// const changeFilter = e => {
//   dispatch(setFilter(e.currentTarget.value));
// };

  

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  //  const filtredContacts = () => {
  //    const normalizedFilter = value.toLowerCase();
  //    console.log(normalizedFilter)
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
const contacts = useSelector(getContacts);
    return (
      <div className={css.container}>
        <h1 className={css.title}>
          Phone<span className={css.title__color}>book</span>
        </h1>
        <ContactForm  />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        
        {contacts.length > 0 ? 
          <ContactList/>
        : (
          <Message text="Contact list is empty." />
        )}
        
      </div>
    );
  }


export default App;