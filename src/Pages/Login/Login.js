import React, { useState } from 'react';
import { Navigate, useLocation, useOutletContext } from 'react-router-dom';
import { logInUser } from '../../database/databaseHandler';

import './Login.css';

const Login = () => {
  const [userData, setUserData] = useOutletContext().userControl;
  const { showToast } = useOutletContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDataCleared, setIsDataCleared] = useState(false);

  const params = useLocation();
  const siteSearch = new URLSearchParams(params.search);
  const isLoggingOut = siteSearch.get('action')?.toLowerCase();

  if (isLoggingOut && !isDataCleared) {
    setIsDataCleared(true);
    setUserData({});
  }
  const handleUserLogin = (e) => {
    e.preventDefault();
    const user = logInUser(username.toLocaleLowerCase(), password);
    if (!user.username) showToast('Usuario o Contraseña incorrectos');
    else {
      setUserData(user);
    }
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const renderLoginPage = () => {
    return (
      <div className='page-outer-container'>
        <div className='page-login-form'>
          <h2>Ingresar</h2>
          <form action='/login' method='GET'>
            <input
              type='text'
              className='form-input'
              id='username'
              placeholder='Usuario'
              value={username}
              onChange={changeUsername}
            />
            <input
              type='password'
              className='form-input'
              id='password'
              placeholder='Contraseña'
              value={password}
              onChange={changePassword}
            />
            <button
              type='Submit'
              className='login-form-submit-btn'
              onClick={handleUserLogin}>
              Acceder
            </button>
          </form>
        </div>
      </div>
    );
  };

  return userData.username !== undefined ? (
    <div>
      <Navigate to='/account' replace={true} />
    </div>
  ) : (
    renderLoginPage()
  );
};

export default Login;
