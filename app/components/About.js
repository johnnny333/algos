import React, { Component } from "react";

export const About = (props) => (
	<div>
		<h3>Welcome to the About Page</h3>
		{props.params.name && <h2>Hello, {props.params.name}</h2>}
	</div>
);