// import PropTypes from 'prop-types';
// import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, restricted = false, redirectTo = '/filter' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  // console.log(shouldRedirect)
    
  return shouldRedirect ? <Navigate to={redirectTo} replace/> : children;  
};

// PublicRoute.propTypes = {
//   children: PropTypes.element,
//   restricted: PropTypes.bool,
//   redirectTo: PropTypes.string,
// };

export default PublicRoute;