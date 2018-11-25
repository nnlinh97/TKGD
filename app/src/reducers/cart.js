import * as types from './../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product: product,
                    quantity: quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_FROM_CART:
            index = findIndex(state, product.product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        
        // case types.UPDATE_QUANTITY_IN_CART:
        //     index = findIndex(state, product);
        //     if(index !== -1){
        //         state[index].quantity = quantity;
        //     }
        //     localStorage.setItem('cart', JSON.stringify(state));
        //     return [...state];

        default: return [...state];
    }
}

let findIndex = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].product.id === element.id) {
            return i;
        }
    }
    return -1;
}
export default cart;