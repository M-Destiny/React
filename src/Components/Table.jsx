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

            // document.write(tableout + '<br />')
            // if (i !== 10) {
            //     document.write(tableout +"<br>");
            // } else { }

        }
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            var p = document.createElement('p')
            p.innerHTML = arr[i]
            document.getElementById('tdata').appendChild(p)

            // console.log(arr[i]);
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center text-uppercase'> Table</h1>
            <input type="text" className='form-control mb-3' ref={input} />
            <button className='btn btn-primary' onClick={ctable}>Submit</button>
            {/*  create a multiplication table */}
            <table>
                <thead>
                    <th scope="col">Table</th>
                </thead>
                <tr>
                    <td id='tdata'></td>
                </tr>


            </table>




            {/* <Tout table={num} /> */}
        </div >

    )
}
