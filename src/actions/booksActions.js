"use strict"


export function postBooks(values) {
  return {
    type: "POST_BOOKS",
    payload: values
  }
}

export function getBooks() {
  return {
    type: "GET_BOOK",
    payload: [{
      _id: 1,
      title: 'this is the book title',
      description: 'book desc',
      price: 33.33
    },
    {
      _id: 2,
      title: 'this is the book title for 23',
      description: 'book desc 23',
      price: 24.23
    },
    {
      _id: 3,
      title: 'this is the asdfasdfook titleasdfr 2adsf',
      description: 'basdfk desc 23',
      price: 2324.23
    }]
  }
}

export function deleteBook(id) {
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}

export function updateBook(book) {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
