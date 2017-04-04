import React, { Component } from "react";

export const NamedComponents = (props) => (
		<div>
			{props.title}<br />
			{props.subTitle}
		</div>
	);

export const Title = () => (
	<h1>Hello from Title Component</h1>
);

export const SubTitle = () => (
	<h1>Hello from SubTitle Component</h1>
);