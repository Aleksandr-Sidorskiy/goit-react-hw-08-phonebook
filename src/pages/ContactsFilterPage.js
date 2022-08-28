import {  useSelector } from "react-redux";
import css from '../components/ContactList/ContactList.module.css';
import { useFetchContactQuery, useDeleteContactMutation } from "redux/contactApi";
import { getFilter } from "redux/contactsSelector";
// import PropTypes from "prop-types";
import Message from 'components/Message';
import { ContactApi } from "components/Сontact/Contact";
import Filter from "components/Filter";
import ContactsApiList from "components/ContactList/ContactList";
import { Link, Outlet } from "react-router-dom";
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
    
