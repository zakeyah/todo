import { useState } from 'react';

const useForm = (props) => {
    const [item,setItem]=useState({})
 
 const handleInputChange = e => {
    console.log({[e.target.name]: e.target.value})
  setItem({ ...item, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
     console.log('item')
    e.preventDefault();
    e.target.reset();
    item.difficulty?item.difficulty=item.difficulty:item.difficulty=1
    props.handleSubmit(item);
   
    setItem({});
  };
	return [item, handleInputChange, handleSubmit];
};

export default useForm;