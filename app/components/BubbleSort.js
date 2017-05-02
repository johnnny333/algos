import React from "react";

export class BubbleSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: this.shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: arrLength - 1, swapped: false, changed: false };
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

		let swapped = this.state.swapped,
			myTable = this.state.a;

		console.log("value of i:" + this.state.i);

		if (swapped) {
			console.log("swapped");
			this.setState({ swapped: false });
			return;
		}

		if (myTable[this.state.i] < myTable[this.state.i - 1]) {

			console.log("smalleer");

			let temp = myTable[this.state.i - 1];
			myTable[this.state.i - 1] = myTable[this.state.i];
			myTable[this.state.i] = temp;
			this.setState({ swapped: true, changed: true });

			return;
		}

		/*
		 * Check if the end of array was reached, and if, 
		 * reset the value of i to the start(end of array) and return.
		 */
		if (this.state.i == 1) {

			console.log("end of array, i:");
			if (!this.state.changed) {
				console.log("Array sorted");
				return;
			} else {
				this.setState({ i: this.state.a.length - 1, changed: false });
			}
			return;
		}

		this.setState({ i: this.state.i - 1, a: myTable });
	}

	render() {

		let currentI = this.state.i,
			highlighting = this.state.swapped ? "found" : "selected";

		return (
			<div>
				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} >Sort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i == currentI){return <span className={highlighting} key={i}>{object}</span>;}
				if(i == currentI - 1){return <span className={highlighting} key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}