import React, { Component} from 'react';
import Book from "./book";

export default class BookTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const bookList = this.props.data.map(book =>
            <Book key={book._links.self.href}
                book={book}
                deleteBook={this.props.deleteBook}/>);
		
		return(
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>Year</th>
						<th>ISBN</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{bookList}</tbody>
			</table>
		);
	}
}
