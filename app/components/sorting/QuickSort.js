import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class QuickSort extends React.Component {

	constructor(props) {
		let arrLength = 9, initialHint = `First, we chose a pivot which divide array in two halves.`;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), stack: [], sorted: [],
			pivot: null, hint: initialHint, initialHint:initialHint };
		this.quickSort = this.quickSort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), stack: [], sorted: [], pivot: null, tempLength: null});
	}

	quickSort() {

		let stack = this.state.stack, sorted = this.state.sorted, pivot = this.state.pivot;

		if (stack[0] == null) {
			//Deiterate algo
			stack = [this.state.a];
		}

		if (stack.length) {

			this.setState({hint: `jelp ${pivot} `})

			let temp = stack.pop(), tempLength = temp.length;

			if (tempLength == 1) {
				sorted.push(temp[0]);
				// continue;
				return;
			}
			//Choose a pivot
			pivot = temp[0];
			let left = [], right = [];

			//Flat an stack array
			let merged = [].concat.apply([], stack);

			let rest = temp.concat(merged);

			rest = sorted.concat(rest);

			//Comparing with pivot
			for (let i = 1; i < tempLength; i++) {
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

			if(rest.length <= this.state.a.length){
				this.setState({ stack: stack, pivot: pivot , a: rest  });
			} else {
				console.log("hello")
				this.setState({ a: sorted });
			} 
		}
		this.setState({ sorted: sorted});
	}

	render() {

		console.log(this.state.sorted.length)

		let pivot = this.state.pivot, sortedLenght = this.state.sorted.length, 
			disabled = this.state.sorted.length  == this.state.a.length  ? true: false;

		return (

			<div>

				<PageHeader>Quick Sort<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.quickSort }  ><i className="fa fa-step-forward"></i></Button>
					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

				<hr></hr>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				//Pivot
				if(i == sortedLenght){return <span className="selected" key={i}>{object}</span>;}
				if(i < sortedLenght){return <span className="sorted" key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}

			</div>
		);
	}
}