import React from "react";

export class BubbleSort extends React.Component {

	constructor(props) {
		super(props);
		this.state = { key: 0, a: this.shuffle(Array.from({ length: 20 }, (val, key) => key)), i: -1, found: null };
		this.shuffle = this.shuffle.bind(this);
		this.sort = this.sort.bind(this);
	}

	/**
	 * Fisher-Yates Shuffle 
	 * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	 * https://bost.ocks.org/mike/shuffle/
	 */
	shuffle(array) {
		let counter = array.length;

		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			let index = Math.floor(Math.random() * counter); //5

			// Decrease counter by 1
			counter--; //9

			// And swap the last element with it
			let temp = array[counter]; //a[9]
			array[counter] = array[index]; //a[9] = a[5]
			array[index] = temp; //a[5] = 9
		}
		return array;
	}

	sort() {
		console.log("sort");

		let change, temp, myTable = this.state.a;
		do {
			change = false;
			for (var i = 0; i < myTable.length - 1; i++) {
				if (myTable[i + 1] < myTable[i]) {
					temp = myTable[i];
					myTable[i] = myTable[i + 1];
					myTable[i + 1] = temp;
					change = true;
				}
			}
		} while (change);
		this.setState({a: myTable});
		return myTable;
	}

	render() {
		return (
			<div>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} >Sort</button>
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
