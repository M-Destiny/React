import React from 'react'
import { useState, useEffect , useRef } from 'react'

export default function Contact() {
    const txt1 = useRef()
    const [city, cityName] = useState('Mumbai')
    useEffect(() => {
        console.log('useEffect called' , Math.random())
    }, []);
    // if we want to call useEffect only once then we can pass empty array as second argument
    // otherwise itll be stuck in infinite loop
        


    function myfunc(){
        console.log(txt1.current.value)
        cityName(txt1.current.value)
    }
  return (
    <div className='container'>
        <h1 className='text-center text-uppercse'>Contact Component</h1>
        <input type="text" ref={txt1} className='form-control' />
        <button onClick={myfunc} className='btn btn-primary mt-4'>Click</button>
        {city}
    </div>
  )
}
