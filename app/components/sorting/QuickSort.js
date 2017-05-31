import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";

export class QuickSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), stack: [], sorted: [],
			pivot: null };
		this.quickSort = this.quickSort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, j: null });
	}

	quickSort() {
		
		let stack = this.state.stack, sorted = this.state.sorted, pivot = this.state.pivot;

		if(stack[0] == null){
			stack = [this.state.a];
		}

		if (stack.length) {
 
			var temp = stack.pop(), tl = temp.length;
	
			if (tl == 1) {
				sorted.push(temp[0]);
				// continue;
				return;
			}
			pivot = temp[0];
			var left = [], right = [];
	
			for (var i = 1; i < tl; i++) {
				if (temp[i] < pivot) {
					left.push(temp[i]);
				} else {
					right.push(temp[i]);
				}
			}
	
			left.push(pivot);
	
			if (right.length)
				stack.push(right);
			if (left.length)
				stack.push(left);

			this.setState({stack: stack, sorted: sorted, pivot: pivot});
	
		}
 
		console.log(sorted);
		// this.setState({a: sorted});
	}


	render() {

		let pivot = this.state.pivot;

		return (

			<div>
			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.quickSort } >QuickSort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i == pivot){return <span className="found" key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}

			<div></div>

			{this.state.sorted.map(function(object, i) {

				return <span key={i} >{object}</span>;
			})
			}	

			</div>
		);
	}
}
