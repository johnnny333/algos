import React from "react";
import { shuffle } from "./HelperFunctions";

export class InsertionSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: 0 };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0 });
	}

	sort() {

		let klucz, j, tablica = this.state.a;

		//dla kazdego elementu tablicy do posortowania, poczawszy od drugiego
		for (let i = 1; i < tablica.length; i++) {
			j = i;
			klucz = tablica[i];
			//poszukaj miejsca dla aktualnego elementu
			//szukaj tylko w posortowanej juz czescie tablicy
			//(czyli wsrod elementow o indeksach mniejszych od aktualnego)
			//przesuwaj element w kiedunku poczatku tablicy
			//tak dlugo, az przed nim jest element wiekszy i
			//nie znajduje sie na poczatku tablicy
			while (j > 0 && tablica[j - 1] > klucz) {
				tablica[j] = tablica[j - 1];
				j--;
			}
			tablica[j] = klucz;
		}
		this.setState({ a: tablica });
	}

	render() {

		return (
			<div>

			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} >Sort</button>
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
