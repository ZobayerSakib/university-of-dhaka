import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='headerDesign'>
            <Link to='/duLogin'><button><i class="fas fa-key"></i> DU LOGIN</button></Link>
            <Link to='/studentLogin'><button><i class="fas fa-key"></i> STUDENT LOGIN</button></Link>
            <Link to='/findForm'><button><i class="fas fa-search-plus"></i> FIND PROGRAM</button></Link>
        </div>
    );
};

export default Header;