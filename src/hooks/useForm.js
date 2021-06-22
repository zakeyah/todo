import { useState } from 'react';

const useForm = (props) => {
    const [item,setItem]=useState({})
 
 const handleInputChange = e => {
  setItem({ ...item, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    item.difficulty?item.difficulty=item.difficulty:item.difficulty=1
    props.handleSubmit(item);
   
    setItem({});
  };
	return [item, handleInputChange, handleSubmit];
};

export default useForm;