import React from 'react';
import {  useState } from 'react';
import { ListGroup,Button,Modal,Form } from 'react-bootstrap';
function TodoList (props) {
  const [show, setShow] = useState(false);
  const [item,setItem]=useState({})
 
 const handleInputChange = e => {
   setItem({ ...item, [e.target.name]: e.target.value });
  };
  
  const handleClose = () => {
    setShow(false)};
  const handleShow = (item) => {
    setItem(item)
    setShow(true)} ;
    
    const handelSubmit=(e)=>{
      e.preventDefault()
      handleClose();
      props.handelEdit(item)
    }



 
    return (
      <>
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item action variant="success"
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            <Button variant="outline-success" onClick={()=>handleShow(item)} >edit</Button>
            <Button variant="outline-success" onClick={()=>props.handelDelete(item._id)}>delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
    

<Form >
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
          <Button variant="outline-success" type="submit" onClick={handelSubmit}  >update</Button>
          </Form.Group>
        </Form>

        </Modal.Body>



      </Modal>
      </>
      
    );
 
}

export default TodoList;
