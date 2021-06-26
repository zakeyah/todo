import { useContext } from 'react';
import axios from 'axios';
import {TodoContext} from '../contaxt/todoContext'


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
// const todoAPI ='https://zakeyah-api.herokuapp.com/todo'

const useAjax = () => {
  const {list,setList} = useContext(TodoContext)

const addItem=async (item)=>{
          item.due = new Date();
  const toDo= await axios({
    method: 'post',
    url: todoAPI,
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    data: item,
    })
    console.log(toDo.data)
   
    setList( [...list, item]);
    }
     
 
     const getAll = ()=>{
      async  function x(){

            const results = await axios.get(todoAPI);
            setList([...results.data.results]);
          }

          x()
      


     }
   
    const toggleComplete =async (id) => {
   
       let item = list.filter(i => i._id === id)[0] || {};
      //  console.log(item)
   
       if (item._id) {
         item.complete = !item.complete;
         let url = `${todoAPI}/${id}`;
          await axios.put(url, item);

         let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);

         setList(list2);
       }
   
     };
     const handelEdit=async (item)=>{
      let url = `${todoAPI}/${item._id}`;
       await axios.put(url, item);
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
    const handelDelete=async (id)=>{
      // console.log(typeof  id)
      let url = `${todoAPI}/${id}`;
       await axios.delete(url);
       let items = list.filter((element) => element._id !== id)
       setList(items)
     }

return [list,toggleComplete,handelEdit,handelDelete,getAll,addItem,setList]
}

export default useAjax;