import React, { Component } from 'react';
import WeatherLogo from './Weather_logo.jpg';
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img src={WeatherLogo} alt="" style={{height:'50px', width: '50px', borderRadius:'50%', marginRight:'10px'}}/>
                        <a className="navbar-brand" href="/">Nezuware Weather-App </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/'>Contact us</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                        <button type="button" className="btn btn-outline-secondary mx-2 ">Sign-up</button>
                        <button type="button" className="btn btn-outline-secondary mx-2 ">Login</button>
                        </div>
                    </div>
                </nav>
                <hr className='my-1'/>
            </>
        )
    }
}

export default Navbar
