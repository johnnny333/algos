import React from "react";

export class BinarySearch extends React.Component {

	constructor(props) {
		let arrLength = 32, initialHint = "Pick a number and click 'find' to find your number.";

		super(props);
		this.state = { key: 0, lo: 0, hi: arrLength, mid: -1, a: Array.from({ length: arrLength }, (val, key) => key)  , 
			hint: initialHint, initialHint:initialHint, arrLength: arrLength };
		this.handleChange = this.handleChange.bind(this);
		this.indexOf = this.indexOf.bind(this);
	}

	handleChange(event) {
		this.setState({mid: -1, hi: this.state.arrLength, lo: 0, hint: this.state.initialHint, 
			key: event.target.value});
	}

	indexOf() {
		let a = this.state.a, hi = this.state.hi, key = this.state.key, lo = this.state.lo;

		if (lo <= hi) {
			let mid = Math.floor(lo + (hi - lo) / 2);
			if (key < a[mid]) {hi = mid - 1; 
				this.setState({hi: hi, hint: "Seeked number is smaller than half of current array [" + lo + "..." + hi + "]"});}
			else if (key > a[mid]) {lo = mid + 1; 
				this.setState({lo: lo, hint: "Seeked number is bigger than half of current array [" + lo + "..." + hi + "]"});}
			else {
				this.setState({mid: mid, hint: "Your number '" + mid + "' was found!"});
			}
		}
	}

	render() {
		let mid = this.state.mid, lo = this.state.lo, hi = this.state.hi;

		return (
			<div>
				<form onSubmit={e => (e.preventDefault())}>
					Number to find: 
					<input type = "number" value={this.state.key} min="0" max={this.state.arrLength - 1} 
						onChange = { this.handleChange } />

					<button onClick={this.indexOf}>Find</button>
					<div>{this.state.hint}</div>
				</form>	
				
				{/* Render spans representing array elements */}	
				{this.state.a.map(function(object, i){

					if(i == mid){return <span className="found" key={i}>{object}</span>;}
					if(i >= lo && i <= hi){return <span key={i} className="selected" >{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
			</div>
		);
	}
}