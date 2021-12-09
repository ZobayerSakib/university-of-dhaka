import React from 'react';
import HomeCounter from '../HomeCounter/HomeCounter';
import NavBanner from '../NavBanner/NavBanner';
import ViceChancellor from '../ViceChancellor/ViceChancellor';

const Home = () => {
    return (
        <div>
            <NavBanner></NavBanner>
            <ViceChancellor></ViceChancellor>
            <HomeCounter></HomeCounter>
        </div>
    );
};

export default Home;