import { Routes, Route} from 'react-router-dom';
// import Filter from './Filter';
// import css from './App.module.css';
// import { useFetchContactQuery } from 'redux/contactApi';
// import { Spinner } from './Spinner/Spinner';
// import { ContactsApiList } from './ContactList/ContactList';
// import { ContactFormApi } from './ContactForm/ContactForm';
import { HomePage } from 'pages/HomePage';
import { ContactsFilterPage } from 'pages/ContactsFilterPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { FormAddContactPage } from 'pages/FormAddContactPage';
import { Container, Header, LinkNav, Logo } from './Header/header.styled';
import ContactsApiList from './ContactList/ContactList';

const App = () => {

  return (
    <Container >
      <Header>
          <Logo>
            HW-8
          </Logo>
        <nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to='/register'>Register</LinkNav>
          <LinkNav to="/login">Login</LinkNav>
          <LinkNav to="/form">Add contact</LinkNav>
          <LinkNav to="/filter">Search contact</LinkNav>
        </nav>
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