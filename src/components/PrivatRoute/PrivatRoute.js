import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

function PrivatRoute({children, redirectTo}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn)
    
    return isLoggedIn ? children : <Navigate to={redirectTo ='/'} />
}

// PrivatRoute.propTypes = {
//     children: PropTypes.element,
//     redirectTo:PropTypes.string,
// }

export default PrivatRoute;