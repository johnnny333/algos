import React from "react";
import { Link } from "react-router";

export const Address = (props) => <div>
	<br /> 
	<Link to='/address'>Twitter Feed </Link>
	<Link to='/address/instagram'>Instagram Feed </Link>
	<h1>We are located at 555 Gosia St.</h1>
	{props.children}
</div>;
