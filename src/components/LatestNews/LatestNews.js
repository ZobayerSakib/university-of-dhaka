import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LatestNews.css'


const LatestNews = () => {

    const [latestNews, setLatestNews] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/news`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLatestNews(data))
    }, [])

    const message = () => {
        alert('Working for this output')
    }

    return (

        <div className='newsSection container'>
            <div className='newsTitle'>
                <h1>Latest News</h1>
            </div>

            <div className='cardDiv'>
                {
                    latestNews.map(news => <div
                        key={news._id}
                    >
                        <div >

                            <CardGroup>
                                <Card className='cardDesignNews'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    <Card.Img variant="top" src={news.img} />
                                    <Card.Body>
                                        <h1>{news.title}</h1>
                                        <p><b>Published:</b>{news.date}</p>
                                        <Link to='#'><button onClick={message} className='cardButton'> <i className="fas fa-plus icon"> </i> Read More...</button></Link>
                                    </Card.Body>

                                </Card>
                            </CardGroup>

                        </div>

                    </div>)
                }
            </div>


        </div>
    );
};

export default LatestNews;