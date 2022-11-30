import React from 'react'
import { useRef, useState } from 'react';


export default function Userinfo() {
    var data1 = useRef();
    var data2 = useRef(1);
    var city = useRef(2);
    var date1 = new Date(data2.value);
    var date2 = new Date();
    var diff = date2 - date1;
    var days = diff / (1000 * 60 * 60 * 24);
    console.log(typeof days, days/365);
    const [username, setUsername] = useState('Enter name');
    const [userage, setUserage] = useState('Enter age');
    const [usercity, setUsercity] = useState('Enter city');
    function userdata() {
        setUsername(data1.current.value);
        setUserage(data2.current.value);
        setUsercity(city.current.value);

        if (days - 6570 > 0) {
            console.log("you are " + (days - 6570) + " days old");
            console.log("your are adult")
            // document.getElementById("ad").innerHTML = "you are Adult";
        } else {
            console.log("you are not Adult yet");
            // document.getElementById("ad").innerHTML = "you are not Adult yet";
        }


    }
    return (
        <div className='row mt-5'>
            <h1 className='text-center pb-3'>Userinfo</h1>
            <div className='col-xl-6'>
                <input ref={data1} type="text" className='form-control' ></input>
                <br />
                <input type="date" className='form-control' ref={data2} ></input>
                <br />
                <p>
                    Select your city: &nbsp;
                    <select ref={city}>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    <br />
                    <br />
                    <p className='text-center'>
                        <button className='btn btn-dark' onClick={userdata}>Enter</button>
                    </p>
                </p>
            </div>
            <div className='col-xl-6 pl-2'>
                <p className='text-uppercase'>
                    Name: &nbsp; {username}
                </p>
                <p className='text-uppercase'>
                    Adult: &nbsp; {userage}
                </p>
                <p className='text-uppercase'>
                    Location: &nbsp; {usercity}
                </p>
            </div>
        </div>
    )
}
