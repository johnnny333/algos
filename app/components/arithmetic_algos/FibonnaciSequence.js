import React from "react";
import { Button, PageHeader, Form, FormGroup, FormControl } from "react-bootstrap";

export class FibonnaciSequence extends React.Component {

	constructor(props) {
		document.title = "Fibonnaci Sequence";

		let initialHint = `Is characterized by the fact that every number after the first two is the sum
			of the two preceding ones.`;

		super(props);
		this.state = { key: 10, n: 10, a: 1, b: 0, numbers: [], hint: initialHint, initialHint:initialHint };
		this.handleChange = this.handleChange.bind(this);
		this.fibonnaci = this.fibonnaci.bind(this);
	}

	handleChange(event) {
		this.setState({key: event.target.value, n: event.target.value, a: 1, b: 0, numbers: [], hint: this.state.initialHint });
	}

	fibonnaci() {

		let [a, b, n] = [this.state.a, this.state.b, this.state.n];

		this.setState({hint: `${a - b} + ${b} = ${a}`});

		if (n > 0) {
			[a, b] = [b + a, a];

			this.state.numbers.push(b);
			this.setState({n: this.state.n -1, a: a, b:b });
		}
		return b;
	}

	render() {

		let key = this.state.key -1, disabled = this.state.n == 0 ? true : false,
			disabledInput = this.state.key <= 30 &&  this.state.key >= 0 ;

		return (

			<div>
				<PageHeader>Fibonnaci Sequence<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				<Form inline onSubmit={e => (e.preventDefault())}>

					<FormGroup validationState= { disabledInput ? "success" : "error"}  >
						<FormControl type="number" min={2} max={30} value={this.state.key} onChange = { this.handleChange }  />
					</FormGroup>

					<Button onClick = { this.fibonnaci }
						disabled = {disabled || !disabledInput}><i className="fa fa-step-forward"></i></Button>

				</Form>

				<hr></hr>

				<div>
				{this.state.numbers.map(function(object, i){
					if(i == key) {return <span key={i} className="found" >{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
				</div>
			</div>
		);
	}
}
