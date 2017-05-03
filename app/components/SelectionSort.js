import React from "react";
import { shuffle } from "./HelperFunctions";

export class SelectionSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = {
			a: shuffle(Array.from({ length: arrLength }, (val, key) => key)),
			i: arrLength - 1
		};
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a) });
	}

	sort() {

		var min, minIndex, temp, myTable = this.state.a;

		for (var i = 0; i < myTable.length - 1; i++) {
			//szukaj elementu najmniejszego w nieposortowanej czesci tablicy
			min = myTable[i];
			minIndex = i;
			for (var j = i; j < myTable.length; j++) {
				if (myTable[j] < min) {
					min = myTable[j];
					minIndex = j;
				}
			}
			//wstaw element najmniejszy na swoje miejsce
			temp = myTable[i];
			myTable[i] = myTable[minIndex];
			myTable[minIndex] = temp;
		}
		this.setState({a:myTable});
	}

	render() {

		return (
			<div>

			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} disabled={this.state.disabled}>Sort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}
