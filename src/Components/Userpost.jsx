import React, { useState } from 'react'
import { useEffect } from 'react'
export default function Userpost() {
    const [record, setRecord] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setRecord(result);
                // console.log(record);
            })
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center text-uppercase'> User Posts</h1>
            <div className='row'>
                {
                    record && record.length > 0 && record.map(obj => <div className='col-xl-3 text-center mt-4 mb-4'>
                        <h3>{obj.title}</h3>
                        <p>{obj.body}</p>
                    </div>)
                }

            </div>
        </div>
    )
}
