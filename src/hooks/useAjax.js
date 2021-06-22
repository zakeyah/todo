import { useState } from 'react';
import axios from 'axios';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const todoAPI ='https://zakeyah-api.herokuapp.com/todo'

const useAjax = () => {

    const [list, setList] = useState([])

    const addItem =async (item) => {
        try{
          
          item._id = Math.random();
          item.complete = false;
          item.due = new Date();
          // const obj ={
          //   method: 'post',
          //   mode: 'cors',
          //   cache: 'no-cache',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(item)
          // }

        //  const results= await axios({
        //     method: 'post',
        //     url: todoAPI,
        //     headers: { 'Content-Type': 'application/json' },
        //     data: JSON.stringify(item)
        //   })

            
            const results = await axios.post(todoAPI, item);
            // console.log(results.data,';;;;;;;;;;;;;;;;;;;;;;;;;;')
            setList([...list, results.data]);
        }catch(e){
            console.log(e)}
     };
     const getAll =  async()=>{
       const results = await axios.get(todoAPI);
       console.log(results.data)
       setList([...results.data]);

     }
   
    const toggleComplete = id => {
   
       let item = list.filter(i => i._id === id)[0] || {};
   
       if (item._id) {
         item.record.complete = !item.complete;
         let list2 = list.map(listItem => listItem.record._id === item.record_id ? item : listItem);

         setList(list2);
       }
   
     };
     const handelEdit=async (item)=>{
      console.log(typeof  item._id)
      let url = `${todoAPI}/${item._id}`;
      const results = await axios.put(url, item);
      let itemFromList = list.filter((element) => element._id === item._id)[0] || {};
      itemFromList = item;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
    const handelDelete=async (id)=>{
      console.log(typeof  id)
      let url = `${todoAPI}/${id}`;
      const results = await axios.delete(url);
      console.log(results)
          console.log(results,'sssssssssssssssssss')
          const results2 = await axios.get(todoAPI);
       let items = list.filter((element) => element._id !== id)
       setList(items)
     }

return [list,toggleComplete,handelEdit,handelDelete,getAll,addItem]
}

export default useAjax;