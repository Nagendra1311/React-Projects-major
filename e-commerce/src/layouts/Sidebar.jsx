import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Sidebar</li>
                <li className="list-group-item">Profile</li>
                <li className="list-group-item">Order</li>
                <li className="list-group-item">
                    <Link to="/admin/category"> Category</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/product"> Product</Link>

                </li>
            </ul>
        </>
    )
}
