import React from "react";
import { shuffle } from "../../helpers/HelperFunctions";

export class QuickSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)) };
		this.quickSort = this.quickSort.bind(this);
		this.partition = this.partition.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0, j: null });
	}

	quickSort(tablica, p, r) {

		let q;
		if (p < r) {
			q = this.partition(tablica, p, r); // dzielimy tablice na dwie czesci; q oznacza punkt podzialu
			this.quickSort(tablica, p, q); // wywolujemy rekurencyjnie quicksort dla pierwszej czesci tablicy
			this.quickSort(tablica, q + 1, r); // wywolujemy rekurencyjnie quicksort dla drugiej czesci tablicy
		}
		
		this.setState({ a: tablica });
	}

	// dzielimy tablice na dwie czesci, w pierwszej wszystkie liczby sa mniejsze badz rowne x, w drugiej wieksze lub rowne od x
	partition(tablica, p, r) {
		let x = tablica[p]; // obieramy x
		let i = p,
			j = r,
			w; // i, j - indeksy w tabeli

		// petla nieskonczona - wychodzimy z niej tylko przez return j
		while (true) {
			while (tablica[j] > x) // dopoki elementy sa wieksze od x
				j--;

			while (tablica[i] < x) // dopoki elementy sa mniejsze od x
				i++;

			// zamieniamy miejscami gdy i < j
			if (i < j) {
				w = tablica[i];

				tablica[i] = tablica[j];
				tablica[j] = w;
				i++;
				j--;
			} else // gdy i >= j zwracamy j jako punkt podzialu tablicy
				return j;
		}
	}

	render() {
		return (

			<div>
			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={() => this.quickSort(this.state.a, 0, this.state.a.length -1 )} >QuickSort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {
				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}
