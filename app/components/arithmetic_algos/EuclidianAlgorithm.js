import React from "react";
import { Button, PageHeader, Form, Well } from "react-bootstrap";

export class EuclidianAlgorithm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { inputA: 1112, inputB: 695, a: 1112, b: 695, spans: [], formValues: {} };
		this.handleChangeInputA = this.handleChangeInputA.bind(this);
		this.handleChangeInputB = this.handleChangeInputB.bind(this);
		this.gcd = this.gcd.bind(this);
		this.clean = this.clean.bind(this);
	}

	handleChangeInputA(event) {

		this.setState({ inputA: event.target.value, a: event.target.value, b: this.state.inputB });
		this.clean();
	}

	handleChangeInputB(event) {
		this.setState({ inputB: event.target.value, b: event.target.value, a: this.state.inputA });
		this.clean();
	}

	clean(){
		this.setState({spans: []} );
	}

	gcd(){

		let r, a = this.state.a, b = this.state.b;

		//Display a and b values on first iteration
		if(!this.state.spans[0]){
			this.state.spans.push({a: a, b: b, r: a % b});
			this.setState({a: a, b: b});
			return;
		}

		//Actual GCD calculation
		if (b != 0) {
			r = a % b;
			a = b;
			b = r;

			this.state.spans.push({a: a, b: b, r: a % b});
			this.setState({a: a, b: b});
		}
	}

	render() {

		return (
			<div> 

			<PageHeader>Euclidian Algorithm</PageHeader>

			<Form inline onSubmit={e => (e.preventDefault())}>
				<span>First number: </span>
				<input type = "number" name="inputA" value={this.state.inputA} min="0" max="65536"
					onChange = { this.handleChangeInputA } className={"form-control"} />

				<span> Second number: </span> 
				<input type = "number" name="inputB" value={this.state.inputB} min="0" max="65536" 
					onChange = { this.handleChangeInputB } className={"form-control"} />
							
				<Button onClick={this.gcd} disabled={this.state.b == 0 ? true : false} ><i className="fa fa-calculator"></i> GCD</Button>

				</Form>

				<hr></hr>

				<Well className={"text-center"} style={{display: this.state.spans[0] != null ? "block" : "none" }}>

				{this.state.spans.map(function(object, i){
					if(object.b == 0){return <div key={i}><span>GCD:</span> = <span> {object.a}</span></div>;}
					return <div key={i}><span >{object.a}</span> mod <span >{object.b}</span> = <span >{object.r}</span></div>;
				})}

				</Well>

		</div>
		);
	}
}