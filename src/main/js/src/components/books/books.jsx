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
            }
        );
    }

    render() {
        return(
          <div className="centered-container">
              <h2>Books of the database</h2>
                {this.state.books.map((book, id) =>
                    <div key={id}>{book.title}</div> 
                )}
          </div>
    );
}

    
}
