import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Arrow icons
import { Link, useNavigate } from "react-router-dom"
 import { useCart } from "../../context/cartContext";
import Logo from './logo'
import Home from './home'
import About from "./about"
import Contact from "./contact"
import Cart from "./cart"
import Products from "./products/products";
import FrontHome from "./fronthome";
import Fronthomedetails from "./fronthomedetails";

function Navbar() {
    
    const navigate = useNavigate()
    const {cartItems}=useCart();
    const totalItems= cartItems.reduce((total,item)=>total+item.quantity,0);
    return (
        <>
            <nav className='bg-color'>

                <div className="left-section">
                    <div className="nav-arrows">
                        <button onClick={() => navigate(-1)} className="arrow-btn" title="Go Back">
                            <FiChevronLeft size={22} />
                        </button>
                        {/* <button onClick={() => navigate(1)} className="arrow-btn" title="Go Forward">
                            <FiChevronRight size={22} />
                        </button> */}
                    </div>

                    <Logo />
                </div>
                {/* <div className="search-container">
                    <input type="text" placeholder="products..." value={searchTerm} onChange={handleSearchChange}/>
                </div> */}

                <div className='nav1'>
                    <Link to={'/homepage'}>Home</Link>
                    <Link to={'/productpage'}>Products</Link>
                    <Link to={'/aboutpage'}>About</Link>
                    <Link to={'/contactpage'}>Contact</Link>
                    <Link to='/cartpage' className="cart-link">Cart{totalItems>0 &&<span className="cart-count">totalItems</span>}</Link>
                </div>

            </nav>
           
        </>
    )
}

export default Navbar






