import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'



export default function SingleProduct() {
    const [record, setRecord] = useState({})
    var urlvalue = useParams();
    console.log(urlvalue)
    var productid = urlvalue['pid']




    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + productid)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setRecord(result);
            })
    }, [])
    return (
        <div className='container'>
            {
                record && (
                    <>
                        <h1 className='text-center text-uppercase mb-5'>Product Page</h1>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <img src={record.image} className='img-fluid' alt='product image' />
                            </div>
                            <div className='col-xl-6 ps-5'>
                                <h1>{record.title}</h1>
                                <b>
                                    <p>{record.description}</p>
                                    <p>Price: {record.price}$</p>
                                    <p>Category: {record.category}</p>
                                    {/* <p>Rating: {record.rating.rate} out of 5</p>
                                    <p>Total Ratings: {record.rating.count}</p> */}
                                </b>
                                <button className='btn btn-primary'>Add to cart</button>
                            </div>
                        </div>
                    </>

                )
            }

        </div>
    )
}
