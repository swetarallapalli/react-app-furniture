import data from "../../data"


export const addToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        payload: { id }
    }
}
export const getCartItems = () => {
    return {
        type: "GET_CART_ITEMS",
    }
}

export const quantityIncrement = (id) => {
    return {
        type: "QUANTITY_INCREMENT",
        payload: {
            id
        }
    }
}

export const quantityDecrement = (id) => {
    return {
        type: "QUANTITY_DECREMENT",
        payload: {
            id
        }
    }
}

export const deleteCartItem = (id) => {
    return {
        type: "DELETE_CART_ITEM",
        payload: {
            id
        }
    }
}

const initialState = {
    products: data.products,
    cartItems: [],
    // cartItems: [{ id: 1, title: "Single Bed", price: 499.99, category: "Bedroom", company: "IKEA", freeShipping: false, inStock: "inStock", img: "https://i.pinimg.com/564x/41/8c/30/418c3081b3c59b02860a83d334e6622f.jpg", quantity: 1 },]
}

const cartReducer = (state = initialState, action) => {
    let tempProducts = [...state.products];
    let tempCart = [...state.cartItems]
    switch (action.type) {
        case "GET_CART_ITEMS":
            return state;

        case "ADD_TO_CART":

            let product = tempProducts.find(p => p.id === action.payload.id)
            let cartproduct = tempCart.find(p => p.id === action.payload.id)
            if (cartproduct) {
                const index = tempCart.indexOf(cartproduct)
                cartproduct.quantity += 1
                tempCart[index] = { ...cartproduct }
                return { ...state, cartItems: tempCart }
            }
            else {
                return { ...state, cartItems: [...state.cartItems, { ...product, quantity: 1 }] }
            }

        case "QUANTITY_INCREMENT":
            // let tempCart2 = [...state.cartItems]
            const cartItem = tempCart.find(c => c.id === action.payload.id)
            const index = tempCart.indexOf(cartItem)
            cartItem.quantity += 1
            tempCart[index] = cartItem
            return { ...state, cartItems: tempCart }
        case "QUANTITY_DECREMENT":
            // let tempCart3 = [...state.cartItems]
            let item = tempCart.find(c => c.id === action.payload.id)
            const i = tempCart.indexOf(item)
            item.quantity -= 1
            tempCart[i] = item
            return { ...state, cartItems: tempCart };
        case "DELETE_CART_ITEM":
            return {
                ...state, cartItems: state.cartItems.filter(c => c.id !== action.payload.id)
            }
        default:
            return state
    }

}

export default cartReducer


