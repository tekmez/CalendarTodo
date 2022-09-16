import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
const Login = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  const login = () => {
    if (userName === '') return;
    dispatch(setUser(userName));
  };
  return (
    <div className="login-input">
      <Form.Control
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleChange}
      />
      <Button onClick={login} variant="light">
        Login
      </Button>
    </div>
  );
};

export default Login;
