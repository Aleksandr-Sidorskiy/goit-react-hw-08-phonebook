import { ContactApi } from 'components/Сontact/Contact';
import css from './ContactList.module.css';
import { getFilter } from 'redux/todos/contactsSelector';
import { useSelector} from 'react-redux';
import { useFetchContactQuery, useDeleteContactMutation } from 'redux/todos/contactApi';
import PropTypes from "prop-types";
import Message from 'components/Message';


 const ContactsApiList = () => {
  
  const filter = useSelector(getFilter);
   const {data } = useFetchContactQuery();
   console.log({data})
  const [deleteContact] = useDeleteContactMutation();
   const onDeleteContact = id => deleteContact(id);

  const filterContactsForm = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    ) ?? [];
  };

  const filterContacts = filterContactsForm();
  
  return data.length === 0 ? (<Message text='Contact list is empty.'/>):(
    
    <ul>
      {filterContacts.map(({name, number, id}) => (
          <li className={css.item} key={id}>
            <ContactApi
              name={name}
              number={number}
              deleteContact={()=>onDeleteContact(id)}
              id={id}
          />
         </li>
      ))}

    </ul> 
    )
  };
 
ContactsApiList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id:PropTypes.string,
}
  
export default ContactsApiList;