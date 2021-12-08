import React from 'react';
import { Link } from 'react-router-dom';
import './DuLogin.css'
import googleIcon from '../../images/duLogin/google.png'
import img1 from '../../images/duLogin/100yearsDu.png'
import img2 from '../../images/duLogin/du.png'
import img3 from '../../images/duLogin/mojib.png'
const DuLogin = () => {
    return (
        <div className='duLoginDiv'>

            <div className='formDiv'>
                <div className='imgStyle'>
                    <div>
                        <img width='160' src={img1} alt="" />
                    </div>
                    <div>
                        <img width='160' src={img2} alt="" />
                    </div>
                    <div>
                        <img width='160' src={img3} alt="" />
                    </div>
                </div>
                <div className='formExtra' >
                    <p>If you face any difficulty to Login, Please contact with <b>webmaster@du.ac.bd</b></p>
                    <form >
                        <table>
                            <tr>
                                <td>Name</td>
                                <input type='name' placeholder='name'></input>
                            </tr>
                            <br />
                            <tr>
                                <td>Password</td>
                                <input type='password' placeholder='password'></input>
                            </tr>
                            <br />
                            <tr>
                                <td></td>
                                <input type='submit' value='LOGIN'></input>
                                <Link to='/forgetPassword'>Forgot your password?</Link>
                            </tr>
                        </table>

                    </form>
                    <p>or sign in with institutional email</p>
                    <button> <img height='25' width='25' src={googleIcon} alt="" /> Sign In</button>
                    <p>If you don't have an account, please</p><span><Link to='/signUp'>Sign Up</Link></span>
                </div>
                <Link to='/kormoChari'><button>কর্মকর্তা ও কর্মচারিদের প্রোফাইলে রেজিস্ট্রেশন </button></Link>
            </div>
        </div>
    );
};

export default DuLogin;