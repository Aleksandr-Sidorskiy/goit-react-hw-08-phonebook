import { Spinner } from 'components/Spinner/Spinner';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useCreateContactMutation, useFetchContactQuery } from 'redux/contactApi';

export const ContactFormApi = () => {
  const [createContact, {isLoading}] = useCreateContactMutation();
  const {data: contacts} = useFetchContactQuery();
 console.log(contacts)
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const onChangeName = e => {
    setName(e.currentTarget.value);
  };

  const onChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(
      `${name}`,
      'This user is already in the contact list.',
      'OK'
      )
      : createContact({ name, number }) &&
      reset(); 
    };
    
  const reset = () => {
      setName('');
      setNumber('');
    };
  
   return (
     <>
       <form className={css.form}  onSubmit={onSubmitForm}>
        
        <label className={css.label}>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            onChange={onChangeName}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            onChange={onChangeNumber}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.button} type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={15} />}
          Add contact
        </button>

      </form>
    </>
   )
};


