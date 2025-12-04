import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='Nav-Left'>
        <h2 className='logoName'>TrendingsShop</h2>
      </div>

      <ul className='Nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>

      <div className='nav-right'>
        <span className='Logo-icon'>☀</span>
        <span className='Logo-icon'>🛒</span>
        <span className='Logo-icon'>👤</span>

      </div>
    </nav>
  );
}