import {Link} from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='Nav-Left'>
                <h2 className='logoName'>TrendingsShop</h2>
            </div>
            <ul className='Nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            
            </ul>
            <div className='nav-left'>
              <FontAwesomeIcon className='Logo-icon' icon="fa-solid fa-sun" />
              <FontAwesomeIcon className='Logo-icon' icon="fa-solid fa-cart-arrow-down" />
              <FontAwesomeIcon className='Logo-icon' icon="fa-solid fa-person" />
            </div>
        </nav>
    )
}