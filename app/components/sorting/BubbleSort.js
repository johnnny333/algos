import React from "react";
import {shuffle} from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class BubbleSort extends React.Component {

	constructor(props) {
		let arrLength = 10, initialHint = "Bubble Sort works by comparing two, adjacent array elements (arr[n] < arr[n - 1]).";

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), 
			i: null, swapped: false, changed: false, disabled: false, initialHint:initialHint, 
			hint: initialHint, arrLength: arrLength, bubbleIteration: 1 };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle(){
		this.setState({a: shuffle(this.state.a), i: null , swapped: false, changed: false, disabled: false, hint: this.state.initialHint,
			bubbleIteration: 1 });
	}

	sort() {

		let myTable = this.state.a, i = this.state.i;

		if (i == null) {
			i = this.state.a.length ;
		}

		this.setState({hint: `Is ${myTable[i - 1]} < than ${myTable[i - 2]}?`});

		//Reset previously set 'swapped' flag to false
		if (this.state.swapped) {
			this.setState({ swapped: false});
		}

		if (myTable[i] < myTable[i - 1]) {

			let temp = myTable[this.state.i - 1];
			myTable[i - 1] = myTable[i];
			myTable[i] = temp;
			this.setState({ swapped: true, changed: true, hint: `Yes, ${myTable[i - 1]} is < than ${myTable[i]}, 
				so we swap those numbers.` });

			return;
		}

		/*
		 * Check if the end of array was reached, and if, 
		 * reset the value of i to the start(end of array) and return.
		 */
		if (i === this.state.bubbleIteration) {

			if (!this.state.changed || i == myTable.length -1) {
				this.setState({disabled: true, hint: `Array is sorted!`});
				return;
			} else {
				this.setState({ i: this.state.a.length - 1, changed: false, hint: `We've reached the end of array but havent't fully sorted it,
					so we start over and keep on asking: Is ${myTable[this.state.a.length - 1]} < than ${myTable[this.state.a.length - 2]}?`,
					bubbleIteration: this.state.bubbleIteration + 1 });
			}
			return;
		}
		this.setState({ i: i - 1, a: myTable });
	}

	render() {

		let currentI = this.state.i,
			highlighting = this.state.swapped ? "found" : "selected",
			bubbleIteration = this.state.bubbleIteration - 1;

		return (
			<div>

				<PageHeader>Bubble Sort<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>


				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={this.sort} disabled={this.state.disabled}><i className="fa fa-step-forward"></i></Button>

					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

				<hr></hr>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i == currentI){return <span className={highlighting} key={i}>{object}</span>;}
				if(i == currentI - 1){return <span className={highlighting} key={i}>{object}</span>;}
				if(i < bubbleIteration){return <span className={"sorted"} key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}