import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert`} style={{ width: '240px' }}>
        <i class='bx bxs-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
