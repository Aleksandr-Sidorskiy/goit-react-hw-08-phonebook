import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { getIsLoggedIn } from "redux/auth/auth-selectors";
// import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

function PrivatRoute({children, redirectPath='/login'}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
   
    return isLoggedIn ? children : <Navigate to={redirectPath} replace/>; 
    
}

// PrivatRoute.propTypes = {
//     children: PropTypes.element,
//     redirectTo:PropTypes.string,
// }

export default PrivatRoute;