import React from "react";
import {shuffle} from "../../helpers/HelperFunctions";

export class LinearSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {key: 0, a: shuffle( Array.from({ length: 20 }, (val, key) => key) ), i: -1, found: null };
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
		this.setState({key: key,i: -1, found: null});
	}

	indexOf() {

		if(this.state.a[this.state.i] == this.state.key){
			this.setState({found: this.state.i});
		}else {
			this.setState({i: this.state.i + 1});
		}
	}


	render() {

		let found = this.state.found, currentIter = this.state.i, disabled = this.state.found != null ? true : false;

		return (
			<div>

				{/* This breaks React principle of keeping immutable objects but makes shuffle() algo
						more efficient */}	
				<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>

					Number to find: 
					<input type = "number" value={this.state.key} min="0" max={this.state.a.length -1} 
						onChange = { this.handleChange } />
					
					<button onClick={this.indexOf} disabled={disabled}>Find</button>
				</form>

				{/* Render spans representing array elements */}	
				{this.state.a.map(function(object, i){
					if(i == found){return <span className="found" key={i}>{object}</span>;}
					if(i <= currentIter){return <span className="selected" key={i}>{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
			</div>
		);
	}
}