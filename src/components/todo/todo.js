import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap';




// import './todo.scss';

function ToDo (props) {

  const [list, setList] = useState([])

 const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    // item.difficulty=5
    setList([...list, item]);
    console.log(list)
  };

 const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list2);
    }

  };

 useEffect(()=> {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  }, []);

  useEffect(
    () =>{
      console.log(list.filter((item) => !item.complete).length);
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
        <Container>
        <Row>
          <col>

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          </col>
          <col>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
          </col>
         </Row>
          </Container>
        </section>
      </>
    );

}

export default ToDo;
