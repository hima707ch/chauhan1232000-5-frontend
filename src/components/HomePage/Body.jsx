import React, { useState } from 'react';
import axios from 'axios';

const Body = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/enquiry', formData);
      alert('Enquiry submitted: ' + response.data.message);
    } catch (error) {
      alert('Failed to submit enquiry: ' + (error.response?.data.error || error.message));
    }
  };

  return (
    <div>
      <h1>Enquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit">Submit Enquiry</button>
        </div>
      </form>
    </div>
  );
};

export default Body;