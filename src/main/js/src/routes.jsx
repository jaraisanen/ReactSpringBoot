import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import WeatherMap from './components/weathermap/weather-map';
import Libraries from './components/library/libraries';
import Books from './components/books/books';
import 'styles/index.scss';

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/map" component={WeatherMap} />
			<Route path="/lib" component={Libraries} />
			<Route path="/books" component={Books} />
		</div>
	</Router>
);

export default Routes;
