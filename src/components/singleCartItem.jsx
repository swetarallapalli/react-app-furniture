import { useDispatch } from "react-redux"
import { deleteCartItem, quantityDecrement, quantityIncrement } from "../store/reducers/cartReducer";

const SingleCartItem = ({ item }) => {
    const dispatch = useDispatch()
    const { title, price, quantity, id } = item;
    const handleQuantityDecrement = (id) => {
        dispatch(quantityDecrement(id))
    }
    const handleQuantityIncrement = (id) => {
        dispatch(quantityIncrement(id))
    }
    const handleDelete = (id) => {
        dispatch(deleteCartItem(id))
    }
    return <><div className="cart-table-row">
        <div class="col">{title}</div>
        <div class="col">${price}</div>
        <div class="col"><button className="quantity-btn" onClick={() => handleQuantityDecrement(id)} disabled={quantity <= 1 ? true : false}>-</button> {quantity} <button className="quantity-btn" onClick={() => handleQuantityIncrement(id)}>+</button></div>
        <div class="col">${Math.round((quantity * price) * 100) / 100}</div>
        {/* <div class="col">${(quantity * price)}</div> */}
        <div class="col"><button class="delete-button" onClick={() => handleDelete(id)}>Remove</button></div>
    </div>
    </>
}

export default SingleCartItem