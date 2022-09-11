import React from 'react'
import Navbar from '../navbar'

function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.replace('/')
    }
    return (
        <>
            <Navbar />

            <div className="container mt-5 ">

                <div className="box p-3 bg-light rounded text-dark ">

                    <form id="myform" onSubmit={handleSubmit}>

                        <div className="display-6 fw-bold text-light bg-success text-center p-3 mb-3 rounded">Registration Form</div>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group mb-3 ">
                                    <label className='mb-2 fw-bold' htmlFor="fname">Firstname</label>
                                    <input type="text" id="fname" name="fname" placeholder="Enter Firstname" className="form-control" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mb-3 ">
                                    <label className='mb-2 fw-bold' htmlFor="lname">Lastname</label>
                                    <input type="text" id="lname" name="lname" placeholder="Enter lastname" className="form-control" />
                                </div>
                            </div>

                        </div>

                        <div className="form-group mb-3">
                            <label className='mb-2 fw-bold' htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter username" className="form-control" required />
                        </div>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className='mb-2 fw-bold' htmlFor="email">Email Id</label>
                                    <input type="email" id="email" name="email" placeholder="Sample@you.com" className="form-control" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className='mb-2 fw-bold' htmlFor="phoneno">Contact no</label>
                                    <input type="number" id="phoneno" name="phoneno" placeholder="+87986707" className="form-control" required />
                                </div>
                            </div>

                        </div>

                        <div className="form-group mb-3">
                            <label className='mb-2 fw-bold' htmlFor="password">Password</label>
                            <div className="input-group">
                                <input type="password" id="password" name="password" pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Enter password" className="form-control" required />
                                <span className="input-group-text"><i className="bi bi-eye" id="show"></i></span>
                            </div>
                        </div>

                        <div className="form-group  mb-3">
                            <label className='mb-2 fw-bold' htmlFor="password2">Confirm Password</label>
                            <div className="input-group">
                                <input type="password" id="password2" name="password2" pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Re-enter password" className="form-control" required />
                                <span className="input-group-text"><i className="bi bi-eye" id="show2"></i></span>
                            </div>
                        </div>

                        <div className="form-group my-2 text-center">
                            <button className="btn btn-secondary me-3 " type="reset">Reset</button>
                            <button className="btn btn-primary " type="submit"><i className="bi bi-box-arrow-up-right me-2"></i>Submit</button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}

export default SignUp
