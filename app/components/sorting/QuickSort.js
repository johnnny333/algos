import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class QuickSort extends React.Component {

	constructor(props) {
		document.title = "Quick Sort";
		let arrLength = 10, initialHint = `First, we chose a pivot which divide array in two halves.`;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), stack: [], sorted: [],
			pivot: null, hint: initialHint, initialHint:initialHint, disabled: false };
		this.quickSort = this.quickSort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), stack: [], sorted: [], pivot: null, tempLength: null,
			hint : this.state.initialHint, disabled: false});
	}

	quickSort() {

		let stack = this.state.stack, sorted = this.state.sorted, pivot = this.state.pivot;

		if (stack[0] == null) {
			//Deiterate algo
			stack = [this.state.a];
		}

		if (stack.length) {

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

			this.setState({ hint: `Compare each number in a array with pivot (${pivot}). If its smaller we place it
				on the left [${left}] with pivot as last element and if its bigger, on the right [${right}].
				These arrays are then merged.`});

			if(rest.length <= this.state.a.length){
				this.setState({ stack: stack, pivot: pivot , a: rest  });
			} else {
				//Last iteration
				this.setState({ a: sorted, disabled: true, hint: "Array is sorted!"});
			}
		}
		this.setState({ sorted: sorted });
	}

	render() {

		let sortedLenght = this.state.sorted.length, disabled = this.state.disabled;

		return (

			<div>

				<PageHeader className="larger-header">Quick Sort<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				{ /* Render spans representing array elements */ }
				{this.state.a.map(function(object, i) {

					//Pivot
					if(i == sortedLenght){return <span className="selected" key={i}>{object}</span>;}
					if(i < sortedLenght){return <span className="sorted" key={i}>{object}</span>;}

					return <span key={i} >{object}</span>;
				})
				}

				<hr></hr>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.handleChangeShuffle} bsSize="large"><i className="fa fa-random"></i></Button>
					<Button onClick={this.quickSort } disabled={disabled} bsSize="large"><i className="fa fa-step-forward"></i></Button>
				</form>

				<hr></hr>
			
			</div>
		);
	}
}
