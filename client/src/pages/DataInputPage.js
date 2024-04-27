import React from 'react';
import "../styles.css"; 

const DataInputPage = () => {
  return (
    <div>
      <h1>Data Input</h1>
      <form>
        <label>
          Revenue:
          <input type="number" name="revenue" />
        </label>
        <label>
          Expenses:
          <input type="number" name="expenses" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button>Upload CSV</button>
    </div>
  );
};

export default DataInputPage;
