import React from "react";
import { shuffle } from "./HelperFunctions";

export class InsertionSort extends React.Component {

	constructor(props) {
		let arrLength = 8;

		super(props);
		this.state = { a: shuffle(Array.from({ length: arrLength }, (val, key) => key)), i: 0, j: null,
			klucz: null };
		this.sort = this.sort.bind(this);
		this.handleChangeShuffle = this.handleChangeShuffle.bind(this);
	}

	handleChangeShuffle() {
		this.setState({ a: shuffle(this.state.a), i: 0 });
	}

	sort() {

		let klucz = this.state.klucz, j = this.state.j, tablica = this.state.a, i = this.state.i + 1;

		console.log("value of i: " + i);

		if(j > 0 && tablica[j - 1] > klucz) {

				console.log("j: " + j);

				tablica[j] = tablica[j - 1];
				j--;
				tablica[j] = klucz;
				this.setState({j: j});

			} else {

				// i += 1;
				let j = i;
				let klucz = tablica[i];

				console.log("else j: " + j)

				this.setState({ a: tablica, i: i, j: j, klucz: klucz });
			}
			
			// j = i;

		//dla kazdego elementu tablicy do posortowania, poczawszy od drugiego
		// for (i = 1; i < tablica.length; i++) {
			
			//poszukaj miejsca dla aktualnego elementu
			//szukaj tylko w posortowanej juz czescie tablicy
			//(czyli wsrod elementow o indeksach mniejszych od aktualnego)
			//przesuwaj element w kiedunku poczatku tablicy
			//tak dlugo, az przed nim jest element wiekszy i
			//nie znajduje sie na poczatku tablicy
			// while (j > 0 && tablica[j - 1] > klucz) {
			// 	tablica[j] = tablica[j - 1];
			// 	j--;
			// }
			// tablica[j] = klucz;
		// }
		
	}

	render() {

		let currentIter = this.state.i, j = this.state.j;

		return (
			<div>

			<button onClick={this.handleChangeShuffle}>Shuffle</button>

				<form onSubmit={e => (e.preventDefault())}>
					<button onClick={this.sort} >Sort</button>
				</form>

			{ /* Render spans representing array elements */ }
			{this.state.a.map(function(object, i) {

				if(i == j){return <span className="found" key={i}>{object}</span>;}
				if(i < currentIter){return <span className="selected" key={i}>{object}</span>;}

				return <span key={i} >{object}</span>;
			})
			}
			</div>
		);
	}
}