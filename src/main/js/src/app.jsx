import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import WeatherMap from "./components/weathermap/weather-map";
import Libraries from "./components/library/libraries";
import Books from './components/books/books';

import "react-web-tabs/dist/react-web-tabs.css";
import "normalize.css";
import "styles/index.scss";

class App extends Component {
	render() {
		return (
			<Tabs defaultTab="map">
				<TabList>
					<Tab tabFor="map">OpenWeatherMap</Tab>
					<Tab tabFor="lib">Libraries</Tab>
					<Tab tabFor="books">Books</Tab>
				</TabList>
				<TabPanel tabId="map">
					<WeatherMap />
				</TabPanel>
				<TabPanel tabId="lib">
					<Libraries />
				</TabPanel>
				<TabPanel tabId="books">
					<Books />
				</TabPanel>
			</Tabs>
		);
	}
}

export default App;
