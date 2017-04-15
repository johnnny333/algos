import React from "react";
import { IndexLink } from "react-router";

export const Nav = () => (
	<div>
		<IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/binary-search'>Binary Search</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
		<IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
	</div>
);


