import React from 'react';
import './NotFound.css';
import errorImg from '../../images/error.png'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <div className='notFound container'>
                <div className='errorImg'>
                    <img src={errorImg} alt="" />
                </div>
                <div className='errorMessage'>
                    <h2>Sorry Page Was Not Found!</h2>
                    <p>The page you are looking for is currently unavailable.</p>
                    <Link to='/'><button>Back to Home</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;