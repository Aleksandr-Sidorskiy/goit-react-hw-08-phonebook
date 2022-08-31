import Logo from './Logo';
import AuthNav from './AuthNav/authNav';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
// import { authSelectors } from 'redux/auth';
// import UserMenu from './UserMenu/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state))
  return (
    <>
    <Logo />
      
      {isLoggedIn ?  <Navigation />: <AuthNav />}
    
    
    </>
  );
}

export default AppBar;