import React from 'react';
import './Toast.css';

const Toast = (props) => {
  return (
    <div className={`toast ${props.toastEnabler}`}>
      <div className='toast-content'>
        <div className='toast-message'>
          <p>{props.message}</p>
        </div>
      </div>
      <div className={`progress ${props.progressState}`}></div>
    </div>
  );
};

export default Toast;
