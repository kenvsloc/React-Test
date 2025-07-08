import './header.css';
import { Link } from 'react-router-dom';



const NavBar =() => {
    return (

    <div className="navbar-parent">
        <Link to ={"/"}>
        <img className='navbar-logo' src="/logos/H59.svg" alt="Logo" width="50" height="42" />
        </Link>
        <div className='navbar-category'>
        <Link to ={"/products"}>
        <div className="navbar-child">New & Featured</div>
        </Link>
        <Link to ={"/products"}>
        <div className="navbar-child">Men</div>
        </Link>
        <Link to ={"/products"}>
        <div className="navbar-child">Women</div>
        </Link>
        <Link to ={"/products"}>
        <div className="navbar-child">Kids</div>
        </Link>
        <Link to ={"/products"}>
        <div className="navbar-child">Sales</div>
        </Link>
         </div>
    </div>

    );
};

export default NavBar
