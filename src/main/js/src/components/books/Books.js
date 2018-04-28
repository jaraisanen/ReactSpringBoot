import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import BookRow from './BookRow';
import {getBooks} from '../../actions/books/BookActions';
import './Books.css'

class Books extends Component {

    componentDidMount() {
        this.props.dispatch(getBooks());
    }

    render() {
        const {listError, listLoading, listBooks} = this.props;

        if (listError) {
            return <div className="error-message">
                <p>Error! {listError.message}</p>
            </div>;
        }

        if (listLoading) {
            return <div className="info-message">
                <p>Loading...</p>
            </div>;
        }

        return (
            <div className="centered-container">
                <h2 className="inline-element">Books of the database
                </h2>
                <span><Link className="blue-button" to="/books/newbook">Add book</Link></span>
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
                        {listBooks.map(book => <BookRow key={book._links.self.href} book={book}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    listBooks: state.books.bookList.allBooks,
    listLoading: state.books.bookList.listLoading,
    listError: state.books.bookList.listError
});

export default connect(mapStateToProps)(Books);
