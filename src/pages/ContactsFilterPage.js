// import {  useSelector } from "react-redux";
// import css from '../components/ContactList/ContactList.module.css';
import { useFetchContactQuery } from "redux/todos/contactApi";
// import { getFilter } from "redux/todos/contactsSelector";
// import PropTypes from "prop-types";
// import Message from 'components/Message';
// import { ContactApi } from "components/Сontact/Contact";
import Filter from "components/Filter";
import ContactsApiList from "components/ContactList/ContactList";
import { Outlet } from "react-router-dom";
import { Spinner } from "components/Spinner/Spinner";

export const ContactsFilterPage = () => { 
const { data: contacts, isLoading } = useFetchContactQuery();
  return (
    <>
      <Filter />  
      {contacts &&  <ContactsApiList contacts={contacts}  />}
      {isLoading && <Spinner color='blue' size={30} />}

      <Outlet/>
    </>
  );
};
    
