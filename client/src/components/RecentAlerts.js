import React from 'react';
import "../styles.css"; 

const RecentAlerts = () => {
  const alerts = [
    { id: 1, message: "Unusual expense rate detected in April." },
    { id: 2, message: "Revenue growth target achieved in May." }
  ];

  return (
    <div>
      <h2>Recent Alerts</h2>
      {alerts.map(alert => (
        <div key={alert.id}>{alert.message}</div>
      ))}
    </div>
  );
};

export default RecentAlerts;
