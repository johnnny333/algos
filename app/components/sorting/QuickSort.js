import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class QuickSort extends React.Component {

	constructor(props) {
		let arrLength = 9;

		super(props);
		this.state = {
			a: shuffle(Array.from({ length: arrLength }, (val, key) => key)),
			stack: [],
			sorted: [],
			pivot: null
		};
		this.quickSort = this.quickSort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), stack: [], sorted: [], pivot: null});
	}

	quickSort() {

		let stack = this.state.stack,
			sorted = this.state.sorted,
			pivot = this.state.pivot;

		if (stack[0] == null) {
			stack = [this.state.a];
		}

		if (stack.length ) {

			var temp = stack.pop(),
				tl = temp.length;

			if (tl == 1) {
				sorted.push(temp[0]);
				// continue;
				return;
			}
			pivot = temp[0];
			var left = [],
				right = [];

			//Flat an stack array
			let merged = [].concat.apply([], stack);

			let rest = temp.concat(merged);

			rest = sorted.concat(rest);

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

			if(rest.length <= this.state.a.length){
				this.setState({ stack: stack, pivot: pivot , a: rest });
			}
		}
		this.setState({ sorted: sorted});
	}

	render() {

		let pivot = this.state.pivot,
			sortedLenght = this.state.sorted.length,
			disabled = this.state.sorted.length == this.state.a.length ? true: false; 

		return (

			<div>

				<PageHeader>Quick Sort</PageHeader>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.quickSort } disabled={disabled} ><i className="fa fa-step-forward"></i></Button>
					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

				<hr></hr>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i < sortedLenght){return <span className="sorted" key={i}>{object}</span>;}
				if(i == pivot){return <span className="found" key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}

			</div>
		);
	}
}
