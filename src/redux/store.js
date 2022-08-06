import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

const addContact = createAction('clicks/addContact');

console.log(addContact.toString());
const clickAddContact = createReducer(0, {
    [addContact]: (state, action) => {
        return state;
    }
})

export const store =  configureStore({
    reducer: {
      clicks: clickAddContact,
  },
})
// const addContact = ({ name, number }) => {
//     const newContact = { id: nanoid(), name, number };

//     contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
//       ? Report.warning(
//           `${name}`,
//           'This user is already in the contact list.',
//           'OK'
//         )
//       : setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//    const filtredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };
