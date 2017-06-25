import React from "react";
import {shuffle} from "../../helpers/HelperFunctions";
import { Button, PageHeader, Form } from "react-bootstrap";

export class LinearSearch extends React.Component {

	constructor(props) {

		let initialHint = "Pick a number and click magnifying glass to find it in a array.";

		super(props);
		this.state = {key: 0, a: shuffle( Array.from({ length: 20 }, (val, key) => key) ), i: -1, 
			found: null, initialHint: initialHint, hint: initialHint };
		this.indexOf = this.indexOf.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
		this.clear = this.clear.bind(this);
	}

	handleChange(event) {
		this.clear(event.target.value);
	}

	handleChangeShuffle(){
		this.setState({a: shuffle(this.state.a)});
		this.clear(this.state.key);
	}

	clear(key){
		this.setState({key: key,i: -1, found: null, hint: this.state.initialHint});
	}

	indexOf() {

		if(this.state.a[this.state.i] == this.state.key){
			this.setState({found: this.state.i , hint: `Indeed! There is a '${this.state.key}'  at 'array[${this.state.i}]'!`});
		}else {
			this.setState({i: this.state.i + 1, hint: `Is there '${this.state.key}'  at array[${this.state.i + 1}] ?` });
		}
	}


	render() {

		let found = this.state.found, currentIter = this.state.i, disabled = this.state.found != null ? true : false;

		return (
			<div>

				<PageHeader>Linear Search<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				<Form inline onSubmit={e => (e.preventDefault())}>

					<span>Number to find: </span>
					<input type = "number" value={this.state.key} min="0" max={this.state.a.length -1} 
						onChange = { this.handleChange } className={"form-control"} />
					
					<Button onClick={this.indexOf} disabled={disabled}><i className="fa fa-search"></i></Button>

					{/* This breaks React principle of keeping immutable objects but makes shuffle() algo
					more efficient */}	
					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>

				</Form>

				<hr></hr>

				{/* Render spans representing array elements */}	
				{this.state.a.map(function(object, i){
					if(i == found){return <span className="found" key={i}>{object}</span>;}
					if(i <= currentIter){return <span className="sorted" key={i}>{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
			</div>
		);
	}
}