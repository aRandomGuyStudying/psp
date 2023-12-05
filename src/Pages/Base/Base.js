import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Base.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Home from '../Home/Home';
import Toast from '../../Components/Toast/Toast';

const Base = (props) => {
  const [toastState, setToastState] = useState({
    message: '',
    toastState: '',
    progressState: '',
  });
  const [userState, setUserState] = useState({});

  const showToast = (incomingMessage) => {
    setToastState(() => {
      return {
        message: incomingMessage,
        toastState: 'active',
        progressState: 'active',
      };
    });
    setTimeout(() => {
      setToastState(() => {
        return {
          message: incomingMessage,
          toastState: '',
          progressState: 'active',
        };
      });
    }, 5000);

    setTimeout(() => {
      setToastState(() => {
        return {
          message: '',
          toastState: '',
          progressState: '',
        };
      });
    }, 5300);
  };

  const appState = {
    userControl: [userState, setUserState],
    showToast: showToast,
  };

  const currentRoute = useLocation();

  const getUserStateHandler = () => {
    return userState;
  };

  const renderHome = () => {
    if (currentRoute.pathname === '/')
      return (
        <div className='base-page'>
          <Header getUserState={getUserStateHandler} />
          <Home />
          <Footer />
          <Toast
            message={toastState.message}
            toastEnabler={toastState.toastState}
            progressState={toastState.progressState}
          />
        </div>
      );
    else if (props.children) {
      return (
        <div className='base-page'>
          <Header getUserState={getUserStateHandler} />
          {props.children}
          <Footer />
        </div>
      );
    } else
      return (
        <div className='base-page'>
          <Header getUserState={getUserStateHandler} />
          <Outlet context={appState} />
          <Footer />
          <Toast
            message={toastState.message}
            toastEnabler={toastState.toastState}
            progressState={toastState.progressState}
          />
        </div>
      );
  };

  return renderHome();
};

export default Base;
