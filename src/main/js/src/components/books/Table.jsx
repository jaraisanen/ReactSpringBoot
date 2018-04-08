import React from 'react';
import Book from "./Book";

const BookTable = (props) => {
	const bookList = props.data.map(book =>
        <Book key={book._links.self.href}
            book={book}
            deleteBook={props.deleteBook}/>);
		
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

	export default BookTable;
