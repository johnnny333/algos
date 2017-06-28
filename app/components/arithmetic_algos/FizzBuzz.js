import React from "react";
import { Button, PageHeader, Well } from "react-bootstrap";

export class FizzBuzz extends React.Component {

	constructor(props) {
		document.title = "FizzBuzz";

		let initialHint = `Replaces any number divisible by three with the word "fizz",
			and any number divisible by five with the word "buzz".`;

		super(props);
		this.state = {i: null, text: "", hint: initialHint, initialHint:initialHint};
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
			this.setState({text: "FizzBuzz", hint: `i (${i}) is divisable by 3 (i % 3 == 0) and 5 (i % 5 == 0)
				so we print "FizzBuzz".`});
		}
		//for multiples of three print “Fizz” instead of the number
		else if (i % 3 == 0) {
			this.setState({text: "Fizz", hint: `i (${i}) is divisable by 3 (i % 3 == 0) so we print "Fizz".`});
		}
		// for the multiples of five print “Buzz”
		else if (i % 5 == 0) {
			this.setState({text: "Buzz", hint: `i (${i}) is divisable by 5 (i % 5 == 0) so we print "Buzz".` });
		}
		else {
			this.setState({text: "", hint: "" });
		}
	}

	render() {
		return (
			<div>
				<PageHeader>FizzBuzz<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				<Button onClick={this.increment}
					disabled = {this.state.i < 20 ? false : true}><i className="fa fa-plus"></i></Button>
				<Button onClick={this.decrement}
					disabled = {this.state.i == null || this.state.i == 0 ? true: false}><i className="fa fa-minus"></i></Button>

				<hr></hr>

				<Well id={"fizz-buzz-well"} style={{display: this.state.i != null ? "block" : "none" }} >
					<h3> {this.state.i} </h3>
					<h2 className={this.state.text === "FizzBuzz" ? "text-success": "text-primary"}> {this.state.text} </h2>
				</Well>
			</div>
		);
	}
}
