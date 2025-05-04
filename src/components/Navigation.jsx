import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;