import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import Loading from './loading';
import MovieCompo from '../movieCompo';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer'



function Home() {
    const [movies, setMovies] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/AbubakkarSithiq/Alan_Tech/movies')
            .then(res => {
                setMovies(res.data);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <Navbar handleChange={handleChange} searchTerm={searchTerm} handleSubmit={handleSubmit} />

            <div className=' movie mt-3'>

                {
                    movies ?
                        (
                            // movies &&

                            movies.filter((val) => {

                                if (searchTerm === '') {
                                    return val;
                                }
                                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }

                            }).map(movie => {
                                return (movies &&
                                    <div key={movie.id}>
                                        <Link to={`/movieInfoCompo/${movie.id}`} className='open'>
                                            <MovieCompo {...movie} />
                                        </Link>
                                    </div>

                                )
                            })

                        )

                        : (<Loading />)

                }
            </div>
            <Footer />
        </>
    )
}

export default Home
