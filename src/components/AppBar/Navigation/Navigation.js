import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

function Navigation() {
    return (
     <>
        <NavLink className={css.navigation} to="/">Home</NavLink> 
        <NavLink className={css.navigation} to="/form">Add contact</NavLink>
        <NavLink className={css.navigation} to="/filter">Search contact</NavLink>
        <UserMenu/>
    </>
    )
};

export default Navigation;