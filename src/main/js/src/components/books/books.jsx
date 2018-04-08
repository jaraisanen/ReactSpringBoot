import React, {Component} from "react";
import BookTable from "./Table";

export default class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchBooks();
      

    }

    deleteBook = (book) => {
        fetch(book._links.self.href, {method: 'DELETE'})
            .then(() => this.fetchBooks())
            .catch(err => console.error(err));
    }

    fetchBooks = () => {
        fetch('/api/books')
            .then(result => result.json())
            .then(data => {
                this.setState({
                    books: data._embedded.books,
                    isLoading: false
                })
            })
            .catch(error => console.error(error));
    }
    
    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="centered-container">
                <h2>Books of the database</h2>
                <BookTable data={this.state.books} deleteBook={this.deleteBook}/>
            </div>
        );
    }
}
