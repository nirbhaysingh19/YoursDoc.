function PatientSignup() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    gender: '',
    age: '',
    email: '',
    password: ''
  });

  // Similar structure as DoctorSignup with patient-specific fields
  // Add address field instead of specialization/timings
}

// At the end of PatientSignin.js
export default PatientSignup;  // ⬅️ Add this line
