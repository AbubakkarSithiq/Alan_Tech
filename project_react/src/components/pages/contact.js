import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

function Contact() {
    return (
        <>

            <Navbar />

            <div className='container min-vh-100 mt-5'>
                <h1 className='mb-3'> How can we help you?</h1>
                <h5 className='text-muted mb-4'>
                    Please send us an email or call and we'll get back to you as soon as we can!
                </h5>


                <div className='card my-3 p-3'>
                    <div className='card-body text-dark'>
                        <p className='h4'> For more info, suggestions or complaints</p>
                        <p className='h5 fw-bold'><i class="bi bi-envelope-fill"></i> support@moviesite.com</p>
                        <p className='h5 fw-bold'><i class="bi bi-telephone-fill"></i> +7873244532</p>
                    </div>
                </div>
                <div className='card mt-3 p-3'>
                    <div className='card-body text-dark'>
                        <p className='h4'> For technical support</p>
                        <p className='h5 fw-bold'><i class="bi bi-envelope-fill"></i> supporttech@moviesite.com</p>

                    </div>
                </div>


            </div>

            <Footer />

        </>
    )
}

export default Contact
