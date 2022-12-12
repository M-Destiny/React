import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Api() {
    const [record, setRecord] = useState([])

    useEffect(() => {
        console.log('first useEffect called , Call api using use effect hook and store value in state variable')
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setRecord(result)
            }
            )
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-uppercse'>Api Component</h1>
            <div className='row'>
                {
                    record && record.length > 0 && record.map(obj => <div className='col-xl-3 text-center mt-4 mb-4'>
                        <Link to={'/product/'+obj.id}><img src={obj.image} className='img-fluid' alt=''/></Link>
                        <h3>{obj.title}</h3>
                        <p>{obj.price}</p>
                        <b><p>{obj.category}</p>
                            <p>rating {obj.rating.rate} stars out  of 5 <br /> Total Ratings: {obj.rating.count}</p></b>
                    </div>)
                }
            </div>
        </div>
    )
}
