import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contactApi';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactApi = ({ name, number, id  }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
   return (
    <>
      <div className={css.wrapper}>
          <span className={css.icon}>
            <FaUserAlt />
          </span>
          <p>{name}{''}</p>
       </div>

      <div className={css.wrapper}>
         <p className={css.number}>{number}{''}</p>
         <button className={css.button} onClick={() => deleteContact(id)} disabled={isDeleting}>
           
           { isDeleting ? <Spinner color="white" size={17} /> : <FaTrash width={20}/>}
         </button>
       </div>
    </>
    
  );
}
ContactApi.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

