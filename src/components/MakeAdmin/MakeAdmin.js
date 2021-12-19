import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleAdminForm = e => {
        const user = { email }
        fetch('https://obscure-everglades-73255.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);

                }
            }
            )

        e.preventDefault();
    }
    return (
        <div>
            <div className='adminDiv'>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminForm} className='adminForm'>
                    <input type="email" onBlur={handleEmail} placeholder='email' required />
                    <br /><br />
                    <input type="submit" value="Make Admin" />
                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;