import React, { Component } from "react";

export class BinarySearch extends Component {

	constructor(props) {
		let arrLength = 32, initialHint = "Pick a number and click 'find' to find your number.";

		super(props);
		this.state = { key: 0, lo: 0, hi: arrLength, mid: -1, a: Array.from({ length: arrLength }, (val, key) => key) , 
			hint: initialHint, initialHint:initialHint, arrLength: arrLength };
		this.handleChange = this.handleChange.bind(this);
		this.clear = this.clear.bind(this);
		this.indexOf = this.indexOf.bind(this);
	}

	handleChange(event) {
		console.log("klucz: " + event.target.value);
		this.clear(event.target.value);
	}

	indexOf() {
		console.log("key: " + this.state.key);

		let a = this.state.a;
		let hi = this.state.hi;
		let key = this.state.key;
		let lo = this.state.lo;

		console.log("lo: " + lo + " hi: " + hi);

		if (lo <= hi) {
			let mid = Math.floor(lo + (hi - lo) / 2);
			console.log("mid: " + mid);
			if (key < a[mid]) {hi = mid - 1; console.log("smaller, hi:" + hi);this.setState({hi: hi, hint: "Seeked number is smaller than half of current array [" + lo + "..." + hi + "]"});}
			else if (key > a[mid]) {lo = mid + 1;console.log("bigger, lo" + lo); this.setState({lo: lo, hint: "Seeked number is bigger than half of current array [" + lo + "..." + hi + "]"});}
			else {console.log("at place:" + mid); 
				this.setState({mid: mid});
				this.setState({hint: "Your number '" + mid + "' was found!"});
				return mid; }
		}
		return -1;
	}

	clear(keyInput){
		this.setState({mid: -1, hi: this.state.arrLength, lo: 0});
		this.setState({key: keyInput });
		this.setState({hint: this.state.initialHint});
	}

	render() {

		let mid = this.state.mid;
		let lo = this.state.lo;
		let hi = this.state.hi;

		return (

			<div>
				Number to find: 
				<input type = "number" value={this.state.key} min="0" max={this.state.arrLength - 1} onChange = { this.handleChange } />
				<button onClick={this.indexOf} >  Find </button>
				<div>{this.state.hint}</div>

				<div>
				{this.state.a.map(function(object, i){

					if(i == mid){return <span className="found" key={i}>{object}</span>;}
					if(i >= lo && i <= hi){return <span key={i} className="selected" >{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
				</div>
			</div>
		);
	}
}