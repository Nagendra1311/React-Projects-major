import React from 'react'
import Sidebar from '../../../layouts/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserStart } from '../../../redux/actions/user.action';

export default function User() {
    const users = useSelector(state => state.user.users)
    const dispatch = useDispatch()

    const deleteUser = (user) => {
        dispatch(deleteUserStart(user))
    }
    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">User</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">User</Link></li>
                </ol>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-sm-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-9">
                        <div className="card" >
                            <div className="card-header d-flex justify-content-between ">
                                <h4 className='fw-bold'>User</h4>
                                <Link to="/admin/user/create" className='btn btn-primary button text-white'>Add User</Link>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.length > 0 ? users.map((user, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td><img src={user.image} alt={user.name} style={{
                                                        width: "50px",
                                                        height: "50px"
                                                    }} /></td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.contact}</td>
                                                    <td>{user.status === "1" ? 'Active' : 'Inactive'}</td>
                                                    <td>
                                                        <Link to={`/admin/user/edit/${user.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                                                        <button className='btn btn-danger btn-sm me-2' onClick={() => deleteUser(user)}>Delete</button>

                                                    </td>
                                                </tr>
                                            )) : null
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
