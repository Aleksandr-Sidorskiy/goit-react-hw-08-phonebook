import css from './AuthNav.module.css';
import { NavLink } from "react-router-dom";

function AuthNav() {
    return (
    <div className={css.authNav__box}>
        <NavLink className={css.navigation} to='/register'>Register</NavLink>
        <NavLink className={css.navigation} to="/login">Login</NavLink>
    </div>
    )
    
};

export default AuthNav;