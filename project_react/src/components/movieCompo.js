import React from 'react'
import './App.css';

function MovieCompo({ thumbnail, title, status }) {
    return (
        <div >

            <div className='movieCompo  rounded bg-light'>

                <img src={thumbnail} className='movieCompo_img' alt={title} />

                <div className='movieCompo_info  '>

                    {/* <h3 className='px-3 text-dark'> {title}</h3> */}

                    <h3 className=' text-success text-center'>{status}</h3>

                </div>

            </div>

        </div>
    )
}

export default MovieCompo
