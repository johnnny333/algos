import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";

export class MergeSort extends React.Component {

	constructor(props) {
		let arrLength = 9;
		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), works: [] };
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
		this.sort = this.sort.bind(this);
		this.merge = this.merge.bind(this);
	}

	// Shuffle an array and reset component to its initial state
	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a) });
	}

	sort(items) {

		if (items.length == 1) {
			return items;
		}

		var work = [];
		for (var i = 0, len = items.length; i < len; i++) {
			work.push([items[i]]);
		}
		work.push([]); //in case of odd number of items

		for (var lim = len; lim > 1; lim = Math.floor((lim + 1) / 2)) {
			for (var j = 0, k = 0; k < lim; j++, k += 2) {
				work[j] = this.merge(work[k], work[k + 1]);
			}
			work[j] = []; //in case of odd number of items
		}
		return work[0];
	}

	merge(left, right) {
		var result = [];

		// console.log("left: " + left);
		// console.log("right: " + right);

		let arr = this.state.works.push(left.concat(right) );
		this.setState({works: this.state.works })

		// console.log(this.state.works)

		while (left.length > 0 && right.length > 0) {
			if (left[0] < right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}
		return result.concat(left).concat(right);
	}

	render() {

		return (

			<div>
			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={() => this.sort(this.state.a)} >Sort</button>
				</form>


			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {
				return <span key={i} >{object}</span>;
			})
			}
			<div>
			{this.state.works.map(function(object, i) {
				return <span style={{width: object.length * 10 + "%"}} key={i} >{object}</span>;
			})
			}
			</div>

			</div>
		);
	}
}