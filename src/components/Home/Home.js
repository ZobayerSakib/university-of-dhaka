import React from 'react';
import HomeCounter from '../HomeCounter/HomeCounter';
import HomeWelcome from '../HomeWelcome/HomeWelcome';
import NavBanner from '../NavBanner/NavBanner';
import Recent from '../Recent/Recent';
import ViceChancellor from '../ViceChancellor/ViceChancellor';

const Home = () => {
    return (
        <div>
            <NavBanner></NavBanner>
            <ViceChancellor></ViceChancellor>
            <HomeCounter></HomeCounter>
            <HomeWelcome></HomeWelcome>
            <Recent></Recent>
        </div>
    );
};

export default Home;