import React from 'react';
import './Header.css';

import AccountIcon from './assets/account-icon.svg';
import LogoutIcon from './assets/logout.svg';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const userData = props.getUserState();

  const renderLoginBtn = () => {
    return (
      <Link to='/login' className='btn-thin'>
        <img
          src={AccountIcon}
          className='header-account-icon'
          alt='Botón de cuenta'></img>
      </Link>
    );
  };
  const renderLogoutBtn = () => {
    return (
      <Link to='/login?action=logout' className='btn-thin'>
        <img
          src={LogoutIcon}
          className='header-account-icon'
          alt='Botón de cerrar sesión'></img>
      </Link>
    );
  };
  return (
    <div className='header-container'>
      <Link to='/' className='header-logo-link'>
        <img
          src='/imgs/pelican-logo.png'
          alt='Logo del restaurante'
          className='header-logo'
        />
        <p>El pelícano hambriento</p>
      </Link>
      <div>
        <Link to='/reservations' className='btn-normal'>
          Reserva
        </Link>
        {userData.username !== undefined ? renderLogoutBtn() : renderLoginBtn()}
      </div>
    </div>
  );
};

export default Header;
