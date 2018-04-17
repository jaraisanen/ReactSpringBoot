import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteBook} from '../../actions/books/bookActions';

class BookRow extends Component {

    onDeleteClick(bookId) {
        this.props.dispatch(deleteBook(bookId));
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
    deleteBooks: state.books.bookDelete.deleteBook,
    deleteLoading: state.books.bookDelete.deleteLoading,
    deleteError: state.books.bookDelete.deleteBookError,
});

export default connect(mapStateToProps)(BookRow);