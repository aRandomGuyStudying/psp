import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Reservations.css';
import 'react-calendar/dist/Calendar.css';
import { useOutletContext } from 'react-router-dom';

const Reservations = () => {
  const { showToast } = useOutletContext();

  const [userDate, setUserDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [calendarDate, setCalendarDate] = useState('');
  const [location, setLocation] = useState('Salon Norte');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [size, setSize] = useState('');

  const currentDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;

  const dateChangeHandler = (newDate) => {
    setCalendarDate(newDate);
    const day =
      +newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
    const month =
      +newDate.getMonth() < 9
        ? `0${newDate.getMonth() + 1}`
        : newDate.getMonth() + 1;

    const currentDate = `${newDate.getFullYear()}-${month}-${day}`;
    setSelectedDate(currentDate);
    setUserDate(currentDate);
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
      case 'size':
        setSize(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        break;
      default:
        break;
    }
  };

  const selectFieldChange = (e) => {
    setLocation(e.target.value);
  };

  const saveReservation = (e) => {
    e.preventDefault();
    if (!userDate || !location || !firstName || !lastName || !phone || !size) {
      showToast('Falta información en el formulario!');
    } else {
      setFirstName('');
      setLastName('');
      setPhone('');
      setSize('');
      setSelectedDate('');
      setUserDate('');
      setCalendarDate('');
      showToast('Reserva creada con éxito!');
    }
  };

  useEffect(() => {
    setSelectedDate(currentDate);
  }, [currentDate]);

  return (
    <div className='page-outer-container'>
      <div className='page-reservations-message'>
        <h1>Crea tu reserva con nosotros!</h1>
        <p>
          Llena la información de este formato y dale clic al botón "Guardar"
          para enviarnos la información
        </p>
      </div>
      <div className='page-inner-container'>
        <div className='page-reservations-form'>
          <div className='reservations-form-column column-1'>
            <Calendar
              onChange={dateChangeHandler}
              value={calendarDate}
              locale='es-CO'
              className='reservations-form-calendar'
            />
            <div>
              <input
                type='date'
                date={currentDate}
                value={selectedDate}
                readOnly
              />
            </div>
          </div>
          <form
            action='/api/createReservation'
            method='POST'
            className='reservations-form-column column-2'>
            <div className='reservations-form-cell'>
              <label htmlFor='location' className='form-input-label'>
                Ubicación:
              </label>
              <select
                className='form-input'
                id='location'
                onChange={selectFieldChange}>
                <option value='Salon Norte'>Salón Norte</option>
                <option value='Salon Sur'>Salón Sur</option>
                <option value='Salon Occidente'>Salón Occidente</option>
              </select>
            </div>
            <div className='reservations-form-cell'>
              <label htmlFor='firstName' className='form-input-label'>
                Nombres:
              </label>
              <input
                data-field='firstName'
                type='text'
                className='form-input'
                id='firstName'
                value={firstName}
                onChange={handleTextFieldChange}
              />
            </div>
            <div className='reservations-form-cell'>
              <label htmlFor='lastName' className='form-input-label'>
                Apellidos:
              </label>
              <input
                data-field='lastName'
                type='text'
                className='form-input'
                id='lastName'
                value={lastName}
                onChange={handleTextFieldChange}
              />
            </div>
            <div className='reservations-form-cell'>
              <label htmlFor='phone' className='form-input-label'>
                Numero de contacto:
              </label>
              <input
                data-field='phone'
                type='text'
                className='form-input'
                id='phone'
                value={phone}
                onChange={handleTextFieldChange}
              />
            </div>
            <div className='reservations-form-cell'>
              <label htmlFor='size' className='form-input-label'>
                No de personas:
              </label>
              <input
                data-field='size'
                type='number'
                className='form-input'
                id='size'
                value={+size}
                onChange={handleTextFieldChange}
              />
            </div>
            <button
              className='btn-normal btn-reservations-form'
              onClick={saveReservation}>
              Crear Reservación
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
