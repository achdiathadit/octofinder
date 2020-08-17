import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert`} style={{ width: '240px' }}>
        <i className='bx bxs-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
