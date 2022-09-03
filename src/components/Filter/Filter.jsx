
import css from './Filter.module.css';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from 'redux/contacts/contactsSelector';

function Filter() {
const value = useSelector(getFilter);
const dispatch = useDispatch();
const changeFilter = e => {
  
  dispatch(setFilter(e.currentTarget.value))
};

  return (
    <div className={css.Filter_box}>

    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={changeFilter}
        value = {value}
      />
    </label>
    </div>
  );
}


export default Filter;