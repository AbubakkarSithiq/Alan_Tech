import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <div>


            <div className='container  d-flex align-items-center min-vh-100'>

                <div>

                    <div className='display-1 fw-bold  ps-3 '>

                        Error !

                    </div>

                    <div className='py-5 ps-3 h1'>

                        404 Page doesn't found

                        <Link to={'/home'} className='btn btn-danger ms-0 ms-sm-4 mt-sm-0 mt-5'><i className='bi bi-house-door-fill'></i> Go to Home Page</Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default NotFound
