import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentLogin.css'
import googleIcon from '../../images/duLogin/google.png'
import img1 from '../../images/duLogin/100yearsDu.png'
import img2 from '../../images/duLogin/du.png'
import img3 from '../../images/duLogin/mojib.png'
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const StudentLogin = () => {
    const { signInWithGoogle, signInWithEmail, isLoading, error } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const emailValue = event => {
        setEmail(event.target.value)
    }

    const passwordValue = event => {
        setPassword(event.target.value)
    }
    const submitStudentForm = e => {
        e.preventDefault();
        signInWithEmail(email, password);
        e.target.value = '';


    }
    function refreshPage() {
        window.location.reload();
    }

    if (isLoading) {
        return <div className='loadingStyle'>
            <Spinner className='spinner' animation="border" variant="dark" />
        </div>
    }

    return (
        <div>
            <div className='studentLoginDiv'>

                <div className='studentFormDiv'>
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
                    <div className='studentFormExtra' >
                        <div className='upRefresh'>
                            <div>
                                <h5>Student Login</h5>
                            </div>
                            <div className='refreshButton'>
                                <button type="button" onClick={refreshPage}> <span><i className="fas fa-sync-alt "></i>Refresh</span> </button>
                            </div>

                        </div>
                        <hr />
                        <div className='studentFormInput'>

                            <form onSubmit={submitStudentForm} >
                                <input className='mb-2' type="email" onBlur={emailValue} name="" id="" placeholder='email' required />
                                <br />
                                <input className='mb-2' type="password" onBlur={passwordValue} name="" id="" placeholder='password' required />
                                <div className='loginController'>
                                    <div>
                                        <input className='mb-2' type="submit" value="LOGIN" />



                                    </div>
                                    <div>
                                        <Link className='passwordForget' to=''><p >Forget Your Password?</p></Link>
                                    </div>
                                </div>
                            </form>
                            <div className='link'>
                                <p>Are you a ner user ? <Link to='/studentRegister'>Register Please</Link></p>
                            </div>
                            <p>{error}</p>
                            <h3 className='mb-2'> Sign in with institutional email</h3>
                            <button className='mb-2 googleButton' onClick={signInWithGoogle}> <img height='25' width='25' src={googleIcon} alt="" /> Sign In</button>

                        </div>
                    </div>
                    <div className='guide'>
                        <Link to='/empty'><button className='mt-3 studentGuide'>STUDENT'S LOGIN RELATED GUIDELINE </button></Link>
                    </div>
                </div>
                <div className='info '>
                    <h3>If you face any difficulty to Login, please contact the <span className='adminEmail'>'Email Admin'</span> of your Department/Institute</h3>
                </div>
                <br />

                <hr />
                <div className='developer'>
                    <p><i> &copy; 2021 University of Dhaka. All Rights Reserved. Developed and Maintained by: Md. Zobayer Hossain Sakib</i></p>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;