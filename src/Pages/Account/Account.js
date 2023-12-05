import React, { useState } from 'react';
import './Account.css';
import { Navigate, useOutletContext } from 'react-router-dom';

import { getReservations } from '../../database/databaseHandler';

const Account = () => {
  const [userData, setUserData] = useOutletContext().userControl;
  const { showToast } = useOutletContext();

  const [currentOption, setCurrentOption] = useState('account');
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [reservationData, setReservationData] = useState({});
  const [reservations] = useState(getReservations(userData.username));

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const changeOptionHandler = (e) => {
    e.preventDefault();
    setCurrentOption(e.target.dataset.action);
  };

  const handleTextFieldChange = (e) => {
    switch (e.target.dataset.field) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const saveChangesHandler = (e) => {
    e.preventDefault();
    setUserData((oldState) => {
      return {
        username: oldState.username,
        firstName,
        lastName,
        phone,
        email,
        password,
      };
    });
    showToast('Los cambios fueron guardados');
  };

  const handleReservationChange = (e) => {
    e.preventDefault();
    reservations.forEach((reservation) => {
      if (reservation.id === e.target.dataset.reservationId)
        setReservationData(reservation);
    });
  };

  const renderAccountInfo = () => {
    return (
      <div className='account-page-info'>
        <span className='account-info-field'>
          <p>Nombres</p>
          <input
            data-field='firstName'
            value={firstName}
            className='account-info-input'
            onChange={handleTextFieldChange}></input>
        </span>
        <span className='account-info-field'>
          <p>Apellidos</p>
          <input
            data-field='lastName'
            value={lastName}
            className='account-info-input'
            onChange={handleTextFieldChange}></input>
        </span>
        <span className='account-info-field'>
          <p>Teléfono</p>
          <input
            data-field='phone'
            value={phone}
            className='account-info-input'
            onChange={handleTextFieldChange}></input>
        </span>
        <span className='account-info-field'>
          <p>Dirección de correo </p>
          <input
            data-field='email'
            value={email}
            className='account-info-input'
            onChange={handleTextFieldChange}></input>
        </span>
        <span className='account-info-field'>
          <p>Nueva Contraseña</p>
          <input
            data-field='password'
            value={password}
            placeholder='Nueva contraseña'
            className='account-info-input'
            onChange={handleTextFieldChange}></input>
        </span>
        <button className='account-info-save' onClick={saveChangesHandler}>
          Guardar
        </button>
      </div>
    );
  };

  const renderReservationsInfo = () => {
    return (
      <div className='account-page-info'>
        <p className='account-reservations-title'>Mis reservas</p>
        <div className='account-reservations'>
          <div className='account-reservations-list'>
            <p>Reservas:</p>
            <ul>
              {reservations.map((reservation) => {
                return (
                  <li key={reservation.id}>
                    <button
                      className={`account-page-reservation-selector ${
                        reservationData?.id === reservation.id ? 'active' : ''
                      }`}
                      data-reservation-id={reservation.id}
                      onClick={handleReservationChange}>
                      {reservation.id}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='account-reservation-detail'>
            {reservationData.id === undefined ? (
              <p className='reservation-placeholder'>
                Seleccione una reserva de la lista
              </p>
            ) : (
              <div>
                <span className='account-page-reservation-field'>
                  <p>Ubicación</p>
                  <p>{reservationData.location}</p>
                </span>
                <span className='account-page-reservation-field'>
                  <p>Nombre en la reserva</p>
                  <p>{`${capitalize(reservationData.firstName)} ${capitalize(
                    reservationData.lastName
                  )}`}</p>
                </span>
                <span className='account-page-reservation-field'>
                  <p>Fecha</p>
                  <p>{new Date(reservationData.date).toLocaleString()}</p>
                </span>
                <span className='account-page-reservation-field'>
                  <p>Comensales</p>
                  <p>{reservationData.size}</p>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAccountData = () => {
    return (
      <div className='page-outer-container'>
        <h2>Hola, {capitalize(userData.firstName)}</h2>
        <div className='account-inner-container'>
          <nav>
            <button
              className={`account-btn-selector ${
                currentOption === 'account' ? 'active' : ''
              }`}
              onClick={changeOptionHandler}
              data-action='account'>
              Mi cuenta
            </button>
            <button
              className={`account-btn-selector ${
                currentOption === 'reservations' ? 'active' : ''
              }`}
              data-action='reservations'
              onClick={changeOptionHandler}>
              Mis reservas
            </button>
          </nav>
          <section>
            {currentOption === 'account'
              ? renderAccountInfo()
              : renderReservationsInfo()}
          </section>
        </div>
      </div>
    );
  };

  const dataSelector = () => {
    return userData.username !== undefined ? (
      renderAccountData()
    ) : (
      <Navigate to='/login' />
    );
  };

  return dataSelector();
};

export default Account;
