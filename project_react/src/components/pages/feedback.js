import React from 'react';
import '../App.css';
import Footer from '../footer';
import Navbar from '../navbar';


function Feedback() {
    return (
        <>
            <Navbar />

            <div className='feedback '>

                <div className='row d-flex justify-content-center '>

                    <div className='col-md-6 col-sm-8 '>

                        <div className='feedback_box bg-light text-dark rounded p-2 mt-5 border border-2 border-dark' >

                            <h1 className=' bg-success py-3 mt-5 rounded-pill fw-bold text-center text-light'>Feedback</h1>

                            <form className='m-3 '>

                                <div className=' mb-3'>
                                    <label>Your name <span className='fw-bold text-danger'>*</span></label>
                                    <input className='form-control border-primary   p-2 mt-3' title='Enter your Name' required />
                                </div>

                                <div className=' mb-3'>
                                    <label>Your Email <span className='fw-bold text-danger'>*</span></label>
                                    <input className='form-control border-primary  p-2 mt-3' title='Enter Your mail Id' required />
                                </div>


                                <div className=' mb-3 form-floating text-dark'>
                                    <textarea className='form-control border-primary  px-5  mt-4 resize-none' style={{ 'height': '140px' }}></textarea>
                                    <label>Your Message :-</label>
                                </div>

                                <div className='text-center  my-4'>
                                    <button type='reset' className='btn py-2 px-3 me-3 fw-bold  btn-secondary rounded '>Reset</button>
                                    <button type='submit' className='btn py-2 px-3 fw-bold  btn-primary rounded '>Submit</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Feedback