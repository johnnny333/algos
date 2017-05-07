import React from "react";

export class EuclidianAlgorithm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { a: 1112, b: 695, r: null, spans: [] };
		this.handleChangeInputA = this.handleChangeInputA.bind(this);
		this.handleChangeInputB = this.handleChangeInputB.bind(this);
		this.gcd = this.gcd.bind(this);
	}

	handleChangeInputA(event) {
		this.setState({ a: event.target.value });
	}

	handleChangeInputB(event) {
		this.setState({ b: event.target.value });
	}

	gcd(){

		let r, a = this.state.a, b = this.state.b;

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

			<form onSubmit={e => (e.preventDefault())}>
				First number:
				<input type = "number" value={this.state.a} min="0" max="65536"
					onChange = { this.handleChangeInputA } />

				Second number: 
				<input type = "number" value={this.state.b} min="0" max="65536" 
					onChange = { this.handleChangeInputB } />
							
				<button onClick={this.gcd} disabled={this.state.b == 0 ? true : false} >GCD</button>

				{this.state.spans.map(function(object, i){
					if(object.b == 0){return <div key={i}><span>GCD:</span> = <span> {object.a}</span></div>;}
					return <div key={i}><span >{object.a}</span> mod <span >{object.b}</span> = <span >{object.r}</span></div>;
				})}
			</form>
		</div>
		);
	}
}