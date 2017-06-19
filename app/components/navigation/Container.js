import React from "react";
import { Navbar, NavItem, NavDropdown, Nav } from "react-bootstrap";
import { IndexLink } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

export const Container = (props) => <div>	

<Navbar inverse collapseOnSelect>
	<Navbar.Header>
	<Navbar.Brand>
		<IndexLink activeClassName='active' to='/'>Home</IndexLink>
	</Navbar.Brand>
	<Navbar.Toggle />
	</Navbar.Header>

	<Navbar.Collapse>
	<Nav>
		
		<NavDropdown eventKey={1} title="Search algos" id="basic-nav-dropdown">

			<LinkContainer to="/binary-search">
				<NavItem eventKey={1.1}>Binary Search</NavItem>
			</LinkContainer>

			<LinkContainer to="/linear-search">
				<NavItem eventKey={1.2}>Linear Search</NavItem>
			</LinkContainer>

		</NavDropdown>


		<NavDropdown eventKey={2} title="Sorting algos" id="basic-nav-dropdown">
			
			<LinkContainer to="/bubble-sort">
				<NavItem eventKey={2.1}>Bubble Sort</NavItem>
			</LinkContainer>

			<LinkContainer to="/selection-sort">
				<NavItem eventKey={2.2}>Selection Sort</NavItem>
			</LinkContainer>

			<LinkContainer to="/insertion-sort">
				<NavItem eventKey={2.3}>Insertion Sort</NavItem>
			</LinkContainer>

			<LinkContainer to="/merge-sort">
				<NavItem eventKey={2.4}>Merge Sort</NavItem>
			</LinkContainer>

			<LinkContainer to="/quick-sort">
				<NavItem eventKey={2.5}>Quick Sort</NavItem>
			</LinkContainer>

		</NavDropdown>

		<NavDropdown eventKey={3} title="Arithmetic algos" id="basic-nav-dropdown">

			<LinkContainer to="/euclidian-algorithm">
				<NavItem eventKey={3.1}>Euclidian Algorithm</NavItem>
			</LinkContainer>

			<LinkContainer to="/fizz-buzz">
				<NavItem eventKey={3.2}>FizzBuzz</NavItem>
			</LinkContainer>

			<LinkContainer to="/fibonnaci-sequence">
				<NavItem eventKey={3.2}>FibonnaciSequence</NavItem>
			</LinkContainer>

			<LinkContainer to="/eratosthenes-sieve">
				<NavItem eventKey={3.2}>EratosthenesSieve</NavItem>
			</LinkContainer>

		</NavDropdown>

	</Nav> 

	</Navbar.Collapse>

  </Navbar>
	
	{props.children} 

	</div>;
