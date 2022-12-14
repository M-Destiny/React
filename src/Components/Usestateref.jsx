import React, { useState } from 'react'
import { useRef } from 'react'

export default function Usestateref() {
    var m1 = useRef()
    var m2 = useRef()
    const [first, setFirst] = useState([])
    const [last, setLast] = useState([])

    function func() {
        console.log(m1.current.value);
        console.log(m2.current.value);
        setFirst(m1.current.value)
        setLast(m2.current.value)


    }

    return (
        <div className='container'>
            <h1 className='text-center text-uppercase'> Usestateref</h1>


            <input type="text" className='form-control' placeholder='Enter First Name' ref={m1} /> <br />
            <input type="text" className='form-control' placeholder='Enter Last NAme' ref={m2} /> <br />
            <button className='btn btn-primary' onClick={func}>Submit</button>
            <h1 className='text-center text-uppercase'> {first} {last}</h1>
        </div>
    )
}
