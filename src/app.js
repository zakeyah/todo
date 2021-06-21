import React from 'react';

import ToDo from './components/todo/todo.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
        <ToDo />
      </>
    );
  }
}
