function DoctorSignup() {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    contact: '',
    timings: '',
    gender: '',
    age: '',
    email: '',
    password: ''
  });

  return (
    <form>
      <input type="text" placeholder="Full Name" value={formData.name} 
             onChange={(e) => setFormData({...formData, name: e.target.value})} />

      <input type="text" placeholder="Specialization" 
             value={formData.specialization} /* ... */ />

      <input type="tel" placeholder="Contact" /* ... */ />
      
      <select value={formData.gender} /* ... */ >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="email" placeholder="Email" /* ... */ />
      <input type="password" placeholder="Password" /* ... */ />

      <button type="submit">Register</button>
    </form>
  );
}
