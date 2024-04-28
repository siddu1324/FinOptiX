import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css"; // Assuming your styles are defined here

const DataInputForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle the response from the server here
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error('There was an error uploading the file:', error);
    }
  };

  return (
    <div className="data-input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="csv-upload" className="csv-upload-label">
          Upload CSV
        </label>
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="csv-upload-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataInputForm;
