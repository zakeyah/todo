import React, {useState, useContext} from 'react';
import {TodoContext} from '../../contaxt/todoContext'
import { Button,Modal,Form ,Toast,Badge  } from 'react-bootstrap';
import useAjex from '../../hooks/useAjax'
function TodoList (props) {
  const [,toggleComplete,handelEdit,handelDelete]=useAjex(props)
  const [show, setShow] = useState(false);
  const [item,setItem]=useState({})
  const {disable,list,todoPerPage,currentPage,setCurrentPage} = useContext(TodoContext)


  let indexOfLastItem = currentPage * todoPerPage;
  let indexOfFirstItem = indexOfLastItem - todoPerPage;
  let currentItem = list.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers = [];

  const changePage =(numberP)=>{
  setCurrentPage(numberP)
  indexOfLastItem = currentPage * todoPerPage;
  indexOfFirstItem = indexOfLastItem - todoPerPage;
  currentItem = list.slice(indexOfFirstItem, indexOfLastItem)
}

for (let i = 1; i <= Math.ceil(list.length / todoPerPage); i++) {
  pageNumbers.push(i);
}


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
      handelEdit(item)
    }



    
 
    return (
      <>
       <div
  aria-live="polite"
  aria-atomic="true"
  style={{ width: '310px' }}
  // { sort ? props.list && }
>
      {currentItem.map((item) => (
        
        
        <> { disable ? !item.complete && <Toast
          onClose={() => handelDelete(item._id)}
          key={item._id}
        >
          <Toast.Header>
            <Badge
              style={{ cursor: 'pointer' }}
              className="mr-auto m-1"
              onClick={() => toggleComplete(item._id)}
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
          onClose={() => handelDelete(item._id)}
          key={item._id}
        >
          <Toast.Header>
            <Badge
              style={{ cursor: 'pointer' }}
              className="mr-auto m-1"
              onClick={() => toggleComplete(item._id)}
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


    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => changePage(number)} href='!#' className='page-link'>
              
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
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
