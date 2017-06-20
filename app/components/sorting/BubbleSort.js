import React from "react";
import {shuffle} from "../../helpers/HelperFunctions";
import { Button } from "react-bootstrap";

export class BubbleSort extends React.Component {

	constructor(props) {
		let arrLength = 10;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: arrLength - 1, swapped: false, changed: false, disabled: false };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle(){
		this.setState({a: shuffle(this.state.a)});
		this.setState({ i: this.state.a.length - 1, swapped: false, changed: false, disabled: false });
	}

	sort() {

		let myTable = this.state.a;

		if (this.state.swapped) {
			this.setState({ swapped: false });
			return;
		}

		if (myTable[this.state.i] < myTable[this.state.i - 1]) {

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

			if (!this.state.changed) {
				this.setState({disabled: true});
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
					<Button onClick={this.sort} disabled={this.state.disabled}><i className="fa fa-step-forward"></i></Button>

					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
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