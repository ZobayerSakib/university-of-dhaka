import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './DashBoard.css';


const Dashboard = () => {
    return (
        <div>
            <div className='dashboardSection'>
                <Link to='/latestNewsPost' ><button>Go to Post</button></Link>
                <br />
                <Link to='/makeAdmin' ><button>Make An Admin</button></Link>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;