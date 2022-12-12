import React, { useState } from 'react'
import { useEffect } from 'react'
import Userpost from './Userpost'

export default function Userapi() {

    const [record, setRecord] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setRecord(result)
            })
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-uppercase'>User Data</h1>
            <div className='row'>
                {
                    record && record.length > 0 && record.map(obj => <div className='col-xl-3 text-center mt-4 mb-4'>
                        <h3>{obj.name}</h3>
                        <p>{obj.email}</p>
                        <p>{obj.phone}</p>
                        <p>{obj.website}</p>
                        <p>{obj.company.name}</p>
                        <p>{obj.company.catchPhrase}</p>
                        <p>{obj.company.bs}</p>
                    </div>)
                }
            </div>
            <Userpost />
        </div>
    )
}
