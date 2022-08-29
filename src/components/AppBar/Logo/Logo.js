import css from './Logo.module.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/' className={css.title}>
            Phone<span className={css.title__color}>book</span>
        </Link>
    );
};

export default Logo;
