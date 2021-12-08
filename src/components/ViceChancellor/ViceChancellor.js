import React from 'react';
import './ViceChancellor.css'
import vcSir from '../../images/vcSir.jpg'
const ViceChancellor = () => {
    return (
        <div>
            <div className='viceChancellor'>
                <div className='vcProfile'>
                    <img src={vcSir} alt="" />
                    <p><small>Professor Dr. Md. Akhtaruzzaman</small></p>
                    <p>Vice Chancellor</p>
                </div>
                <div className='vcInfo'>
                    <h5>Message from Vice Chancellor</h5>
                    <p>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!

                        Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default ViceChancellor;