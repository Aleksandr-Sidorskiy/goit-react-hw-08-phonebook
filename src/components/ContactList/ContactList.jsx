import PropTypes from 'prop-types';
import Contact from '../Сontact';
import css from './ContactList.module.css';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';



function ContactList() {
  const filter= useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  
  const deleteContacts = contactId => dispatch(deleteContact(contactId));
  
  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContactList = filtredContacts();

  
  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              deleteContact={()=>deleteContacts(id)}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;