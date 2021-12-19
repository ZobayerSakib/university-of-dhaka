import React, { useRef } from 'react';
import Footer from '../Footer/Footer';
import './LatestNewsPost.css';


const LatestNewsPost = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const dateRef = useRef();



    const latestNewsPostHandler = e => {

        const img = imgRef.current.value;
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const latestDate = { img, title, date }

        fetch(`http://localhost:5000/news`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(latestDate)


        })

        imgRef.current.value = '';
        titleRef.current.value = '';
        dateRef.current.value = '';

        e.preventDefault()
    }
    return (
        <div>


            <div className='latestNewsPostTitle'>
                <h1>Post Latest News</h1>
            </div>
            <div className='latestNewsPostFormController'>
                <form onSubmit={latestNewsPostHandler} className='latestNewsPostForm'>

                    <input type="img" ref={imgRef} placeholder='Paste Img Url' required />
                    <br />
                    <input type="text" ref={titleRef} placeholder='News title' required />
                    <br />
                    <input type="text" ref={dateRef} placeholder='DATE dd/mm/yy' required />
                    <input type="submit" className='latestNewsPostFormSubmitInput' value="News Publish" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LatestNewsPost;