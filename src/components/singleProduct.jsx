import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/reducers/cartReducer"

const SingleProduct = ({ title, img, price, id }) => {

    const dispatch = useDispatch()
    const handleCart = (id) => {
        dispatch(addToCart(id));
    }
    return <div className="single-product">
        <img src={img} />
        <div className="product-details">
            <div><h4>{title}</h4> <p>${price}</p></div>
            <button onClick={() => handleCart(id)}>Add to cart</button>
        </div>
        <button className="details-button">Details</button>
    </div>

}
export default SingleProduct;