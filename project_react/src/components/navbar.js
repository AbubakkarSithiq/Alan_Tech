import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './App.css'


function Navbar(props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary' id='top'>

            <div className='container '>

                <Link to={'/'} className='navbar-brand' > Movie Site</Link>

                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarnav' aria-controls='navbarnav' aria-expanded='false'>

                    <span className='navbar-toggler-icon'></span>

                </button>

                <div className='collapse navbar-collapse ' id='navbarnav'>

                    <ul className='navbar-nav ms-auto'>

                        <li className='nav-item me-2'>

                            <NavLink className={`${(isActive) => isActive ? 'active' : 'null'} nav-link`} to={'/home'}>Home</NavLink>

                        </li>


                        <li className='nav-item me-2'>

                            <NavLink className={`${(isActive) => isActive ? 'active' : 'null'} nav-link`} to={'/upcoming'}>Upcoming Movies</NavLink>

                        </li>

                        <li className="nav-item me-2 dropdown">

                            <a className="nav-link " rel='noreferrer' href="/e" data-bs-toggle="dropdown">Follow us</a>

                            <ul className="dropdown-menu ">

                                <li>
                                    <a className="dropdown-item" href='https://www.facebook.com' rel="noreferrer">
                                        <i className='me-2 bi bi-facebook fb'></i>Facebook
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href='https://www.instagram.com' rel="noreferrer">
                                        <i className='me-2 bi bi-instagram insta'></i>Instagram
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href='https://www.twitter.com' rel="noreferrer">
                                        <i className='me-2 bi bi-twitter tweet'></i>Twitter
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li className='nav-item me-2 dropdown'>

                            <a href='/e' rel='noreferrer' className='nav-link ' data-bs-toggle='dropdown'>Profile</a>

                            <ul className='dropdown-menu'>

                                <li>
                                    <a className='dropdown-item' href='/profile/login' rel='noreferrer'>Login </a>
                                </li>

                                <li>
                                    <a className='dropdown-item' href='/profile/signup' rel='noreferrer'>Sign up</a>
                                </li>

                            </ul>

                        </li>

                    </ul>

                    <div className='my-2 my-lg-0'>

                        <form onSubmit={props.handleSubmit}>

                            <input type='search' className='form-control' placeholder='Search movies' value={props.search} onChange={props.handleChange} />

                        </form>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
