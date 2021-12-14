import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Recent.css';
import recent1 from '../../images/rescent1.jpg'

const Recent = () => {
    return (
        <div className='recentSection'>
            <div className='primaryRecentDiv'>
                <div>
                    <h1>Recent and Upcoming Events</h1>
                    <div>
                        <CardGroup>
                            <Card>
                                {/* <Card.Img variant="top" height='auto' src={recent1} /> */}
                                <img src={recent1} alt="" />
                                <div className='cardInfo' >
                                    <div className='date'>
                                        <h1>05</h1>
                                        <h3>DEC,2021</h3>
                                    </div>
                                    <div>
                                        <h3>  প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <img src={recent1} alt="" />
                                <div className='cardInfo'>
                                    <div className='date'>
                                        <h1>05</h1>
                                        <h3>DEC,2021</h3>
                                    </div>
                                    <div>
                                        <h3>  প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                    </div>
                                </div>


                            </Card>

                        </CardGroup>
                    </div>
                </div>
                <div>
                    <h1>Notices</h1>
                </div>
            </div>
        </div>
    );
};

export default Recent;