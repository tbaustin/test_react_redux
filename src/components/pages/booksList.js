import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {getBooks} from '../../actions/booksActions';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }
  componentDidMount() {
    this.props.getBooks();
  }
  renderList() {
    console.log(this.props.books);
    return _.map(this.props.books, book => {
      return(
        <ul key={book.id}>
          <h2>{book.id}</h2>
          <h2>{book.title}</h2>
          <h2>{book.description}</h2>
          <h2>{book.price}</h2>
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderList()}
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
