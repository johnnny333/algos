import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import {Home} from './components/Home'
import {Address} from './components/Address'
import {NotFound} from './components/NotFound'
import {Nav} from './components/Nav'

class App extends Component {
	render () {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/address' component={Address}>
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
		)
	}
}

const Container = (props) => <div>	<Nav />	{props.children} </div>
	const Instagram = () => <h3> Instagram Feed </h3>
	const TwitterFeed = () => <h3> Twitter Feed </h3>
	const NamedComponents = (props) => (
		<div>
			{props.title}<br />
			{props.subTitle}
		</div>
	)

const Title = () => (
	<h1>Hello from Title Component</h1>
)
const SubTitle = () => (
	<h1>Hello from SubTitle Component</h1>
)

const About = (props) => (
	<div>
		<h3>Welcome to the About Page</h3>
		{props.params.name && <h2>Hello, {props.params.name}</h2>}
	</div>
)

export default App
