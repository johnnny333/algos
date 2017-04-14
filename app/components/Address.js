import React, { Component } from "react";

export class Address extends Component {
	constructor(props) {
		super(props);
		this.state = { key: 0, lo: 0, hi: 0, mid: -1, a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
		this.handleChange = this.handleChange.bind(this);
		this.indexOf = this.indexOf.bind(this);
		this.increment = this.increment.bind(this);
	}

	handleChange(event) {
		this.setState({ key: event.target.value });
	}

	indexOf() {
		console.log("key: " + this.state.key);

		let a = this.state.a;
		let key = this.state.key;
		let lo = 0;
		let hi = a.length - 1;

		console.log("a: " + a);

		while (lo <= hi) {
			// Key is in a[lo..hi] or not present.
			let mid = Math.floor(lo + (hi - lo) / 2);
			if (key < a[mid]) hi = mid - 1;
			else if (key > a[mid]) lo = mid + 1;
			else { console.log("at place:" + mid);this.setState({mid: mid});return mid; }
		}
		return -1;
	}

	increment() {
		this.setState({
			a: [ ...this.state.a, 4 ]
		});
	}

	render() {

		let mid = this.state.mid;

		return (

			<form>
				Number to find: 
				<input type = "number" min="1" max="10" onChange = { this.handleChange } />
				<button onClick={this.indexOf} >  Activate Lasers </button>
				<button onClick={this.increment} >  Increment Array </button>

				{this.state.a.map(function(object, i){
					if(i == mid){return <div style={{backgroundColor:"red"}} key={i}>{object}</div>;}
					return <div key={i}>{object}</div>;
				})}

			</form>
		);
	}
}