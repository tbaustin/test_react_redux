import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

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
        <ul key={book.id}>
          <h2>{book.title}</h2>
          <h2>{book.description}</h2>
          <h2>{book.price}</h2>
          <button className="btn btn-primary">Buy now</button>
        </ul>
      );
    });
  }
  render() {
    return (
      <div className="grid">
        <div id="row1" className="row">
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
