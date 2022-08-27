import {  useSelector } from "react-redux";
import css from '../components/ContactList/ContactList.module.css';
import { useFechContactQuery, useDeleteContactMutation } from "redux/contactApi";
import { getFilter } from "redux/contactsSelector";
import  ContactsApiList  from "components/ContactList/ContactList";
import Filter from "components/Filter";
import PropTypes from "prop-types";
import Message from 'components/Message';
import { ContactApi } from "components/Сontact/Contact";




export const ContactsFilterPage = () => { 

// const filterN = useSelector(getFilter);
//     const data = useFechContactQuery();
//     console.log(data)
// const [deleteContact] = useDeleteContactMutation();
// const onDeleteContact = id => deleteContact(id);

//   const filterContactsForm = () => {
//     const normalizedFilter = filterN.toLowerCase();
//     return data.filter(contact => 
//       contact.name.toLowerCase().includes(normalizedFilter),
//     ) ?? [];
//   };
  
//   const filterContacts = filterContactsForm();

return (
    <>
        <Filter />
        
 {/* {data.length === 0 ? (<Message text='Contact list is empty.'/>):(
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
    )} */}
    </>
)
};

