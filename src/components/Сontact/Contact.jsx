import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { deleteContact } from 'redux/contactsSlice'; 
import { useDispatch } from 'react-redux';


function Contact({ name, number, contactId }) {
  const dispatch = useDispatch();
  const deleteContacts = contactId => dispatch(deleteContact(contactId));

  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => deleteContacts(contactId)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default Contact;