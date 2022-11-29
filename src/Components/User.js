import React from 'react'
import { useRef, useState } from 'react';
export default function User(props) {
    // var ans = useState(0);   
    // console.log(ans);
    const [username, setUsername] = useState('Himanshu');
    //username holds the value whereas setUsername is the function to change the value
    const txt1 = useRef();

    function myfunc() {
        // console.log('Test');
        // console.log(txt1);
        // console.log(txt1.current.value);
        setUsername(txt1.current.value);
        props.userage = "30";
        //props wont change the uservalue so we use useState so the vaue can be modified
        // console.log(document.getElementById('txt1').value);
    }
    return (
        <div>
            <input type="text" placeholder="Enter your name" className="form-control" ref={txt1} id="w1" />
            <br />
            <button onClick={myfunc}>Submit</button>
            <br />
            <p>
                {username}
                <br />
                {props.userage}

            </p>
        </div>
    )
}
