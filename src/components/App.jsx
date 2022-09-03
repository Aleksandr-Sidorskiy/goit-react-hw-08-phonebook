import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Container } from './Header/header.styled';
import { authOperations } from 'redux/auth';
import { Spinner } from './Spinner/Spinner';
// import { lazy } from 'react';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import {authSelectors} from 'redux/auth';

import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsFilterPage } from 'pages/ContactsFilter/ContactsFilterPage';
import { FormAddContactPage } from 'pages/FormAddContactPage/FormAddContactPage';
// const HomePage = lazy(() => import('pages/HomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const ContactsFilterPage = lazy(() => import('pages/ContactsFilterPage'));
// const FormAddContactPage = lazy(() => import('pages/FormAddContactPage'));



const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
 
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container >
      
      {isFetchingCurrentUser ? (<Spinner/>):
        (<>
         <AppBar/>
      <Routes>
        <Route path='/' element={<PublicRoute > <HomePage /> </PublicRoute>} />
        <Route path='/register'  element={<PublicRoute  restricted > <RegisterPage /> </PublicRoute>} />
        <Route path='/login' element={<PublicRoute  restricted> <LoginPage /> </PublicRoute>} />
        <Route path='/form' element={ <PrivatRoute isLoggedIn={isLoggedIn}> <FormAddContactPage/> </PrivatRoute> } />
        <Route path='/filter' element={<PrivatRoute isLoggedIn={isLoggedIn}> <ContactsFilterPage /> </PrivatRoute>}  />
      </Routes>
        </>
          
      )}
    </Container>
  ) 
  
};


export default App;
