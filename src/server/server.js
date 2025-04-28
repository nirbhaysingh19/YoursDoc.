const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


app.use(express.json());

// Test doctors data
const doctors = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  { id: 3, name: 'Dr. Emily Johnson', specialization: 'Neurologist' }
];

// API Route: Get all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
