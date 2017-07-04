import React from "react";
import { Button, PageHeader, Form, FormGroup, FormControl } from "react-bootstrap";

export class EratosthenesSieve extends React.Component {

	constructor(props) {
		document.title = "Eratosthenes Sieve";

		let initialHint = `Is a simple, ancient algorithm for finding all prime
			numbers up to any given limit.`;

		super(props);
		this.state = { n: 51, isPrime: [], factor: 2, hint: initialHint,
			initialHint:initialHint };
		this.handleChange = this.handleChange.bind(this);
		this.sieve = this.sieve.bind(this);
	}

	handleChange(event) {
		this.setState({ n: event.target.value, isPrime: [], factor: 2,
			hint: this.state.initialHint });
	}

	sieve() {
		//http://introcs.cs.princeton.edu/java/14array/PrimeSieve.java.html
		let n = this.state.n, isPrime = this.state.isPrime, factor = this.state.factor,
			multiples = [];;

		// populate array and initially assume all integers are prime
		if (!isPrime[2]) {
			for (let i = 2; i <= n; i++) {
				isPrime[i] = { isPrime: true, i: i };
			}
			this.setState({ isPrime: isPrime, hint: `It check for each number from
				2 to Math.floor(Math.sqrt(${this.state.n}) = ${ Math.floor(Math.sqrt(n))}
				if it is a prime number.` });
			return;
		}

		// mark non-primes <= n using Sieve of Eratosthenes
		if (factor * factor <= n) {

			// if factor is prime, then mark multiples of factor as nonprime
			// suffices to consider mutiples factor, factor+1, ...,  n/factor
			if (isPrime[factor].isPrime) {
				for (let j = factor; factor * j <= n; j++) {
					isPrime[factor * j].isPrime = false;
					multiples.push(factor * j);
				}
			}
			this.setState({ factor: this.state.factor + 1, hint: `From iteration ${factor}
				we cross out all the numbers which are multiples of ${factor}: ${multiples}.
				${factor === Math.floor(Math.sqrt(n)) ? "All we got left are prime numbers!" : ""} `})
		}
	}

	render() {
		let disabled = this.state.factor > Math.floor(Math.sqrt(this.state.n)) ? true : false,
			disabledInput = this.state.n <= 300 &&  this.state.n >= 0 ;



		return (

			<div>

				<PageHeader >Eratosthenes Sieve<br></br>
					<small>{this.state.hint}</small>
				</PageHeader>

				<Form inline onSubmit={e => (e.preventDefault())}>

					<FormGroup validationState= { disabledInput ? "success" : "error"}  >
						<FormControl type="number" min={2} max={300} value={this.state.n} onChange = { this.handleChange }  />
					</FormGroup>

					<Button onClick={this.sieve} disabled={disabled || !disabledInput}  >
						<i className="fa fa-step-forward"></i></Button>

				</Form>

				<hr></hr>

				{this.state.isPrime.map(function(object, i){

					if(object.isPrime) {
						return <span key={i} className="found">{object.i}</span>;
					} else {return <span key={i} >{object.i}</span>;}
				})}
			</div>
		);
	}
}
