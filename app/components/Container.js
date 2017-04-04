import React, { Component } from "react";
import {Nav} from "./Nav";

export const Container = (props) => <div>	<Nav />	{props.children} </div>;