import React from 'react';

const Table = (props) => 
<table>
		<thead>
				<tr>
						<th>Library name</th>
						<th>Url</th>
				</tr>
		</thead>
		<tbody>{props.data}</tbody>
</table>

export default Table;
