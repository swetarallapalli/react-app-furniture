import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes, faBars, faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { NavLink, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
const Navbar = () => {
    const cartItems = useSelector(state => state.cartReducer.cartItems)
    const [menuOpen, setMenuOpen] = useState(false)
    const history = useHistory()
    const handleClick = () => {
        history.push("/cart")
    }
    return <div className="navbar">
        <div className="navbar-logo">
            <span><FontAwesomeIcon icon={faCubes} /></span>
            <p>The Store</p>
        </div>
        <div className="navbar-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span><FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /></span>
        </div>
        <div className={menuOpen ? "navbar-links-active" : "navbar-links"}>
            {/* <div className="navbar-links"> */}
            <NavLink to="/" exact activeClassName="active-link" className="nav-link">Home</NavLink>
            <NavLink to="/products" exact activeClassName="active-link" className="nav-link">Products</NavLink>
            <div className="cart" onClick={handleClick}>
                {/* <img src="https://i.pinimg.com/564x/4e/51/1a/4e511adb8ca405f8893af07c9e2b885f.jpg" alt="logo" /> */}
                <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                <p className="count">{cartItems.reduce((acc, curr) => (acc = acc + curr.quantity), 0)}</p>
            </div>
        </div>



    </div>
}

export default Navbar;