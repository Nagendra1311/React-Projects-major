import React, { useEffect, useState } from 'react'
import Sidebar from '../../../layouts/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryStart, updateCategoryStart } from '../../../redux/actions/category.action'
import { useFormData } from '../../../hooks/useFormData'

let initialState = {
    name: "",
    image: "",
    status: 0,
}

export default function AddOrEditCategory() {
    let { id } = useParams();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories)
    const navigate = useNavigate();


    const [formData, setFormData, imageLoading, inputChange, uploadFiles] = useFormData(initialState, "category");

    let { name, status, image } = formData;

    const submit = (event) => {
        event.preventDefault();

        if (id) {
            dispatch(updateCategoryStart(formData))
        } else {
            dispatch(addCategoryStart(formData))

        }

        setTimeout(() => {
            navigate("/admin/category")
        }, 1000)
    }

    const getCategoryById = () => {
        let category = categories.find((category) => category.id === id);

        if (category) {
            setFormData(category)
        } else {
            navigate('/admin/category')
        }
    }


    useEffect(() => {
        if (id) {
            getCategoryById();
        }
    }, [id])

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6"> {id ? "Edit" : "Add"} Category</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">{id ? "Edit" : "Add"} Category</Link></li>
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
                                <h4 className='fw-bold'> {id ? "Edit" : "Add"} Category</h4>
                                <Link to="/admin/category" className='btn btn-primary button text-white'>Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor='name' className="form-label"> Category Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Category Name'
                                            id='name'
                                            name="name"
                                            value={name}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='image' className="form-label"> Category Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id='image'
                                            onChange={uploadFiles} />
                                        {
                                            image && <div className="mt-4">
                                                <img src={image} alt="" style={{
                                                    width: "50px",
                                                    height: "50px"
                                                }} />
                                            </div>
                                        }


                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='status' className="form-label"> Category Image</label>
                                        <select
                                            type="status"
                                            className="form-control"
                                            id='status'
                                            name="status"
                                            value={status}
                                            onChange={inputChange} >
                                            <option value="hidden"> Select Status</option>
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 d-grid">
                                            <button type='submit' className="btn btn-primary text-white" disabled={imageLoading}>{id ? "Update" : "Submit"}</button>
                                        </div>
                                        <div className="col-sm-6 d-grid">
                                            <button type='reset' className="btn btn-warning text-white">Reset</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
