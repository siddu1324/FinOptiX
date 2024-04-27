import React from 'react';
import "../styles.css"; 

const SettingsForm = () => {
  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label>
          User Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Notification Settings:
          <input type="checkbox" /> Enable Notifications
        </label>
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
};

export default SettingsForm;
