import React, { useEffect, useContext} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap';
import useAjex from '../../hooks/useAjax'
import { TodoContext } from '../../contaxt/todoContext.js';




// import './todo.scss';

function ToDo (props) {
  const [,,,,getAll]=useAjex(props)
  const {list}= useContext(TodoContext)

  
 useEffect(getAll, []);

  useEffect(
    () =>{
        document.title = `${
          list.filter((item) => !item.complete).length
        }`
    },[list]
      );

  
    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">
        <Container className="mr-3  d-inline-block">
        <Row>
          {/* <col> */}

          <div>
            <TodoForm  />
          </div>
          {/* </col> */}
          {/* <col>  */}

          <div>
            <TodoList/>
          </div>
           {/* </col>  */}
           <>

           
           </>
         </Row>
          </Container>
        </section>
      </>
    );

}

export default ToDo;
