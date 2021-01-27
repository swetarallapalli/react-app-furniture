
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getCartItems } from "../store/reducers/cartReducer"
import { Link } from "react-router-dom"
import SingleCartItem from "./singleCartItem"
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems)
    useEffect(() => {
        dispatch(getCartItems())
    }, [])
    if (cartItems.length < 1) return <div className="empty-cart"><h1>There are no items in the cart</h1>
        <Link to="/products">SHOP NOW</Link></div>
    return <div className="cart-items">
        <div class="cart-table-header">
            <div className="col">Item</div>
            <div className="col">Price</div>
            <div className="col">Quantity</div>
            <div className="col">Subtotal</div>
            <div className="col"></div>
        </div>
        <div className="row-seperator-before"></div>
        {
            cartItems.map(c => <SingleCartItem item={c} />)
        }
        <div className="row-seperator-after"></div>
        <p className="total-price">Total Price : <span>${cartItems.reduce((acc, curr) => (acc = acc + (curr.quantity * curr.price)), 0)}</span></p>
    </div >
}

export default Cart