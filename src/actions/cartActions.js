"use strict"

export function addToCart(book) {
  //-->> Cart ACTIONS <<--
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}
