import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class SelectionSort extends React.Component {

	constructor(props) {
		let arrLength = 10, initialHint = "Selection Sort works by using Linear Search to find " + 
			" the smallest value in an array and then placing it in the leftmost position.";

		super(props);
		this.state = {a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: 0, minIndex: null,
			hint: initialHint, initialHint:initialHint };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, minIndex: null });
	}

	sort() {

		var min, minIndex = this.state.minIndex, temp, myTable = this.state.a, i = this.state.i;

		//Iterator
		if (minIndex != null && minIndex < myTable.length) {
			//Swap
			temp = myTable[i];
			myTable[i] = myTable[minIndex];
			myTable[minIndex] = temp;

			this.setState({ a: myTable, i: this.state.i + 1, minIndex: null });
			return;
		}

		min = myTable[i], minIndex = i;

		//Find the smallest value
		for (var j = i; j < myTable.length; j++) {
			if (myTable[j] < min) {
				min = myTable[j];
				minIndex = j;
			}
		}

		if(minIndex == this.state.a.length){
			this.setState({ minIndex: minIndex, hint: "Array is sorted!" });
		} else {
			this.setState({ minIndex: minIndex, hint: `The smallest, unsorted value is '${min}' so we place it in the leftmost position.` });
			return;
		}
		
	}

	render() {

		let currentIter = this.state.i, minIndex = this.state.minIndex,
			disabled = this.state.minIndex == this.state.a.length ? true : false;

		return (
			<div>

				<PageHeader>Selection Sort<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>


				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.sort} disabled={disabled}><i className="fa fa-step-forward"></i></Button>

					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

				<hr></hr>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {
				if(i == minIndex){return <span className="found" key={i}>{object}</span>;}
				if(i < currentIter){return <span className="sorted" key={i}>{object}</span>;}
				
				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}