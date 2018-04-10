import React, { Component } from 'react'; 

export default class Book extends Component {

    handleDelete = () => {
        this.props.deleteBook(this.props.book);
} 

    render() {
        return(
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.year}</td>
                <td>{this.props.book.isbn}</td>
                <td>{this.props.book.price}</td>
                <td>
                <button onClick={this.handleDelete}>delete</button>
                </td>
            </tr>
        );
    }
}




