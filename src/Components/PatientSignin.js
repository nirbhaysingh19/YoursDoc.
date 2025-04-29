function Patientignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input type="email" placeholder="Email" 
             value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <input type="password" placeholder="Password" 
             value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Sign In</button>
      <p>New Patient? <Link to="/Patient/signup">Sign up here</Link></p>
    </form>
  );
}
