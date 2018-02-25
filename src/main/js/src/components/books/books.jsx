import React, { Component } from "react";

export default class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: false
        }    
    }

    componentDidMount() {
        fetch('http://localhost:8080/books')
        .then(result => result.json())
        .then(data => {
            this.setState({
                books: data,
                isLoading: false
                })
        })
        .catch(error => console.error(error)
        );
    }

    render() {
        return(
          <div className="centered-container">
              <h2>Books of the database</h2>
              <table>
                   <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>ISBN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.books.map((book, id) =>
                        <tr key={id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.isbn}</td>
                                <td>{book.price}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
          </div>
    );
}

    
}
