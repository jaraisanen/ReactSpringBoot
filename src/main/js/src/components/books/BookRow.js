import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteBook} from '../../actions/books/BookActions';

class BookRow extends Component {

    onDeleteClick(bookId) {
        this.props.dispatch(deleteBook(bookId, this.props.history));
    }

    render() {
        return(
            <tr className="table-row">
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.year}</td>
                <td>{this.props.book.isbn}</td>
                <td>{this.props.book.price}</td>
                <td>
                    <button className="red-button" onClick={() => this.onDeleteClick(this.props.book._links.self.href)}>Delete</button>
                </td>
            </tr>
        )}
}

const mapStateToProps = state => ({
    deleteBook: state.books.bookDelete.deleteBook,
    deleteLoading: state.books.bookDelete.deleteLoading,
    deleteError: state.books.bookDelete.deleteBookError,
});

export default connect(mapStateToProps)(BookRow);