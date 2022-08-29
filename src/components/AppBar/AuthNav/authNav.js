import css from './AuthNav.module.css';
import { NavLink } from "react-router-dom";

function AuthNav() {
    return (
    <>
        <NavLink className={css.navigation} to='/register'>Register</NavLink>
        <NavLink className={css.navigation} to="/login">Login</NavLink>
    </>
    )
    
};

export default AuthNav;