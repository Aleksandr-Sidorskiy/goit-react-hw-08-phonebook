import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

function Navigation() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav className={css.Navigation}>
        
            
            {isLoggedIn &&
                <ul className={css.list}>
                    <li className={css.item}>
                        <NavLink className={css.navigation} to="/form">Add contact</NavLink>
                    </li>
                    <li className={css.item}>
                        <NavLink className={css.navigation} to="/filter">Search contact</NavLink>
                    </li>
                    <li className={css.item}>
                        <UserMenu />
                    </li>

                </ul>
            }
        </nav>
    );
};

export default Navigation;