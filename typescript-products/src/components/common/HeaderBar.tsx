import './header.css';
import { Link } from 'react-router-dom';



const NavBar =() => {
    return (

    <div className="navbar-parent">
        <Link to ={"/"}>
        <img className='navbar-logo' src="/logos/H59.svg" alt="Logo" width="50" height="42" />
        </Link>
        <div className='navbar-category'>
        <Link to ={"/new"}>
        <div className="navbar-child">New & Featured</div>
        </Link>
        <Link to ={"/men"}>
        <div className="navbar-child">Men</div>
        </Link>
        <Link to ={"/women"}>
        <div className="navbar-child">Women</div>
        </Link>
        <Link to ={"/kids"}>
        <div className="navbar-child">Kids</div>
        </Link>
        <Link to ={"/sales"}>
        <div className="navbar-child">Sales</div>
        </Link>
        <div>
        <Link to ={"/"}>
        <img className='navbar-cart' src="/icons/shopping-bag.svg" alt="cart" width="18" height="18" />
        </Link>
        </div>
         </div>
    </div>

    );
};

export default NavBar
