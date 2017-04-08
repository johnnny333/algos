import React, { Component } from "react";

export class Address extends Component {
	constructor(props) {
		super(props);
		this.state = { divs: new Array() };

		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
	}

	handleFilterTextInputChange(e) {
		console.log("Value " + e.target.value);

		let lo = 0;
		// let a = [1,2,3,4,5,7,8];
		let a = [];
		let divs = [];
		for (var i = 0; i < 10; i++) {
			a[i] = i;
			divs[i] = <Div index = {i} key = {i} />;
		}
		console.log("divs: " + divs);
		this.setState({
			divs: divs
		});

		let hi = a.length - 1;
		let key = e.target.value;

		while (lo <= hi) {
			// Key is in a[lo..hi] or not present.
			let mid = Math.floor(lo + (hi - lo) / 2);
			if (key < a[mid]) hi = mid - 1;
			else if (key > a[mid]) lo = mid + 1;
			else {
				console.log("mid " + mid);
				return mid;
			}
		}
		return -1;
	}

	render() {
		return (

			<form>
		<br/>

		Number to find: 
		<input 
		type = "number"
		min="1"
		max="10"
		onChange = { this.handleFilterTextInputChange } /> 

		{this.state.divs}
		
		</form>

		);
	}
}

const Div = (props) => <div > {props.index}</div>;
