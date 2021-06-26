import { useState } from 'react';
import useAjax from   './useAjax';

const useForm = (props) => {
  const[,,,,,addItem]= useAjax()
    const [item,setItem]=useState({difficulty:"1"})
 
 const handleInputChange = e => {
  setItem({ ...item, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    addItem(item);
    setItem({difficulty:"1"});
  };
	return [item, handleInputChange, handleSubmit];
};

export default useForm;