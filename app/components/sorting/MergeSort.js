import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";
import { Button, PageHeader } from "react-bootstrap";

export class MergeSort extends React.Component {

	constructor(props) {
		document.title = "Merge Sort";

		let arrLength = 10, initialHint = `Splits array into single elements and then merges them back,
			in order, element by element.`;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)),
			hint: initialHint, initialHint:initialHint, works: [], finalArr: null };
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
		this.sort = this.sort.bind(this);
		this.merge = this.merge.bind(this);
	}

	// Shuffle an array and reset component to its initial state
	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), works: [], finalArr: null });
	}

	sort(items) {

		if (items.length == 1) {
			return items;
		}

		let work = [];
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

		this.setState({ finalArr: work[0] });
		return work[0];
	}

	merge(left, right) {
		var result = [];

		this.state.works.push(left.concat(right));
		this.setState({ works: this.state.works });

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

		let finalArr;
		if (this.state.finalArr != null) {
			finalArr = <div><span className="found" style={{width: 99 + "%"}}>{this.state.finalArr}</span></div>;
		}

		return (

			<div>

			<PageHeader>Merge Sort<br></br>
				<small>{this.state.hint}</small>
			</PageHeader>

				<form onSubmit={e => (e.preventDefault())}>
					<Button onClick={() => this.sort(this.state.a)} disabled={this.state.finalArr != null ? true : false } ><i className="fa fa-play"></i></Button>
					<Button onClick={this.handleChangeShuffle}><i className="fa fa-random"></i></Button>
				</form>

			<hr></hr>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {
				return <span key={i} >{object}</span>;
			})
			}


			<div>
			{this.state.works.map(function(object, i) {
				return <span style={{width: (object.length * 10) - 1 + "%" }} key={i} ><span>{object}</span></span>;
			})
			}
			</div>

			{finalArr}

			</div>
		);
	}
}
