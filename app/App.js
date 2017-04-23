import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Home } from "./components/Home";
import { BinarySearch, Instagram, TwitterFeed } from "./components/BinarySearch";
import { NotFound } from "./components/NotFound";
import { LinearSearch } from "./components/LinearSearch";
import { Container } from "./components/Container";
import { NamedComponents, Title, SubTitle } from "./components/NamedComponents";

class App extends Component {
	render() {
		return (
			<Router history={hashHistory} >
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/binary-search' component={BinarySearch} >
						<IndexRoute component={TwitterFeed} />
						<Route path='instagram' component={Instagram} />
					</Route>
					<Route path='/linear-search'  component={LinearSearch} />
					<Route path='/namedComponent' component={NamedComponents}>
						<IndexRoute components={{ title: Title, subTitle: SubTitle }} />
					</Route>
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

export default App;
