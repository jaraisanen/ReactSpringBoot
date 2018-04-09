import React, {Component} from "react";
import BookTable from "./Table";

export default class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    deleteBook = (book) => {
        fetch(book._links.self.href, {method: 'DELETE'})
            .then(() => this.fetchBooks())
            .catch(err => console.error(err));
    }

    fetchBooks = () => {
        fetch('/books')
            .then(result => result.json())
            .then(data => {
                console.log("data")
                console.log(data)
                this.setState({
                    books: data,
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
