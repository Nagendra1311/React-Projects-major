import React, { useEffect } from 'react'
import Sidebar from '../../../layouts/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFormData } from '../../../hooks/useFormData'
import { useDispatch, useSelector } from 'react-redux'
import { addProductStart, updateProductStart } from '../../../redux/actions/product.action'

const initialState = {
    name: "",
    slug: "",
    description: "",
    shortDescription: '',
    price: 0,
    image: "",
    quantity: 1,
    category: "",
    status: ""

}
export default function AddOrEditProducts() {
    let { id } = useParams();

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products)
    const navigate = useNavigate();

    const [formData, setFormData, imageLoading, inputChange, uploadFiles] = useFormData(initialState, "product");

    let {
        name, slug, description, shortDescription, price, image, quantity, category, status, } = formData

    const submit = (event) => {
        event.preventDefault()

        if (id) {
            dispatch(updateProductStart(formData))
        } else {
            dispatch(addProductStart(formData))

        }

        setTimeout(() => {
            navigate('/admin/product')

        }, 1000)
    }

    const getCategoryById = () => {
        let product = products.find((product) => product.id === id);

        if (product) {
            setFormData(product)
        } else {
            navigate('/admin/product')
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
                <h1 className="text-center text-white display-6"> {id ? "Edit" : "Add"} Product</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">{id ? "Edit" : "Add"}  Product</Link></li>
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
                                <h4 className='fw-bold'> {id ? "Edit" : "Add"}  Product</h4>
                                <Link to="/admin/product" className='btn btn-primary button text-white'>Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor='name' className="form-label"> Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Product Name'
                                            id='name'
                                            name="name"
                                            value={name}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='category' className="form-label"> Product Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Product Category'
                                            id='category'
                                            name="category"
                                            value={category}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='slug' className="form-label"> Product Slug</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Product Slug'
                                            id='slug'
                                            name="slug"
                                            value={slug}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='shortDescription' className="form-label"> Product Short Description</label>
                                        <textarea
                                            className="form-control"
                                            id='shortDescription'
                                            name="shortDescription"
                                            value={shortDescription}
                                            onChange={inputChange} rows={5} ></textarea>
                                    </div><div className="mb-3">
                                        <label htmlFor='description' className="form-label"> Product Description</label>
                                        <textarea
                                            className="form-control"
                                            id='description'
                                            name="description"
                                            value={description}
                                            onChange={inputChange} rows={10}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='image' className="form-label"> Product Image</label>
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
                                        <label htmlFor='price' className="form-label"> Product Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder='Product Price'
                                            id='price'
                                            name="price"
                                            value={price}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='quantity' className="form-label"> Product Quantity</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Product quantity'
                                            id='quantity'
                                            name="quantity"
                                            value={quantity}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor='status' className="form-label"> Product Status</label>
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
