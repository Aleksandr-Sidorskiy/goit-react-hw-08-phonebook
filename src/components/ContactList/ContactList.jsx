import { ContactApi } from 'components/Сontact/Contact';
// import Contact from '../Сontact';
// import css from './ContactList.module.css';
// import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';
// import { useSelector, useDispatch } from 'react-redux';


export const ContactsApiList = ({ contacts }) => {
  
  return (
    <ul>
      {contacts.map(contact => (
      <ContactApi key={contact.id} {...contact} />
      ))}
    </ul>
  )
};
        // {/* <li className={css.item}  key={contact.id}>
        //       <ContactApi    
        //         name = {contact.name}
        //         phone = {contact.phone}
        //         contactId={contact.id}
        //         deleteContact = {() => deleteContact(contact.id)}
        //     />
        // </li> */}
// function ContactList() {

//   const filter= useSelector(getFilter);
//   const contacts = useSelector(getContacts);

//   const dispatch = useDispatch();
  
//   // const deleteContacts = contactId => dispatch(deleteContact(contactId));
  
//   const filtredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   const filteredContactList = filtredContacts();

  
//   return (
//     <ul>
//       {filteredContactList.map(({id, name, number}) => {
//         return (
//           <li className={css.item} key={id}>
//             <Contact
//               name={name}
//               number={number}
//               deleteContact={()=>deleteContacts(id)}
//               contactId={id}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }



// export default ContactList;