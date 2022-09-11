import React from 'react'

function Loading() {
    return (
        <div className='min-vh-100'>
            <div className="d-flex justify-content-center align-items-center ">
                <h1>Loading </h1>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    )
}

export default Loading