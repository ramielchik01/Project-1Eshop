import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCartArrowDown, faPerson } from '@fortawesome/free-solid-svg-icons';

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

      <div className='nav-left'>
        <FontAwesomeIcon className='Logo-icon' icon={faSun} />
        <FontAwesomeIcon className='Logo-icon' icon={faCartArrowDown} />
        <FontAwesomeIcon className='Logo-icon' icon={faPerson} />
      </div>
    </nav>
  );
}