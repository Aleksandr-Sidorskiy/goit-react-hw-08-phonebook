import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

function UserMenu() {
    const dispatch = useDispatch();
    const userName = useSelector(authSelectors.getName);

    return (
        <div className={css.wrapper}>
            <button className={css.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
            <span className={css.text}>logOut {userName}</span>
        
      </button>
        </div>
    )
};

export default UserMenu;