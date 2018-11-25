import * as types from './../constants/ActionTypes';


export const addToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: 1
    }
}

export const deleteProductFromCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_FROM_CART,
        product: product
    }
}