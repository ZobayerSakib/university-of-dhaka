import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import HomeCounter from '../HomeCounter/HomeCounter';
import HomeWelcome from '../HomeWelcome/HomeWelcome';
import LatestNews from '../LatestNews/LatestNews';
import NavBanner from '../NavBanner/NavBanner';
import Recent from '../Recent/Recent';
import ViceChancellor from '../ViceChancellor/ViceChancellor';
import './Home.css'


const Home = () => {
    const { isLoading } = useAuth()
    if (isLoading) {
        return <div className='loadingStyle'>
            <Spinner className='spinner' animation="border" variant="dark" />
        </div>
    }

    return (
        <div>
            <NavBanner></NavBanner>
            <ViceChancellor></ViceChancellor>
            <HomeCounter></HomeCounter>
            <HomeWelcome></HomeWelcome>
            <LatestNews></LatestNews>
            <Recent></Recent>
            <Footer></Footer>
        </div>
    );
};

export default Home;