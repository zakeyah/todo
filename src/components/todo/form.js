import React, {useContext} from 'react';
import useForm from '../../hooks/useForm';
import { Form, Button } from 'react-bootstrap';
import {TodoContext} from '../../contaxt/todoContext'
// import { useState } from 'react';
function TodoForm (props) {
  const [item, handleInputChange, handleSubmit] = useForm(props);
  const {setDisable,disable,sort, setSort,list,setList} = useContext(TodoContext)

// console.log(props.list,list)
    return (
      <>
        <h3>Add Item</h3>
        <div
        className="border rounded border-success"

>
        <Form onSubmit={handleSubmit}
        style={{
          marginLeft: '12.5%',
          width: '40vw',

         
          padding: '0.5rem 1rem 0.5rem 2rem',
        }}>
        <Form.Group >
        <Form.Label as="legend"  sm={2} >
            <span>To Do Item</span>
            <br/>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
         
          </Form.Label>
          
          <Form.Group controlId="formBasicRange">
          <Form.Label as="legend"  sm={2}>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </Form.Label>
          </Form.Group>
          <Form.Label as="legend"  sm={2}>
            <span>Assigned To</span>
            <br/>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
          <br/>
          <Button variant="outline-success" type="submit" >Add Item</Button>
          <Button variant="outline-success" onClick={()=>setDisable(pre=>!pre)}>{disable?'show Completed':'hide Completed'}</Button>
          <Button variant="outline-success" onClick={()=>{
            setSort(pre=>!pre)

           let  list2 =[...list].sort((b,a)=>a.difficulty-b.difficulty )
           
            setList(list2)
            }}>sort</Button>
          </Form.Group>
        </Form>
        </div>
      </>
    );
}

export default TodoForm;
