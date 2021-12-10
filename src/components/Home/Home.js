import React from 'react';
import HomeCounter from '../HomeCounter/HomeCounter';
import HomeWelcome from '../HomeWelcome/HomeWelcome';
import NavBanner from '../NavBanner/NavBanner';
import ViceChancellor from '../ViceChancellor/ViceChancellor';

const Home = () => {
    return (
        <div>
            <NavBanner></NavBanner>
            <ViceChancellor></ViceChancellor>
            <HomeCounter></HomeCounter>
            <HomeWelcome></HomeWelcome>
        </div>
    );
};

export default Home;