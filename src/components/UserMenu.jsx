import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice.js';

const UserMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px', backgroundColor: '#fff' }}>
      <p style={{ color: '#555' }}>{user.email}</p>
      <button
        onClick={handleLogout}
        style={{ padding: '5px 10px', backgroundColor: '#ff0000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;