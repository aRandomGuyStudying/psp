import React from 'react';
import './Error.css';
import NotFoundIcon from './assets/notFoundIco.svg';

const Error = (props) => {
  return (
    <div className='page-outer-container'>
      <img
        src={NotFoundIcon}
        alt='Icono de pagina no encontrada'
        className='not-found-ico'
      />
      <h1 className='error-page-header'>Oops!</h1>
      <p className='error-page-message'>La pagina que buscas no existe!</p>
    </div>
  );
};

export default Error;
