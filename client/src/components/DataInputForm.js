import React, { useState } from 'react';
import "../styles.css"; 

const DataInputForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    monthYear: '',
    revenue: '',
    expenses: '',
    profit: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle submitting these values to the server.
    console.log('Submitting form data:', formData);
    // Reset form or give feedback to user here.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Month-Year:
        <input
          type="month"
          name="monthYear"
          value={formData.monthYear}
          onChange={handleChange}
        />
      </label>
      <label>
        Revenue:
        <input
          type="number"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
        />
      </label>
      <label>
        Expenses:
        <input
          type="number"
          name="expenses"
          value={formData.expenses}
          onChange={handleChange}
        />
      </label>
      <label>
        Profit:
        <input
          type="number"
          name="profit"
          value={formData.profit}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataInputForm;
