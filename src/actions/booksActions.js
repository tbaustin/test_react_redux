"use strict"

export function getBooks() {
  return {
    type: "GET_BOOK",
    payload: [{
      id: 2314123412,
      title: 'this is the book title',
      description: 'book desc',
      price: 33.33
    },
    {
      id: 23123423246554,
      title: 'this is the book title for 23',
      description: 'book desc 23',
      price: 24.23
    },
    {
      id: 2234566787908,
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
