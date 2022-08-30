import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { HomePage } from 'pages/HomePage';
import { ContactsFilterPage } from 'pages/ContactsFilterPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { FormAddContactPage } from 'pages/FormAddContactPage';
import { Container, Header } from './Header/header.styled';
// import ContactsApiList from './ContactList/ContactList';
import AppBar from './AppBar/AppBar';
// import {authOperations} from 'redux/auth'
// import fetchCurrentUser  from 'redux/auth/auth-operations';

const App = () => {
  // const dispatch = useDispatch();

//   useEffect(() => {
//   dispatch(authOperations, fetchCurrentUser())
// },[dispatch])

  return (
    <Container >
      <Header>
         <AppBar/>
      </Header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/form' element={ <FormAddContactPage/>} />
        <Route path='/filter' element={<ContactsFilterPage />} />
      </Routes>
    </Container>
  ) 
  
};


export default App;
// return (
//   <div className={css.container}>
    
//       <h1 className={css.title}>
//         Phone<span className={css.title__color}>book</span>
//       </h1>
    
//     <ContactFormApi />

//       <h2 className={css.subtitle}>Contacts</h2>
       
//     <Filter  />

//     { contacts && <ContactsApiList contacts={contacts}  />}
//     {isLoading && <Spinner color='blue' size={30} />}

      
//     </div>
//   );