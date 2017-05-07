import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";

export class InsertionSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), 
			i: 0, j: null, currentKey: null };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	// Shuffle an array and reset component to its initial state
	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, j: null });
	}

	sort() {

		let currentKey = this.state.currentKey, j = this.state.j, 
			sortedArray = this.state.a, i = this.state.i + 1;

		//Insert currently selected, presorted element at right position.
		if (j > 0 && sortedArray[j - 1] > currentKey) {

			sortedArray[j] = sortedArray[j - 1];
			j--;
			sortedArray[j] = currentKey;
			this.setState({ j: j });

		//Traverse array one index further.  	
		} else if(j < sortedArray.length) {

			let j = i, currentKey = sortedArray[i];
			this.setState({ a: sortedArray, i: i, j: j, currentKey: currentKey });

		//Sort is done
		} else {
			return;
		}
	}

	render() {

		let currentIter = this.state.i, j = this.state.j, 
			disabled = this.state.j == this.state.a.length ? true : false;

		return (

			<div>
			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} disabled={disabled} >Sort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i == j){return <span className="found" key={i}>{object}</span>;}
				if(i < currentIter){return <span className="selected" key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}