import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth()


    return (
        <div className='headerDesign'>
            {
                user.email && <span className='user'> {user.displayName} </span>
            }
            <Link to='/duLogin'><button><i class="fas fa-key"></i> DU LOGIN</button></Link>





            <Link to='/'><button><i class="fas fa-search-plus"></i> FIND PROGRAM</button></Link>
            {
                user.email ? <button onClick={logOut} >SIGN OUT</button> : <Link to='/studentLogin'><button><i class="fas fa-key"></i> STUDENT LOGIN</button></Link>
            }

        </div>
    );
};

export default Header;