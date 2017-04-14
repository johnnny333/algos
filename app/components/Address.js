import React, { Component } from "react";

export class Address extends Component {
	constructor(props) {
		super(props);
		this.state = { key: 0, lo: 0, hi: 10, mid: -1, a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
		this.handleChange = this.handleChange.bind(this);
		this.clear = this.clear.bind(this);
		this.indexOf = this.indexOf.bind(this);
	}

	handleChange(event) {
		this.setState({ key: event.target.value });
	}

	indexOf() {
		console.log("key: " + this.state.key);

		let a = this.state.a;
		let hi = this.state.hi;
		let key = this.state.key;
		let lo = this.state.lo;

		console.log("lo: " + lo + " hi: " + hi);

		if (lo <= hi) {
			// Key is in a[lo..hi] or not present.
			let mid = Math.floor(lo + (hi - lo) / 2);
			console.log("mid: " + mid);
			if (key < a[mid]) {hi = mid - 1; console.log("smaller, hi:" + hi);this.setState({hi: hi});}
			else if (key > a[mid]) {lo = mid + 1;console.log("bigger, lo" + lo); this.setState({lo: lo});}
			else { console.log("at place:" + mid); this.setState({mid: mid});return mid; }
		}
		return -1;
	}

	clear(){
		this.setState({mid: -1, hi:10, lo: 0});
	}

	render() {

		let mid = this.state.mid;
		let lo = this.state.lo;
		let hi = this.state.hi;

		return (

			<form>
				Number to find: 
				<input type = "number" min="1" max="10" onChange = { this.handleChange } />
				<button onClick={this.indexOf} >  Activate Lasers </button>
				<button onClick={this.clear} >  Clear </button>

				{this.state.a.map(function(object, i){

					if(i == mid){return <div style={{backgroundColor:"yellow"}} key={i}>{object}</div>;}
					if(i >= lo && i <= hi){return <div key={i} style={{backgroundColor:"grey"}}>{object}</div>;}
					return <div key={i} >{object}</div>;
				})}

			</form>
		);
	}
}