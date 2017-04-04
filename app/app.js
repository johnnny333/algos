import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import {Home} from "./components/Home";
import {Address, Instagram, TwitterFeed} from "./components/Address";
import {NotFound} from "./components/NotFound";
import {About} from "./components/About";
import {Container} from "./components/Container";
import {NamedComponents, Title, SubTitle} from "./components/NamedComponents";

class App extends Component {
	render () {
		return (
			<Router history={hashHistory} >
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/address' component={Address} >
						<IndexRoute component={TwitterFeed} />
						<Route path='instagram' component={Instagram} />
					</Route>
					<Route path='/about(/:name)'  component={About} />
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