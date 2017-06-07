"use strict"
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      let book = action.payload;
      let newState = {...state, [book._id]: book};
      return newState;
    break;
    case "DELETE_CART_ITEM":
      return _.omit(state, action.payload);
    break;
    case "UPDATE_CART":
    let foundBook = _.get(state, action._id);
    //Stuck here
    let editedBook = {...foundBook, quantity: foundBook.quantity + action.unit};
    return {...state, editedBook};
    console.log(state);
    break;
  }
  return state;
}
