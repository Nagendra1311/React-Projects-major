import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Login</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">login</Link></li>
                </ol>
            </div>
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in to Fruitables</h3>
                        <div className="card-text">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <div className='password'>
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <Link to="#s">Forgot password?</Link>
                                    </div>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>

                                <div className="sign-up">
                                    Don't have an account? <Link to="#">Create One</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
