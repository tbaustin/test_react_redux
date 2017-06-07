import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }
  componentDidMount() {
    this.props.getBooks();
  }
  renderList() {
    return _.map(this.props.books, (book, key) => {
      return(
        <div className="col-xs-12 col-sm-6 col-md-4" key={book._id}>
          <BookItem
            _id={book._id}
            title={book.title}
            description={book.description}
            price={book.price}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Cart />
        </div>
        <div id="row1" className="row">
          <div className="col-xs-12 col-sm-6">
            <BooksForm />
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, {getBooks})(BooksList);
