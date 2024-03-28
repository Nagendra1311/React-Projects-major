import React, { useEffect, useState } from 'react'
import Sidebar from '../../../layouts/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryStart, updateCategoryStart } from '../../../redux/actions/category.action'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase-config'

let initialState = {
    name: "",
    image: "",
    status: 0,
}

export default function AddOrEditCategory() {
    let { id } = useParams();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories)
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const [imageLoading, setImageLoading] = useState(false)

    let { name, status, image } = formData;

    const inputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value

        }))
    }

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


    const uploadFiles = (event) => {
        // console.log(event.target.files[0]);
        const storageRef = ref(storage, 'category/' + event.target.files[0].name);

        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setImageLoading(true);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageLoading(false)
                    setFormData((prevValue) => ({
                        ...prevValue,
                        image: downloadURL
                    }))
                });
            }
        );
    }
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
                                            <button type='submit' className="btn btn-primary text-white" disabled={imageLoading}>Submit</button>
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
