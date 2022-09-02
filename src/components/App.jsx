import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Container } from './Header/header.styled';
import { authOperations } from 'redux/auth';
// import { lazy } from 'react';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { useSelector } from 'react-redux';
import {authSelectors} from 'redux/auth';

import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsFilterPage } from 'pages/ContactsFilter/ContactsFilterPage';
import { FormAddContactPage } from 'pages/FormAddContactPage';
// const HomePage = lazy(() => import('pages/HomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const ContactsFilterPage = lazy(() => import('pages/ContactsFilterPage'));
// const FormAddContactPage = lazy(() => import('pages/FormAddContactPage'));



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container >
      {/* <Header> */}
         <AppBar/>
      {/* </Header> */}
      {/* <Routes>
        <Route path='/' element= {<HomePage /> } />
        <Route path='/register' element= {<RegisterPage /> } />
        <Route path='/login' element={<LoginPage />} />
         <Route path='/form' element={ <PrivatRoute isLoggedIn={isLoggedIn}> <FormAddContactPage/> </PrivatRoute> } />
        <Route path='/filter' element={<PrivatRoute isLoggedIn={isLoggedIn}> <ContactsFilterPage /> </PrivatRoute>}  /> */}
        {/* <Route path='/form' element={ <FormAddContactPage/>  } />
        <Route path='/filter' element={ <ContactsFilterPage /> } /> */}
      {/* </Routes> */}
      
      <Routes>
        <Route path='/' element={<PublicRoute > <HomePage /> </PublicRoute>} />
        <Route path='/register'  element={<PublicRoute  restricted > <RegisterPage /> </PublicRoute>} />
        <Route path='/login' element={<PublicRoute  restricted> <LoginPage /> </PublicRoute>} />
        <Route path='/form' element={ <PrivatRoute isLoggedIn={isLoggedIn}> <FormAddContactPage/> </PrivatRoute> } />
        <Route path='/filter' element={<PrivatRoute isLoggedIn={isLoggedIn}> <ContactsFilterPage /> </PrivatRoute>}  />
      </Routes>
    </Container>
  ) 
  
};


export default App;
