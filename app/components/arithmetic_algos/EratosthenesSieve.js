import React from "react";

export class EratosthenesSieve extends React.Component {

	constructor(props) {
		super(props);
		this.state = { n: 2, isPrime: [] };
		this.handleChange = this.handleChange.bind(this);
		this.sieve = this.sieve.bind(this);
	}

	handleChange(event) {
		this.setState({n: event.target.value, isPrime: []});
	}

	sieve() {
		//http://introcs.cs.princeton.edu/java/14array/PrimeSieve.java.html

		let n = this.state.n, isPrime = this.state.isPrime;

        // initially assume all integers are prime
        for (let i = 2; i <= n; i++) {
            isPrime[i] = {isPrime: true, i: i};
        }

        // mark non-primes <= n using Sieve of Eratosthenes
        for (let factor = 2; factor*factor <= n; factor++) {

            // if factor is prime, then mark multiples of factor as nonprime
            // suffices to consider mutiples factor, factor+1, ...,  n/factor
            if (isPrime[factor].isPrime) {
                for (let j = factor; factor*j <= n; j++) {
                    isPrime[factor*j].isPrime = false;
                }
            }
        }

        // count primes
        let primes = 0;
        for (let i = 2; i <= n; i++) {
            if (isPrime[i].isPrime) primes++;
        }

        this.setState({isPrime: isPrime});

        console.log("primes: " + primes);
	}

	render() {

		return (

			<div>

			<form onSubmit={e => (e.preventDefault())}>

				<input type = "number" value={this.state.n} min="2" max="300" 
						onChange = { this.handleChange } />

				<button onClick={this.sieve} >Find</button>

			</form>


			{this.state.isPrime.map(function(object, i){

					if(object.isPrime) {return <span key={i} className="found">{object.i}</span>}
					else {return <span key={i} >x</span>}
				})}

			</div>
			)
	}
}