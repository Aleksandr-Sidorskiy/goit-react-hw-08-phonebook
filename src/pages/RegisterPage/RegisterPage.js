import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/auth/auth-operations";
import { Title, Label, TitleInput, Input, Button,ButtonBox, Form } from './RegisterPageStyle';

export const RegisterPage = () => { 
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }
    return (
    <div>

      <Form onSubmit={handleSubmit} >
          <Title>Create your account</Title>
          <Label >
            <TitleInput>Your name</TitleInput>
              <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}              
              />
          </Label>
        
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
        <Button type="submit">Create account</Button>
        </ButtonBox>
      </Form>
      
    </div>
)

};