import React from "react";

export class FibonnaciSequence extends React.Component {

	constructor(props) {
		super(props);
		this.state = { key: 2, n: 2, a: 1, b: 0 };
		this.handleChange = this.handleChange.bind(this);
		this.fibonnaci = this.fibonnaci.bind(this);
	}

	handleChange(event) {
		this.setState({key: event.target.value, n: event.target.value, a: 1, b: 0});
	}

	fibonnaci() {

		let [a, b, n] = [this.state.a, this.state.b, this.state.n];
		
		if (n > 0) {
			[a, b] = [b + a, a];

			this.setState({n: this.state.n -1, a: a, b:b });
		}				
		console.log("n: " + n);
		console.log("key: " + b);
		return b;
	}



	render() {
		return (

			<div>
				<input type = "number" value={this.state.key} min="2" max="30" 
					onChange = { this.handleChange } />
				<button onClick = { this.fibonnaci } 
					disabled = {this.state.n == 0 ? true : false }>Fibonnaci </button>
			</div>	

		);
	}
}