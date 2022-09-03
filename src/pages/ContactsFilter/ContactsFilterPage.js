import { useFetchContactQuery } from "redux/contacts/contactApi";
import Filter from "components/Filter";
import ContactsApiList from "components/ContactList/ContactList";
import { Outlet } from "react-router-dom";
import { Spinner } from "components/Spinner/Spinner";
import css from './ContactsFilterPage.module.css';

export const ContactsFilterPage = () => { 
const { data: contacts, isLoading } = useFetchContactQuery();
  return (
    <div className={css.wrapper}>
      <Filter />  
      {contacts &&  <ContactsApiList contacts={contacts}  />}
      {isLoading && <Spinner color='blue' size={30} />}

      <Outlet/>
    </div>
  );
};
    
