import React, { useState, useEffect } from 'react';
import "../styles.css"; 

const ReportsPage = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Annual Financial Report 2023' },
    { id: 2, title: 'Expense Report Q1 2023' }
  ]);

  const handleGenerateReport = () => {
    // This function would generate a new report.
    const newReport = { id: reports.length + 1, title: `New Report ${reports.length + 1}` };
    setReports([...reports, newReport]);
    console.log('Generating new report...');
  };

  const handleDownload = (reportId) => {
    // This function would handle the download logic.
    console.log('Downloading report with ID:', reportId);
  };

  return (
    <div>
      <h1>Reports</h1>
      <button onClick={handleGenerateReport}>Generate New Report</button>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            {report.title} <button onClick={() => handleDownload(report.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
