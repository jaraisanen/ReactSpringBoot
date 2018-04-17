import React, {Component} from 'react';
import BookRow from './BookRow';
import {connect} from "react-redux";
import {getBooks} from '../../actions/books/bookActions';
import './Books.css'

class Books extends Component {

    componentDidMount() {
        this.props.dispatch(getBooks());
    }

    render() {
        const {listError, listLoading, listBooks} = this.props;

        if (listError) {
            return <div className="error-message">Error! {listError.message}</div>;
        }

        if (listLoading) {
            return <div className="info-message">Loading...</div>;
        }

        return (
            <div className="centered-container">
                <h2>Books of the database</h2>
                <table>
                    <thead className="table-header">
                        <tr>
                            <th className="one">Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>ISBN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBooks.map(book => 
                        <BookRow key={book._links.self.href} book={book} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    listBooks: state.books.bookList.allBooks,
    listLoading: state.books.bookList.listLoading,
    listError: state.books.bookList.listError,
});

export default connect(mapStateToProps)(Books);

