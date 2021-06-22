import React, {useState, useContext} from 'react';
import {TodoContext} from '../../contaxt/todoContext'
import { ListGroup,Button,Modal,Form ,Toast,Badge  } from 'react-bootstrap';
function TodoList (props) {
  const [show, setShow] = useState(false);
  const [item,setItem]=useState({})
  const {disable} = useContext(TodoContext)
 
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
       <div
  aria-live="polite"
  aria-atomic="true"
  style={{ width: '310px' }}
>
      {props.list.map((item) => (
       
      
         <> { disable ? !item.complete && <Toast
          onClose={() => props.handelDelete(item._id)}
          key={item._id}
        >
          <Toast.Header>
            <Badge
              style={{ cursor: 'pointer' }}
              className="mr-auto m-1"
              onClick={() => props.handleComplete(item._id)}
              size="sm"
              variant={`${item.complete ?   'success':'danger'}`}
            >{`${item.complete ? 'Completed' : 'notCompleted'}`}</Badge>
            <small >{item.assignee}</small>
          </Toast.Header>
          <Toast.Body>
            <p>{item.text}</p>
            <div className="difficulty">difficulty: {item.difficulty}</div >
          <Button variant="outline-success" onClick={()=>handleShow(item)} >edit</Button>
          </Toast.Body>
        </Toast>
        :
        <Toast
          onClose={() => props.handelDelete(item._id)}
          key={item._id}
        >
          <Toast.Header>
            <Badge
              style={{ cursor: 'pointer' }}
              className="mr-auto m-1"
              onClick={() => props.handleComplete(item._id)}
              size="sm"
              variant={`${item.complete ?   'success':'danger'}`}
            >{`${item.complete ? 'Completed' : 'notCompleted'}`}</Badge>
            <small >{item.assignee}</small>
          </Toast.Header>
          <Toast.Body>
            <p>{item.text}</p>
            <div className="difficulty">difficulty: {item.difficulty}</div >
          <Button variant="outline-success" onClick={()=>handleShow(item)} >edit</Button>
          </Toast.Body>
        </Toast> } </>
      ))}
    </div>
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
