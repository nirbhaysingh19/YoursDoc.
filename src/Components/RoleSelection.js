import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-selection">
      <h2>Are you a Patient or Doctor?</h2>
      <button onClick={() => navigate('/patient/signin')}>Patient</button>
      <button onClick={() => navigate('/doctor/signin')}>Doctor</button>
    </div>
  );
}
export default RoleSelection;
