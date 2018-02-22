import React, { Component } from 'react';

export default class WeatherMap extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.fetchWeather = this.fetchWeather.bind(this);
		this.state = {
			city: "",
			weather: [],
			temp: 0,
			url: ""
		};
	}

	handleChange(event) {
		this.setState({ city: event.target.value });
	}

	fetchWeather() {
		let cityUrl =
			"http://api.openweathermap.org/data/2.5/weather?q=" +
			this.state.city +
			"&APPID=0ee85dea68da50bd0247431139f0237c&units=metric";
		fetch(cityUrl)
			.then(result => result.json())
			.then(result =>
				this.setState({
					city: this.state.city,
					weather: result.weather[0],
					temp: result.main.temp,
					url:
						"http://openweathermap.org/img/w/" + result.weather[0].icon + ".png"
				})
			);
	}

	render() {
		return (
			<div className="centered-container">
				<p>City: {this.state.city}</p>
				<p>Temperature: {this.state.temp} Celsius</p>
				<p>Weather: {this.state.weather.main}</p>
				<img className="weather-img" alt="weathericon" src={this.state.url} />
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button onClick={this.fetchWeather}>Search</button>
			</div>
		);
	}
}
