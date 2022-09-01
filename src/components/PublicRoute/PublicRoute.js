import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, restricted = false, redirectTo = '/registrer' }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    
    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
    
};

PublicRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};

export default PublicRoute;