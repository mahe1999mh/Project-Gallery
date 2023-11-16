// LoginForm.js

import React, { useState } from 'react';
import { useLoginMutation } from '../store/authApi';
import ExampleComponent from '../../ExampleComponent';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [login, { isLoading, error, data }] = useLoginMutation();

  // console.log(data,"logindata" );
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Call the login mutation with the user-entered credentials
    login(formData);
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? <ExampleComponent/> : 'Login'}
      </button>
      {error && <div>Error: {error.message}</div>}
      {data && <div>Logged in as {login}</div>}
    </form>
  );
};

export default LoginForm;
