import Logo from './Logo';
import AuthNav from './AuthNav/authNav';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log('isLoggedIn',isLoggedIn)
  return (
    <div className={css.AppBar}>
    <Logo />
      
      {isLoggedIn ?
        <Navigation />
        :
        <AuthNav />
      }
    
    
    </div>
  );
}

export default AppBar;