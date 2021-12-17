import React from 'react';
import { Link } from 'react-router-dom';
import duLogo from '../../images/footer/footerDuLogo.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerHeader'>

            </div>
            <div className='footerDiv'>
                <div>
                    <p className='specialPara'>Useful Links</p>
                    <p><Link to='/empty'>Approved NOCs</Link></p>
                    <p><Link to='/empty'>Jobs</Link></p>
                    <p><Link to='/empty'>E-tender</Link></p>
                    <p><Link to='/empty'>DU-tender</Link></p>
                </div>

                <div>
                    <p><Link to='/empty'>DU Forms</Link></p>
                    <p><Link to='/empty'>DU Institutional Repository</Link></p>
                    <p><Link to='/empty'>DU Barta</Link></p>
                    <p><Link to='/empty'>DU Library</Link></p>

                </div>

                <div>
                    <p><Link to='/empty'> Result Archive</Link></p>
                    <p><Link to='/empty'>  DU Alumni</Link></p>
                </div>

                <div>

                </div>

                <div>
                    <img src={duLogo} alt="" />
                    <p><i class="fas fa-map-marker-alt"></i> Administrative Building (Ground Floor)
                        Dhaka-1000, Bangladesh</p>
                    <p><b>Phone:</b> +88-09666910000</p>
                    <p><b>Fax:</b> 880-2-9669898</p>
                    <p><b>Email:</b> vcoffice@du2021.ac.bd, regstraar@du.ac.bd
                    </p>

                </div>
            </div>
            <div className='footerFooter'>
                <div className='footerCopy'>
                    <div>
                        <p> &copy; 2021 University of Dhaka. All Rights Reserved. Design, Development and Maintenance by <span className='footerName'>Md. Zobayer Hossain Sakib</span> </p>
                    </div>
                    <div className='copyLink'>
                        <span><Link to='/duLogin'>DU Login</Link></span>
                        <span><Link to='/StudentLogin'>Student Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;