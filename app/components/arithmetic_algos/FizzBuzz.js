import React from "react";
import { Button, PageHeader, Well } from "react-bootstrap";

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
			this.setState({text: "FizzBuzz"});
		}
		//for multiples of three print “Fizz” instead of the number
		else if (i % 3 == 0) {
			this.setState({text: "Fizz"});
		}
		// for the multiples of five print “Buzz”
		else if (i % 5 == 0) {
			this.setState({text: "Buzz"});
		}
		else {
			this.setState({text: ""});
		}
	}
	
	render() {
		return (

			<div>

				<PageHeader>FizzBuzz</PageHeader>

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