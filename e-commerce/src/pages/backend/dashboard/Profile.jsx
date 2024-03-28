import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Contact</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                    <li className="breadcrumb-item active text-white">Contact</li>
                </ol>
            </div>
        </div>
    )
}
