import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      // Perform successful login logic here (e.g., redirect user or set authentication token)
      console.log('Logged in successfully');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container-out">
      <div className="inner-boxes">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-div">
          <label htmlFor="username">Username:</label>
          <input className="box"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <br/>
        <div className="name-div">
          <label htmlFor="password">Password:</label>
          <input className="box"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="btn" >
        <button className="button" type="submit">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
