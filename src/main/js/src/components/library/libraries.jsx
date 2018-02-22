import React, { Component } from 'react';
import Library from './library';
import Table from './table';

class Libraries extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.fetchLibraries = this.fetchLibraries.bind(this);
		this.state = {
			city: "",
			libraryData: [],
			onClicked: false
		};
	}

	handleChange(event) {
		this.setState({ city: event.target.value });
	}

	render() {	
		const clickedState = this.state.onClicked;
		let table = null;
			
		if (clickedState) {
			table = <Table data={this.state.libraryData} />
		}

		return (
			<div className="centered-container">
				<h2>Libraries in Finland</h2>
				<p>City: {this.state.city}</p>
				<div className="search-container">
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button onClick={this.fetchLibraries}>Search</button>
				</div>
				{table}
			</div>
		);
	}

	fetchLibraries() {
		const cityUrl =
			"https://api.kirjastot.fi/v3/organisation?city.name=" + this.state.city;
		fetch(cityUrl)
			.then(result => result.json())
			.then(nested => {
				this.setState({
					onClicked: true,
					libraryData: nested.items.map((library, key) =>
						<Library key={key} name={library.name.fi} url={library.homepage.fi} />
					)
				})		
			})
		}
}

export default Libraries;
