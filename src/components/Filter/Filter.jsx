
import css from './Filter.module.css';
import { setFilter, getFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from "react-redux";
 
function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };


  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={changeFilter}
      />
    </label>
  );
}


export default Filter;