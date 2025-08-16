import { Link } from 'react-router-dom';



const NavBar =() => {
    return (

    <div className="flex justify-center items-center w-full font-black">
        <Link to ={"/"}>
        <img className='justify-start' src="/logos/H59.svg" alt="Logo" width="50" height="42" />
        </Link>
        <div className='flex flex-row justify-center items-center gap-4'>
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
