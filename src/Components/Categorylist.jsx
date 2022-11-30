import React from 'react'
import { useRef, useState } from 'react';
import Categoryadd from './Categoryadd'

export default function Categorylist() {
  /* //write a function to add category into a list */ 
  var data1 =useRef();
  const [category, setCategory] = useState();
  
  function addcat() {
    // console.log('Add category');
    console.log(data1.current.value);
    var textbox = data1.current.value;
    setCategory(textbox);
  }
  return (
    <div className='container'>
      <input type="text" ref={data1} className='form-control' placeholder='Enter category name' />
      <br />
      <button className='btn btn-dark' onClick={addcat}>Add</button> 
      {/* {category} */}
      <br />
      <br />




      <Categoryadd addcat={category} />
      {/* <Categoryadd /> */}
    </div>
  )
}
