import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../../layouts/Sidebar';
import { addUserStart, updateUserStart } from '../../../redux/actions/user.action';
import { useFormData } from '../../../hooks/useFormData';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const initialState = {
    name: "",
    email: "",
    password: "",
    contact: '',
    image: "",
    status: "0"
}

export default function AddOrEditUsers() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users)
    const navigate = useNavigate();

    const [formData, setFormData, imageLoading, inputChange, uploadFiles] = useFormData(initialState, "user");

    let { name, email, contact, image, password, status, } = formData;

    const submit = (event) => {
        event.preventDefault()

        if (id) {
            dispatch(updateUserStart(formData))
        } else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    dispatch(addUserStart({ ...formData, uid: userCredential.user.uid }))

                })
                .catch((error) => {

                });

        }

        setTimeout(() => {
            navigate('/admin/user')

        }, 1000)
    }
    const getUserById = () => {
        let user = users.find((user) => user.id === id);

        if (user) {
            setFormData(user)
        } else {
            navigate('/admin/user')
        }
    }
    useEffect(() => {
        if (id) {
            getUserById();
        }
    }, [id])



    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6"> {id ? "Edit" : "Add"} User</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">{id ? "Edit" : "Add"}  User</Link></li>
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
                                <h4 className='fw-bold'>  User</h4>
                                <Link to="/admin/user" className='btn btn-primary button text-white'>Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor='name' className="form-label"> User Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='User Name'
                                            id='name'
                                            name="name"
                                            value={name}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='email' className="form-label"> User Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder=' Enter Email'
                                            id='email'
                                            name="email"
                                            value={email}
                                            onChange={inputChange} />
                                    </div>

                                    {
                                        !id && <div className="mb-3">
                                            <label htmlFor='password' className="form-label"> User Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder='Enter Password'
                                                id='password'
                                                name="password"
                                                value={password}
                                                onChange={inputChange} />
                                        </div>
                                    }
                                    <div className="mb-3">
                                        <label htmlFor='contact' className="form-label"> User Contact Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter contact'
                                            id='contact'
                                            name="contact"
                                            value={contact}
                                            onChange={inputChange} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor='image' className="form-label"> User Image</label>
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
                                        <label htmlFor='status' className="form-label"> User Status</label>
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
