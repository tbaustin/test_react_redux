"use strict"
import _ from 'lodash';

export default function(state={cart:{}}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return {cart:{...state.cart, ...action.payload}};
    break;
  }
  return state;
}
