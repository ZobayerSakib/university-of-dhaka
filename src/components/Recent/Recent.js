import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Recent.css';
import recent1 from '../../images/rescent1.jpg'
import recent2 from '../../images/recent2.jpg'

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
                                <img height='700' width='500' src="https://i.pinimg.com/originals/34/2e/66/342e664f6cee4b6010cdf0fc05674da9.jpg" alt="" />
                                <div>
                                    <div>
                                        <h1>05</h1>
                                        <h3>DEC,2021</h3>
                                    </div>
                                    <div>
                                        <h3>  প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <Card.Img variant="top" height='auto' src={recent2} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
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