import React from "react";

export class EratosthenesSieve extends React.Component {

	constructor(props) {
		super(props);
		this.state = { n: 2 };
		this.handleChange = this.handleChange.bind(this);
		this.sieve = this.sieve.bind(this);
	}

	handleChange(event) {
		this.setState({n: event.target.value});
	}

	sieve() {

		let n = this.state.n;

        // initially assume all integers are prime
        let isPrime = [];
        for (let i = 2; i <= n; i++) {
            isPrime[i] = true;
        }

        // mark non-primes <= n using Sieve of Eratosthenes
        for (let factor = 2; factor*factor <= n; factor++) {

            // if factor is prime, then mark multiples of factor as nonprime
            // suffices to consider mutiples factor, factor+1, ...,  n/factor
            if (isPrime[factor]) {
                for (let j = factor; factor*j <= n; j++) {
                    isPrime[factor*j] = false;
                }
            }
        }

        // count primes
        let primes = 0;
        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) primes++;
        }
        console.log("primes: " + primes);
	}

	render() {

		return (
			<form onSubmit={e => (e.preventDefault())}>

				<input type = "number" value={this.state.n} min="2" max="30" 
						onChange = { this.handleChange } />

				<button onClick={this.sieve} >Find</button>

			</form>

			)
	}

}