import PropTypes from 'prop-types';
import css from './Filter.module.css';
// import { setFilter } from '../../redux/filter';
// import { useDispatch, useSelector } from "react-redux";
 


function Filter({changeFilter, value}) {
  // const value = useSelector(state => state.filter.value);
  // console.log(value);

  // const dispatch = useDispatch();

  // const changeFilter = e => {
  //   dispatch(setFilter(e.currentTarget.value));
  // };

  
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

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;