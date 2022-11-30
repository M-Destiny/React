import React from 'react'
// import { useRef, useState } from 'react';

export default function Categoryadd(props) {
    console.log(props);
    // var props = addcat;
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Catgory</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>


                    </tr>
                </thead>
                <tbody>
                    {
                    props.addcat!="" && (
                        <tr>
                            <th scope="row">1</th>
                            <td>{props.addcat}</td>
                            <td><button className='btn btn-warning'>Edit</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div>
    )
}
