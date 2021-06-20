import React from 'react';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

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
   
    console.log(item,'item')
    // console.log(newItem,'neeeeew')
    setItem({});
  };

 
    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <Button variant="outline-success" >Add Item</Button>
        </form>
      </>
    );
}

export default TodoForm;
