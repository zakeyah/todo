import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm (props) {
 const [item,setItem]=useState({})
 
 const handleInputChange = e => {
  setItem({ ...item, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    item.difficulty?item.difficulty=item.difficulty:item.difficulty=1
    props.handleSubmit(item);
   
    setItem({});
  };

 
    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group >
        <Form.Label as="legend" column sm={2}>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
          <Form.Group controlId="formBasicRange">
          <Form.Label as="legend" column sm={2}>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </Form.Label>
          </Form.Group>
          <Form.Label as="legend" column sm={2}>
            <span>Assigned To</span>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
          <br/>
          <Button variant="outline-success" >Add Item</Button>
          </Form.Group>
        </Form>
      </>
    );
}

export default TodoForm;
