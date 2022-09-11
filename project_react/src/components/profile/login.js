import React from 'react'
import '../App.css';

function Login() {
    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="container min-vh-100 d-flex align-items-center justify-content-center">

                <div className="login text-center bg-light">

                    <h3 className=" text-center bg-success rounded mb-3 py-2 text-light">
                        Login
                    </h3>

                    <div className="input-group my-4">
                        <span className='input-group-text'><i className="bi bi-person"></i> </span>
                        <input type="text" className='form-control ' placeholder="Username  " />
                    </div>

                    <div className="input-group my-4">
                        <span className='input-group-text'><i className="bi bi-lock"></i> </span>
                        <input type="password" className='form-control p-2  ' placeholder=" Password" />
                        <span className='input-group-text'><i className="bi bi-eye"></i> </span>
                    </div>

                    <div className="text-start my-3">
                        <a href="/e" onClick={handleClick} className='ms-3 text-decoration-none' rel='noreferrer'>Forgot password ?</a>
                    </div >

                    <div className="my-3">
                        <button className="btn btn-primary fw-bold  ">Login</button>
                    </div>

                    <p className='text-dark' ><b>not a member ?</b>
                        <a className="ms-2 text-decoration-none" href="/profile/signup" >Sign up</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Login
