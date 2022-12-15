import React, { useState } from 'react'
import { useRef } from 'react'
// import Tout from './Tout'

export default function Table() {
    // create a multiplication table
    //create a multiplication table in react and print the values in a table format
    var input = useRef()
    const [num, setNum] = useState(0)
    const [arr, setArr] = useState([])
    function ctable() {
        var arr = []
        var num = input.current.value
        for (var i = 1; i <= 10; i++) {
            // console.log(num * i);
            // console.log(num + ' x ' + i + ' = ' + num * i);
            var tableout = num + ' x ' + i + ' = ' + num * i;
            setNum(tableout)
            var tt = arr.push(tableout)
            setArr(tt)
        }
        for (var i = 0; i < arr.length; i++) {
            var p = document.createElement('tr', '/tr')
            p.innerHTML = `<td>${arr[i]}</td>`
            document.getElementById('tdata').appendChild(p)
        }
        console.log(arr)
    }

    return (
        <div className='container'>
            <h1 className='text-center text-uppercase'> Table</h1>
            <input type="text" className='form-control mb-3' ref={input} />
            <button className='btn btn-primary' onClick={ctable}>Submit</button>
            {/*  create a multiplication table */}
            <table className='table table-light table-striped-columns'>
                <thead>
                    <tr>
                        <th scope="col">Table</th>
                    </tr>
                </thead>
                <tbody id='tdata'>
                </tbody>


            </table>




            {/* <Tout table={num} /> */}
        </div >

    )
}
