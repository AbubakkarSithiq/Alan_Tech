import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Upcoming() {
    const [comes, setComes] = useState(null);
    const [searchBar, setSearchBar] = useState('');
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/AbubakkarSithiq/Alan_Tech/upcoming-movies`)
            .then(res => {
                // console.log(res.data);
                setComes(res.data)
            })
    }, [])
    const handleChange = (e) => {
        setSearchBar(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Navbar handleChange={handleChange} searchBar={searchBar} handleSubmit={handleSubmit} />

            <div className='movie1' >
                {comes &&
                    comes.filter(value => {
                        if (searchBar === '') {
                            return value
                        } else if (value.title.toLowerCase().includes(searchBar.toLowerCase())) {
                            return value
                        }
                    }).map((come) => {
                        return (
                            <Link to={`/upcomingMovieInfo/${come.id}`} className='open'>
                                <div key={come.id} className='upcome_movieCompo  rounded bg-light'>

                                    <img src={come.thumbnail} className='upcome_movieCompo_img' alt={come.title} />

                                    <div className='upcome_movieCompo_info  '>

                                        {/* <h3 className='px-3 text-light'> {title}</h3> */}

                                        <h3 className=' text-danger text-center'>{come.status}</h3>

                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <Footer />
        </>
    )
}

export default Upcoming
