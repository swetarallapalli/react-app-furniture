import data from "../../data"

export const getProducts = () => {
    return {
        type: "GET_PRODUCTS"
    }
}
const initialState = {
    products: [...data.products]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state }
        default:
            return state
    }

}

export default productsReducer