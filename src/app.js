"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBook, updateBook} from './actions/booksActions';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>
, document.querySelector('.app'));
