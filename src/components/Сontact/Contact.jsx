import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';
// import { deleteContact } from 'redux/contactsSlice'; 
// import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contactApi';
import Loader from 'components/Loader';

export const ContactApi = ({ name, phone, id  }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
   return (
    <li className={css.item}>
      <div className={css.wrapper}>
         <span className={css.icon}>
          <FaUserAlt />
        </span>
        
         <p>{name}{''}</p>
       </div>

      <div className={css.wrapper}>
         <p className={css.number}>{phone}{''}</p>
         <button className={css.button} onClick={() => deleteContact(id)} disabled={isDeleting}>
           {isDeleting && <Loader />}
          <FaTrash />
         </button>
       </div>

    </li>
  );
}
ContactApi.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// function Contact({ name, number, contactId }) {
//   const dispatch = useDispatch();
//   const deleteContacts = contactId => dispatch(deleteContact(contactId));

//   return (
//     <>
//       <div className={css.wrapper}>
//         <span className={css.icon}>
//           <FaUserAlt />
//         </span>
//         <p>{name}</p>
//       </div>
//       <div className={css.wrapper}>
//         <p className={css.number}>{number}</p>
//         <button
//           className={css.button}
//           type="button"
//           onClick={() => deleteContacts(contactId)}
//         >
//           <FaTrash />
//         </button>
//       </div>
//     </>
//   );
// }


// export default Contact;