import React from 'react'
import { Link } from 'react-router-dom'

export default function Categorylist() {
  return (
    <div className='container'><ul class="list-group">
    <li class="list-group-item">Adidas</li>
    <li class="list-group-item">Puma</li>
    <li class="list-group-item">Nike</li>
    <li class="list-group-item" ><Link to="/category/add">Add category</Link></li>
  </ul>
  </div>
  )
}
