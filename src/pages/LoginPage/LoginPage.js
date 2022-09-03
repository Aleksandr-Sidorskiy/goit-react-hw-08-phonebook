import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/auth/auth-operations";
import { Title, Label, TitleInput, Input, Button,ButtonBox, Form } from './LoginPageStyle';


export const LoginPage = () => { 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();    
     dispatch(operations.logIn({ email, password }));       
  };
  
  

  return (
    <div>

      <Form onSubmit={handleSubmit} >
      <Title>Sing in</Title>
        
        <Label >
         <TitleInput>Your e-mail adress?</TitleInput>
            <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
        </Label>

        <Label >
          <TitleInput>Your password?</TitleInput>
            <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
        </Label>
        <ButtonBox>
        <Button type="submit">Sing in</Button>
        </ButtonBox>
      </Form>
      
    </div>
)
};


