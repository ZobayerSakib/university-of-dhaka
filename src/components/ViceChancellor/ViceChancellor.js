import React from 'react';
import './ViceChancellor.css'
import vcSir from '../../images/vcSir.jpg'
import samadSir from '../../images/samadSir.jpg'
import kamalSir from '../../images/maksud-kamal.jpg'
import momtajSir from '../../images/Momtaj.jpg'
import { Link } from 'react-router-dom';






const ViceChancellor = () => {
    return (
        <div>
            <div className='viceChancellor container'>
                <div className='vcProfile'>
                    <img src={vcSir} alt="" />
                    <div className='vcProfileInfo'>
                        <p><small>Professor Dr. Md. Akhtaruzzaman</small></p>
                        <h5>Vice Chancellor</h5>
                    </div>
                </div>
                <div className='vcInfo'>
                    <h4>Message from Vice Chancellor</h4>
                    <p>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!

                        Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.</p>
                    <Link to='/'>Read more</Link>
                </div>


            </div>
            <div className='teachersSection container'>
                <div className='teacher'>
                    <img src={samadSir} alt="" />
                    <div className='teacherInfo'>
                        <h6>Professor Dr. Muhammad Samad</h6>
                        <h5>Pro Vice Chancellor (Administration)</h5>
                    </div>
                </div>
                <div className='teacher'>
                    <img src={kamalSir} alt="" />
                    <div className='teacherInfo'>
                        <h6>Professor Dr.A.S.M Maksud Kamal</h6>
                        <h5>Pro Vice Chancellor (Academic) </h5>

                    </div>
                </div>
                <div className='teacher'>
                    <img src={momtajSir} alt="" />
                    <div className='teacherInfo'>
                        <h6>Professor Mamtaj Uddin Ahmed</h6>
                        <h5>Treasurer</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViceChancellor;