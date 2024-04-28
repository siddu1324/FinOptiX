import React, { useState } from 'react';
import "../styles.css"; 

const RecentAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "Unusual expense rate detected in month of April.", type: 'warning', level: 'high', timestamp: '2024-04-20 10:30', details: "Expenses in April increased by 20% compared to March." },
    { id: 2, message: "Revenue growth target achieved in May.", type: 'success', level: 'medium', timestamp: '2024-05-01 09:00', details: "May revenue grew by 15% over the previous month, meeting the target." },
    { id: 3, message: "New user milestone reached.", type: 'info', level: 'low', timestamp: '2024-05-10 15:45', details: "The platform has reached over 10,000 active users."},
    { id: 4, message: "Scheduled system maintenance on June 5th.", type: 'info', level: 'medium', timestamp: '2024-05-15 12:00', details: "System maintenance is scheduled for June 5th between 1:00 AM and 3:00 AM. Expect minor disruptions."},
    { id: 5, message: "Update compliance regulations required.", type: 'warning', level: 'high', timestamp: '2024-05-20 08:00', details: "Compliance regulations have changed and require an update to our processes by the end of Q2."}
  ]);

  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const showDetails = (details) => {
    alert(details);
  };

  return (
    <div className="alerts-container">
      <h2>Recent Alerts</h2>
      {alerts.map(alertData => (
        <div key={alertData.id} className={`alert ${alertData.type} ${alertData.level}`}>
          <p>{alertData.message}</p>
          <small>{alertData.timestamp}</small>
          <div className="button-container">
            <button onClick={() => dismissAlert(alertData.id)}>Dismiss</button>
            <button onClick={() => showDetails(`${alertData.message} - Details: ${alertData.details}`)}>Details</button>
          </div>
        </div>
      ))}
      <div className="alert-legend">
        <p><span className="dot warning high"></span> High Warning (Immediate Attention Needed)</p>
        <p><span className="dot success medium"></span> Medium Success (Positive Outcome)</p>
        <p><span className="dot info low"></span> Low Info (General Information)</p>
        <p><span className="dot info medium"></span> Medium Info (Important Information)</p>
      </div>
    </div>
  );
};

export default RecentAlerts;
