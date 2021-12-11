import React from 'react';
import { Link } from 'react-router-dom';
import './DuLogin.css'
import googleIcon from '../../images/duLogin/google.png'
import img1 from '../../images/duLogin/100yearsDu.png'
import img2 from '../../images/duLogin/du.png'
import img3 from '../../images/duLogin/mojib.png'
import useFirebase from '../../Hooks/useFirebase';
const DuLogin = () => {
    const { signInWithGoogle } = useFirebase();

    const submitTeacherForm = e => {

        e.preventDefault();
    }


    return (
        <div className='duLoginDiv'>

            <div className='formDiv'>
                <div className='imgStyle'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className='formExtra' >
                    <div className='formInput'>
                        <p>If you face any difficulty to Login, Please contact with <b>webmaster@du.ac.bd</b></p>
                        <form onSubmit={submitTeacherForm} >
                            <input className='mb-2' type="text" name="" id="" placeholder='username' required />
                            <br />
                            <input className='mb-2' type="password" name="" id="" placeholder='password' required />
                            <div className='loginController'>
                                <div>
                                    <input className='mb-2' type="submit" value="LOGIN" />
                                </div>
                                <div>
                                    <Link to='/'><p>Forget Your Password?</p></Link>
                                </div>
                            </div>
                        </form>

                        <p className='mb-2'>or sign in with institutional email</p>
                        <button className='mb-2 googleButton' onClick={signInWithGoogle}> <img height='25' width='25' src={googleIcon} alt="" /> Sign In</button>
                        <p>If you don't have an account, please</p><span><Link to='/signUp'>Sign Up</Link></span>
                    </div>
                </div>
                <Link to='/kormoChari'><button className='mt-3 kormochari'>কর্মকর্তা ও কর্মচারিদের প্রোফাইলে রেজিস্ট্রেশন </button></Link>
            </div>
        </div>
    );
};

export default DuLogin;