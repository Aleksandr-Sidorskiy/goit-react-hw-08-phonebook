import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';

function PrivatRoute({children, redirectPath='/login'}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
   
    return isLoggedIn ? children : <Navigate to={redirectPath} replace/>; 
    
};

export default PrivatRoute;