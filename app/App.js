import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Home } from "./components/navigation/Home";
import { NotFound } from "./components/navigation/NotFound";
import { Container } from "./components/navigation/Container";

import { BinarySearch } from "./components/searching/BinarySearch";
import { LinearSearch } from "./components/searching/LinearSearch";

import { BubbleSort } from "./components/sorting/BubbleSort";
import { SelectionSort } from "./components/sorting/SelectionSort";
import { InsertionSort } from "./components/sorting/InsertionSort";

import { EuclidianAlgorithm } from "./components/arithmetic_algos/EuclidianAlgorithm";
import { FizzBuzz } from "./components/arithmetic_algos/FizzBuzz";

class App extends Component {
	render() {
		return (
			<Router history={hashHistory} >
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/binary-search' component={BinarySearch} />
					<Route path='/linear-search'  component={LinearSearch} />
					<Route path='/bubble-sort' component={BubbleSort} />
					<Route path='/selection-sort' component={SelectionSort} />
					<Route path='/insertion-sort' component={InsertionSort} />
					<Route path='/euclidian-algorithm' component={EuclidianAlgorithm} />
					<Route path='/fizz-buzz' component={FizzBuzz} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

export default App;