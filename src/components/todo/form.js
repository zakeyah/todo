import React from 'react';
import useForm from '../../hooks/useForm';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
function TodoForm (props) {
  const [item, handleInputChange, handleSubmit] = useForm(props);

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
          <Button variant="outline-success" type="submit" >Add Item</Button>
          </Form.Group>
        </Form>
      </>
    );
}

export default TodoForm;
