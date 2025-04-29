function DoctorSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input type="email" placeholder="Email" 
             value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <input type="password" placeholder="Password" 
             value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Sign In</button>
      <p>New doctor? <Link to="/doctor/signup">Sign up here</Link></p>
    </form>
  );
}
export default DoctorSignin;
