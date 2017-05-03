import React from "react";
import { IndexLink } from "react-router";

export const Nav = () => (
	<div>
		<IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/binary-search'>BinarySearch</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/linear-search'>LinearSearch</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/bubble-sort'>BubbleSort</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/selection-sort'>SelectionSort</IndexLink>
	</div>
);


