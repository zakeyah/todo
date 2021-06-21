import { useState } from 'react';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = () => {

    const [list, setList] = useState([])

    const addItem = (item) => {
       item._id = Math.random();
       item.complete = false;
       setList([...list, item]);
     };
   
    const toggleComplete = id => {
      console.log('kkkkkkkkkkkkkkkkkk')
   
       let item = list.filter(i => i._id === id)[0] || {};
   
       if (item._id) {
         item.complete = !item.complete;
         let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);
         setList(list2);
       }
   
     };
     const handelEdit=(item)=>{
       let itemFromList = list.filter((element) => element._id === item._id)[0] || {};
       itemFromList = item;
         let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
         setList(newList);
     }
     const handelDelete=(id)=>{
       let items = list.filter((element) => element._id !== id)
       setList(items)
     }

return [list,toggleComplete,handelEdit,handelDelete,setList,addItem]
}

export default useAjax;