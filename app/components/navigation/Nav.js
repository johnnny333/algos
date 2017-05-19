import React from "react";
import { IndexLink } from "react-router";

export const Nav = () => (
	<div>
		<IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/binary-search'>BinarySearch</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/linear-search'>LinearSearch</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/bubble-sort'>BubbleSort</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/selection-sort'>SelectionSort</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/insertion-sort'>InsertionSort</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/merge-sort'>MergeSort</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/euclidian-algorithm'>EuclidianAlgorithm</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/fizz-buzz'>FizzBuzz</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/fibonnaci-sequence'>FibonnaciSequence</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/eratosthenes-sieve'>EratosthenesSieve</IndexLink>&nbsp;
	</div>
);


