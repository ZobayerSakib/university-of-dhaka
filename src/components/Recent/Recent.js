import { Card, CardGroup, Modal } from 'react-bootstrap';
import './Recent.css';
import recent1 from '../../images/rescent1.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Recent = () => {


    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <div className='recentSection'
            data-aos="zoom-in-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div className='primaryRecentDiv'>
                <div>
                    <div className='noticeTitle'>
                        <h1>Recent and Upcoming Events</h1>
                    </div>
                    <div>
                        <CardGroup className='cardPositing'>
                            <Card className='cardDesign'
                                data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"

                            >
                                <img src={recent1} alt="" />
                                <div className='cardInfo' >
                                    <div className='date'>
                                        <h1>05</h1>
                                        <h5>DEC,2021</h5>
                                    </div>
                                    <div >
                                        <h3 className='banglaInfo'>  প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                        <div className='plusButton'>

                                            {values.map((v, idx) => (

                                                <Link to=''><button className='recentButton' key={idx} onClick={() => handleShow(v)}> <i className="fas fa-plus icon"> </i>&nbsp; Read More</button></Link>
                                            ))}
                                            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title className='modalTitle'>
                                                        <h3>প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>
                                                        জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মশতবর্ষ উদযাপন উপলক্ষে প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগ আগামী ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’ পালনের সিদ্ধান্ত গ্রহণ করেছে। ক্রীড়া প্রতিযোগিতার মধ্যে রয়েছে ক্রিকেট, টেবিল টেনিস, দাবা, লুডু এবং ডার্ট। সাংস্কৃতিক প্রতিযোগিতার মধ্যে রয়েছে গান (দেশের গান, নজরুল গীতি, রবীন্দ্র সঙ্গীত ও আধুনিক গান), নৃত্য, কবিতা, উপস্থিত বক্তৃতা (বঙ্গবন্ধু, মুক্তিযুদ্ধ ও স্বাধীনতা) এবং আলোকচিত্র প্রদর্শনী। বঙ্গবন্ধু, ৭ মার্চ ১৯৭১, মুক্তিযুদ্ধ, স্বাধীনতা, ১৪ ডিসেম্বর ১৯৭১, ১৬ ডিসেম্বর ১৯৭১ ও বাংলাদেশের সুবর্ণজয়ন্তী সম্পর্কিত লেখা, কবিতা ও ছবি নিয়ে দেয়াল পত্রিকা প্রকাশ করা হবে। বঙ্গবন্ধুর জীবনী, বঙ্গবন্ধুর শিক্ষাভাবনা, বঙ্গবন্ধুর বিজ্ঞানভাবনা, ৭ মার্চের ভাষণ, মহান মুক্তিযুদ্ধ, স্বাধীনতা দিবস ও বিজয় দিবস সম্পর্কিত কবিতা, নিবন্ধ ও প্রবন্ধ নিয়ে স্মরণিকা প্রকাশ করা হবে।
                                                    </p>


                                                    <br />
                                                    <p>
                                                        ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’ পালন শেষে আগামী ১২ ডিসেম্বর ২০২১ রবিবার সকাল ১০.৩০ ঘটিকায় আলোচনা সভা, পুরস্কার বিতরণ ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়েছে। উক্ত অনুষ্ঠানে ঢাকা বিশ্ববিদ্যালয়ের মাননীয় উপ-উপাচার্য (শিক্ষা) অধ্যাপক ড. এ এস এম মাকসুদ কামাল প্রধান অতিথি হিসাবে উপস্থিত থাকতে সদয় সম্মতি জ্ঞাপন করেছেন। অনুষ্ঠানে বিশেষ অতিথি থাকবেন জীববিজ্ঞান অনুষদের ডিন (ভারপ্রাপ্ত) অধ্যাপক ড. মিহির লাল সাহা এবং সভাপতিত্ব করবেন প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগের চেয়ারম্যান অধ্যাপক ড. ইয়ারুল কবীর।
                                                    </p>

                                                    <br />
                                                    <br />
                                                    <br />
                                                    <p>অধ্যাপক ড. ইয়ারুল কবীর</p>
                                                    <p>
                                                        চেয়ারম্যান, প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগ, ঢাকা বিশ্ববিদ্যালয়।</p>

                                                </Modal.Body>
                                            </Modal>

                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className='cardDesign'
                                data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"

                            >
                                <img src={recent1} alt="" />
                                <div className='cardInfo'>
                                    <div className='date'>
                                        <h1>05</h1>
                                        <h5>DEC,2021</h5>
                                    </div>
                                    <div >
                                        <h3 className='banglaInfo'>  প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                        <div className='plusButton'>

                                            {values.map((v, idx) => (

                                                <Link to=''><button className='cardButton' key={idx} onClick={() => handleShow(v)}> <i className="fas fa-plus icon"> </i>&nbsp; Read More</button></Link>
                                            ))}
                                            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        <h3>প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগে ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’</h3>
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>
                                                        জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মশতবর্ষ উদযাপন উপলক্ষে প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগ আগামী ৫-১১ ডিসেম্বর ২০২১ ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’ পালনের সিদ্ধান্ত গ্রহণ করেছে। ক্রীড়া প্রতিযোগিতার মধ্যে রয়েছে ক্রিকেট, টেবিল টেনিস, দাবা, লুডু এবং ডার্ট। সাংস্কৃতিক প্রতিযোগিতার মধ্যে রয়েছে গান (দেশের গান, নজরুল গীতি, রবীন্দ্র সঙ্গীত ও আধুনিক গান), নৃত্য, কবিতা, উপস্থিত বক্তৃতা (বঙ্গবন্ধু, মুক্তিযুদ্ধ ও স্বাধীনতা) এবং আলোকচিত্র প্রদর্শনী। বঙ্গবন্ধু, ৭ মার্চ ১৯৭১, মুক্তিযুদ্ধ, স্বাধীনতা, ১৪ ডিসেম্বর ১৯৭১, ১৬ ডিসেম্বর ১৯৭১ ও বাংলাদেশের সুবর্ণজয়ন্তী সম্পর্কিত লেখা, কবিতা ও ছবি নিয়ে দেয়াল পত্রিকা প্রকাশ করা হবে। বঙ্গবন্ধুর জীবনী, বঙ্গবন্ধুর শিক্ষাভাবনা, বঙ্গবন্ধুর বিজ্ঞানভাবনা, ৭ মার্চের ভাষণ, মহান মুক্তিযুদ্ধ, স্বাধীনতা দিবস ও বিজয় দিবস সম্পর্কিত কবিতা, নিবন্ধ ও প্রবন্ধ নিয়ে স্মরণিকা প্রকাশ করা হবে।
                                                    </p>


                                                    <br />
                                                    <p>
                                                        ‘ক্রীড়া ও সাংস্কৃতিক সপ্তাহ’ পালন শেষে আগামী ১২ ডিসেম্বর ২০২১ রবিবার সকাল ১০.৩০ ঘটিকায় আলোচনা সভা, পুরস্কার বিতরণ ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়েছে। উক্ত অনুষ্ঠানে ঢাকা বিশ্ববিদ্যালয়ের মাননীয় উপ-উপাচার্য (শিক্ষা) অধ্যাপক ড. এ এস এম মাকসুদ কামাল প্রধান অতিথি হিসাবে উপস্থিত থাকতে সদয় সম্মতি জ্ঞাপন করেছেন। অনুষ্ঠানে বিশেষ অতিথি থাকবেন জীববিজ্ঞান অনুষদের ডিন (ভারপ্রাপ্ত) অধ্যাপক ড. মিহির লাল সাহা এবং সভাপতিত্ব করবেন প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগের চেয়ারম্যান অধ্যাপক ড. ইয়ারুল কবীর।
                                                    </p>

                                                    <br />
                                                    <br />
                                                    <br />
                                                    <p>অধ্যাপক ড. ইয়ারুল কবীর</p>
                                                    <p>
                                                        চেয়ারম্যান, প্রাণরসায়ন ও অণুপ্রাণ বিজ্ঞান বিভাগ, ঢাকা বিশ্ববিদ্যালয়।</p>

                                                </Modal.Body>
                                            </Modal>

                                        </div>
                                    </div>
                                </div>


                            </Card>

                        </CardGroup>
                    </div>
                </div>
                <div>
                    <div className='noticeTitle'>
                        <h1>Notices</h1>
                    </div>
                    <div className='noticeInfo'>
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button > <i className="fas fa-plus icon "> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button > <i className="fas fa-plus icon "> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                        <hr />
                        <div>
                            <h4>শহীদ বুদ্ধিজীবী দিবস ও মহান বিজয় দিবসের কর্মসূচি</h4>

                            <h6>Published: 13 Dec,2021</h6>

                            <Link to=''><button> <i className="fas fa-plus icon"> </i> Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recent;