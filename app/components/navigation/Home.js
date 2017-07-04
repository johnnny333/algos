import React from "react";
import { Button, PageHeader, Form, FormGroup, FormControl } from "react-bootstrap";

export class Home extends React.Component {

  render() {
    document.title = "Algos";
    return (
      <div>
        <PageHeader>Algos<br></br>
          <small>Was made as an attempt to learn React and few algorithms.
          Contributions, suggestions, issues etc are very welcome - repo link is
          in top, right corner.
          </small>
        </PageHeader>

        <ol>
          <li>Search algos</li>
            <ul>
              <li><a action="push" href="#/binary-search">Binary Search</a></li>
              <li><a action="push" href="#/linear-search">Linear Search</a></li>
            </ul>
          <li>Sorting algos</li>
          <ul>
            <li><a action="push" href="#/bubble-sort">Bubble Sort</a></li>
            <li><a action="push" href="#/selection-sort">Selection Sort</a></li>
            <li><a action="push" href="#/insertion-sort">Insertion Sort</a></li>
            <li><a action="push" href="#/merge-sort">Merge Sort</a></li>
            <li><a action="push" href="#/quick-sort">Quick Sort</a></li>
          </ul>
          <li>Arithmetic algos</li>
          <ul>
            <li><a action="push" href="#/euclidian-algorithm">Euclidian Algorithm</a></li>
            <li><a action="push" href="#/fizz-buzz">FizzBuzz</a></li>
            <li><a action="push" href="#/fibonnaci-sequence">Fibonnaci Sequence</a></li>
            <li><a action="push" href="#/eratosthenes-sieve">Eratosthenes Sieve</a></li>
          </ul>
        </ol>
      </div>
    )
  }
}
