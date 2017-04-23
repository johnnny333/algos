import React from "react";

export class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = { a: this.shuffle( Array.from({ length: 20 }, (val, key) => key) ) };
		this.shuffle = this.shuffle.bind(this);
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


	render() {
		return (
			<div>

				<form onSubmit={e => (e.preventDefault())}>
					Number to find: 
					<input type = "number" value={this.state.key} min="0" max={this.state.a.length -1} 
						onChange = { this.handleChange } />
					
					{/* This breaks React principle of keeping immutable objects but makes shuffle() algo
						more efficient */}	
					<button onClick={() => this.setState({a: this.shuffle(this.state.a) })}>Shuffle</button>
				</form>

				{/* Render spans representing array elements */}	
				{this.state.a.map(function(object, i){
					return <span key={i} >{object}</span>;
				})}


			</div>
		);
	}
}
