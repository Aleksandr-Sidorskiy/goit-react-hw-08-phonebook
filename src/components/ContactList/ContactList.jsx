import { ContactApi } from 'components/Сontact/Contact';
import css from './ContactList.module.css';
import { getFilter } from 'redux/contactsSelector';
import { useSelector} from 'react-redux';
import { useFechContactQuery, useDeleteContactMutation } from 'redux/contactApi';
import PropTypes from "prop-types";
import Message from 'components/Message';


export const ContactsApiList = () => {
  
  const filter = useSelector(getFilter);
  const { data } = useFechContactQuery();
  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact =id =>deleteContact(id)

  const filterContactsNorm = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    ) ?? [];
  };

  const filterContacts = filterContactsNorm();
  
  return data.length === 0 ? (<Message text='Contact list is empty.'/>):(
    
    <ul>
      {filterContacts.map(({name, phone, id}) => (
          <li className={css.item} key={id}>
            <ContactApi
              name={name}
              phone={phone}
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
  phone: PropTypes.string,
  id:PropTypes.string,
  }