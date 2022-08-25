
import css from './Filter.module.css';
import { setFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from 'redux/contactsSelector';

function Filter() {
const value = useSelector(getFilter);
const dispatch = useDispatch();
const changeFilter = e => {
  
  dispatch(setFilter(e.currentTarget.value))
};

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={changeFilter}
        value = {value}
      />
    </label>
  );
}


export default Filter;