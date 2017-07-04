import React from "react";
import { Button, PageHeader, Form, FormGroup, FormControl } from "react-bootstrap";

export class BinarySearch extends React.Component {

	constructor(props) {
		document.title = "Binary Search";

		let arrLength = 30, initialHint = "Pick a number and click magnifying glass to find it in a array.";

		super(props);
		this.state = { key: 0, lo: 0, hi: arrLength, mid: -1, a: Array.from({ length: arrLength }, (val, key) => key)  ,
			hint: initialHint, initialHint:initialHint, arrLength: arrLength };
		this.handleChange = this.handleChange.bind(this);
		this.indexOf = this.indexOf.bind(this);
	}

	handleChange(event) {
		this.setState({mid: -1, hi: this.state.arrLength, lo: 0, hint: this.state.initialHint,
			key:  event.target.value });
	}

	indexOf() {
		let a = this.state.a, hi = this.state.hi, key = this.state.key, lo = this.state.lo;

		if (lo <= hi) {
			let mid = Math.floor(lo + (hi - lo) / 2);
			if (key < a[mid]) {hi = mid - 1;
				this.setState({hi: hi, hint: "Seeked number is smaller than half of the current array[" + lo + "..." + hi + "]."});}
			else if (key > a[mid]) {lo = mid + 1;
				this.setState({lo: lo, hint: "Seeked number is bigger than half of the current array[" + lo + "..." + hi + "]."});}
			else {
				this.setState({mid: mid, hint: "Your number '" + mid + "' was found!"});
			}
		}
	}

	render() {
		let mid = this.state.mid, lo = this.state.lo, hi = this.state.hi,
			disabled = this.state.key < this.state.arrLength &&  this.state.key >= 0;

		return (
			<div>

				<PageHeader>Binary Search<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				{/* Render spans representing array elements */}
				{this.state.a.map(function(object, i){

					if(i == mid){return <span className="found" key={i}>{object}</span>;}
					if(i >= lo && i <= hi){return <span key={i} className="sorted" >{object}</span>;}
					return <span key={i} >{object}</span>;
				})}

				<hr></hr>

				<Form inline onSubmit={e => (e.preventDefault())}>
					<span>{`Number to find (0 - ${this.state.a.length -1 }):`} </span>
					<FormGroup validationState= { disabled ? "success" : "error"} bsSize="large" >
						<FormControl type="number" min={0} max={this.state.arrLength - 1} value={this.state.key}
							onChange = { this.handleChange }  />
					</FormGroup>

					<Button onClick={this.indexOf} disabled={this.state.mid != -1 || !disabled ? true: false} bsSize="large" >
						<i className="fa fa-search"></i>
					</Button>

				</Form>

				<hr></hr>
			</div>
		);
	}
}
