import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class InsertionSort extends React.Component {

	constructor(props) {
		document.title = "Insertion Sort";
		let arrLength = 10, initialHint = `We consider leftmost number fully sorted.`;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)),
			i: 0, j: null, currentKey: null, hint: initialHint, initialHint:initialHint };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	// Shuffle an array and reset component to its initial state
	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, j: null, hint: this.state.initialHint });
	}

	sort() {

		let currentKey = this.state.currentKey, j = this.state.j,
			sortedArray = this.state.a, i = this.state.i + 1;

		//Insert currently sorted element at right position.
		if (j > 0 && sortedArray[j - 1] > currentKey) {

			sortedArray[j] = sortedArray[j - 1];
			j--;
			sortedArray[j] = currentKey;
			this.setState({ j: j, hint: `${sortedArray[j]}  is smaller than ${sortedArray[j + 1]} so the numbers swap.` });

		//Traverse array one index further.
		} else if(j < sortedArray.length - 1 && i != sortedArray.length ) {

			let j = i, currentKey = sortedArray[i];
			this.setState({ a: sortedArray, i: i, j: j, currentKey: currentKey, hint: `From the unsorted numbers we take leftmost
				number (${sortedArray[j]}) and compare if its smaller than the sorted number to its left.` });

		//Sort is done
		} else {
			this.setState({ hint: "Array is sorted!", j: this.state.a.length });
			return;
		}
	}

	render() {

		let currentIter = this.state.i, j = this.state.j,
			disabled = this.state.j >= this.state.a.length ? true : false;

		return (

			<div>

				<PageHeader>Insertion Sort<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				{ /* Render spans representing array elements */ }
				{this.state.a.map(function(object, i) {

					if(i == j){return <span className="found" key={i}>{object}</span>;}
					if(i < currentIter){return <span className="sorted" key={i}>{object}</span>;}

					return <span key={i} >{object}</span>;
				})
				}

				<hr></hr>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.handleChangeShuffle} bsSize="large" ><i className="fa fa-random"></i></Button>
					<Button onClick={this.sort} disabled={disabled} bsSize="large" ><i className="fa fa-step-forward"></i></Button>
				</form>

				<hr></hr>
			
			</div>
		);
	}
}
