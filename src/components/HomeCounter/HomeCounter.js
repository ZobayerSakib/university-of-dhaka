import React from 'react';
import './HomeCounter.css';
import CountUp from 'react-countup';

const HomeCounter = () => {
    return (
        <div>
            <div className='counterTitle'>
                <h1>University of Dhaka in Numbers</h1>
                <span><hr /></span>
            </div>
            <div className='counter'>
                <div className='counterDiv'

                >
                    <div>
                        <div className='iconBackground' data-aos="zoom-in-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"

                        >
                            <p><i class="fa-3x fas fa-university iconColor "></i></p>
                        </div>
                        <div className='numberDiv'>

                            <CountUp
                                start={0}
                                end={1921}
                                duration={3.75}

                                decimals={0}
                                decimal=","

                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <button className='counterButton' onClick={start}>Result</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>

                        <h4>Founded</h4>
                    </div>
                    <div>

                        <div className='iconBackground' data-aos="zoom-in-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <p><i class="fa-3x fas fa-user-shield iconColor"></i></p>
                        </div>


                        <div className='numberDiv'>
                            <CountUp
                                start={0}
                                end={2000}
                                duration={3.75}

                                decimals={0}
                                decimal=","

                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <button className='counterButton' onClick={start}>Result</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>



                        <h4>Faculty Members</h4>
                    </div>
                    <div>
                        <div className='iconBackground' data-aos="zoom-in-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <p><i class="fa-3x fas fa-users iconColor"></i></p>
                        </div>

                        <div className='numberDiv'>
                            <CountUp
                                className='countNumber'
                                start={0}
                                end={37000}
                                duration={3.75}

                                decimals={'+'}
                                decimal=","

                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <button className='counterButton' onClick={start}>Result</button>
                                    </div>
                                )}
                            </CountUp>


                        </div>
                        <h4>Regular Students</h4>
                    </div>
                    <div>
                        <div className='iconBackground' data-aos="zoom-in-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <p><i class="fa-3x fas fa-school iconColor"></i></p>
                        </div>
                        <div className='numberDiv'>

                            <CountUp
                                start={0}
                                end={134}
                                duration={3.75}

                                decimals={0}
                                decimal=","

                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <button className='counterButton' onClick={start}>Result</button>
                                    </div>
                                )}
                            </CountUp>
                        </div>

                        <h4>Constituent & Affiliated Colleges</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCounter;