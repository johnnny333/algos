import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button } from "react-bootstrap";

export class SelectionSort extends React.Component {

	constructor(props) {
		let arrLength = 10;

		super(props);
		this.state = {a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: 0, minIndex: null };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, minIndex: null });
	}

	sort() {

		var min, minIndex = this.state.minIndex, temp, myTable = this.state.a, i = this.state.i;


		if (minIndex != null && minIndex < myTable.length) {
			temp = myTable[i];
			myTable[i] = myTable[minIndex];
			myTable[minIndex] = temp;

			this.setState({ a: myTable, i: this.state.i + 1, minIndex: null });
			return;
		}

		min = myTable[i], minIndex = i;

		for (var j = i; j < myTable.length; j++) {
			if (myTable[j] < min) {
				min = myTable[j];
				minIndex = j;
			}
		}
		this.setState({ minIndex: minIndex });
		return;
	}

	render() {

		let currentIter = this.state.i, minIndex = this.state.minIndex,
			disabled = this.state.minIndex == this.state.a.length ? true : false;

		return (
			<div>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.sort} disabled={disabled}><i className="fa fa-step-forward"></i></Button>

					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {
				if(i == minIndex){return <span className="found" key={i}>{object}</span>;}
				if(i < currentIter){return <span className="selected" key={i}>{object}</span>;}
				
				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}