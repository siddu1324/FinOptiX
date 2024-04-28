import React, { useState } from 'react';
import Papa from 'papaparse';

const DataInputPage = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        setData(results.data);
      },
      header: true,
    });
  };

  return (
    <div>
      <h1>Upload CSV File</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataInputPage;
