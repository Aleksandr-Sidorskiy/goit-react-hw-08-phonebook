import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

function Navigation() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
     <nav className={css.Navigation}>
        <NavLink className={css.navigation} to="/">Home</NavLink> 
            
            {isLoggedIn &&
        <>
            <NavLink className={css.navigation} to="/form">Add contact</NavLink>
            <NavLink className={css.navigation} to="/filter">Search contact</NavLink>
            <UserMenu />
        </>
        }
    </nav>
    )
};

export default Navigation;