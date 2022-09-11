import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Intro() {
    return (
        <div className='container'>

            <div className='intro text-dark' loading='lazy'></div>

            <Link to={'/home'} className='btn intro-btn btn-danger'>

                <i className="bi bi-film"></i> Movie Page</Link>

        </div>
    )
}

export default Intro