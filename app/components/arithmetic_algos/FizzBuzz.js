import React from "react";

export class FizzBuzz extends React.Component {

	constructor(props) {
		super(props);
		this.state = {i: null, text: ""};
		this.fizzBuzz = this.fizzBuzz.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this) ;
	}

	increment(){
		this.setState({i: this.state.i < 20 ? this.state.i + 1 : this.state.i}, this.fizzBuzz);
	}

	decrement(){
		this.setState({i: this.state.i != 0 ? this.state.i - 1 : this.state.i}, this.fizzBuzz);	
	}

	fizzBuzz(){

		let i = this.state.i;

		if (i % 15 == 0) {
			console.log("FizzBuzz");
			this.setState({text: "FizzBuzz"});
		}
		//for multiples of three print “Fizz” instead of the number
		else if (i % 3 == 0) {
			console.log("Fizz");
			this.setState({text: "Fizz"});
		}
		// for the multiples of five print “Buzz”
		else if (i % 5 == 0) {
			console.log("Buzz");
			this.setState({text: "Buzz"});
		}
		else {
			console.log("end" + i);
			this.setState({text: ""});
		}
	}
	
	render() {
		return (

			<div>
				<button onClick={this.increment} 
					disabled = {this.state.i < 20 ? false : true}>FizzBuzz++</button>
				<button onClick={this.decrement}
					disabled = {this.state.i == null || this.state.i == 0 ? true: false} > FizzBuzz--</button>

				<p> {this.state.i} </p>
				<p> {this.state.text} </p>
			</div>	

		);
	}
}