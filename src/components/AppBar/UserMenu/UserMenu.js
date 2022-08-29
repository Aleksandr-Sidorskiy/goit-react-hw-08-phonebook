import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getName } from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

function UserMenu() {
    const dispatch = useDispatch();
   const userName = useSelector(state => getName(state));
    // const userEmail = useSelector(state => getEmail(state));
  
    return (
        <div>
            <span>Добро пожаловать, {userName}</span>
            <button className={css.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
        </div>
    )
};

export default UserMenu;