import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

function Footer() {
    return (
        <div className=' sticky-bottom bg-dark mt-4'>

            <div className='container '>
                <div className='row justify-content-evenly'>

                    <div className='col-6'>

                        <Link className='foot' to={'/feedback'}>
                            <div className='content text-center py-3 fs-1'>
                                <i className="bi bi-chat-right-text "></i>
                                <p>Feedback</p>
                            </div>
                        </Link>

                    </div>

                    <div className='col-6'>

                        <Link className='foot' to={'/contact'}>
                            <div className='content text-center py-3 fs-1'>
                                <i className="bi bi-telephone-inbound"></i>
                                <p> Contact Us</p>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>


            <hr />

            <div className='text-muted text-center  pb-3 '>

                Copy Rights 2022 &copy; Movie Site .All Rights Reserved.

            </div>

        </div>


    )
}

export default Footer
