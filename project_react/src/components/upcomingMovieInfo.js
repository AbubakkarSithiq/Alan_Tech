import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

function UpcomingMovieInfo() {
    const [upcomeInfo, setUpcomeInfo] = useState({});
    const param = useParams();

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/AbubakkarSithiq/Alan_Tech/upcoming-movies/${param.id}`)
            .then(res => {
                // console.log(res.data);
                setUpcomeInfo(res.data);
            })
    }, [param.id])
    return (
        <>
            <div key={upcomeInfo.id}>

                <Navbar />

                <div className='row d-flex  justify-content-evenly mb-5 min-vh-100' >

                    <div className='col-md-4  '>

                        <div className=' mt-4 px-3 movieInfo_img'>

                            <img src={upcomeInfo.poster_path} className='img-fluid  rounded' alt={upcomeInfo.title} />

                            <div className='status h4 py-2  text-center rounded-bottom bg-light text-dark'>{upcomeInfo.status}</div>

                        </div>

                    </div>

                    <div className='col-md-7 '>

                        <div className='my-4 mx-3 '>

                            <div className='display-5 fw-bold my-4 text-warning  '>{upcomeInfo.title}</div>

                            <div className='h3  mb-3 text-muted'>Director : <span className='  text-light'>{upcomeInfo.director}</span></div>

                            <div className='h3  mb-3 text-muted'>Music : <span className='  text-light'>{upcomeInfo.music_dir}</span></div>

                            <div className='h3  mb-3 text-muted'>Cast : <span className='  text-light'>{upcomeInfo.cast}</span></div>

                            <div className='h3  mb-3 text-muted'>Genre : <span className=' text-light'>{upcomeInfo.gener}</span></div>

                            <div className='h3  mb-3 text-muted'>Language : <span className=' text-light'>{upcomeInfo.language}</span></div>

                            <div className='h3  mb-3 text-muted'>Release Date : <span className=' text-light'>{upcomeInfo.release_date}</span></div>

                        </div>

                        {/* <button className='btn-lg fw-bold btn-light mx-3'>Book Tickets</button> */}

                    </div>

                </div>

                <Footer />

            </div>
        </>
    )
}

export default UpcomingMovieInfo
