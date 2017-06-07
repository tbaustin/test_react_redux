"use strict"
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import booksReducer from './booksReducers';
import cartReducers from './cartReducers';

export default combineReducers({
  form: formReducer,
  books: booksReducer,
  cart: cartReducers
});
