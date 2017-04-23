import React from "react";

export class LinearSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {key: 0, a: this.shuffle( Array.from({ length: 20 }, (val, key) => key) ), i: -1, found: null };
		this.shuffle = this.shuffle.bind(this);
		this.indexOf = this.indexOf.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
		this.clear = this.clear.bind(this);
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

	handleChange(event) {
		this.clear(event.target.value);
	}

	handleChangeShuffle(){
		this.setState({a: this.shuffle(this.state.a)});
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

		let found = this.state.found, current_i = this.state.i;

		return (
			<div>

				{/* This breaks React principle of keeping immutable objects but makes shuffle() algo
						more efficient */}	
				<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>

					Number to find: 
					<input type = "number" value={this.state.key} min="0" max={this.state.a.length -1} 
						onChange = { this.handleChange } />
					
					<button onClick={this.indexOf} >Find</button>
				</form>

				{/* Render spans representing array elements */}	
				{this.state.a.map(function(object, i){
					if(i == found){return <span className="found" key={i}>{object}</span>;}
					if(i <= current_i){return <span className="selected" key={i}>{object}</span>;}
					return <span key={i} >{object}</span>;
				})}
			</div>
		);
	}
}