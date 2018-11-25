import { combineReducers } from 'redux';
import cart from './cart';

const appReducers = combineReducers({
    cart: cart
});

export default appReducers;