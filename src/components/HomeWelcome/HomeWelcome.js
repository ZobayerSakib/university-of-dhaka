import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeWelcome.css';


const HomeWelcome = () => {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }



    return (
        <div className='homeWelcomeSection'>
            <div className='homeWelcome container'>
                <div className='welcomeInfo' data-aos="zoom-out-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <h2>Welcome to University of Dhaka</h2>
                    <p>On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.

                    </p>
                    {values.map((v, idx) => (

                        <Link to=''><button key={idx} onClick={() => handleShow(v)}>READ MORE...<i class=" fas fa-check-circle"></i></button></Link>
                    ))}
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <div className='danger'>
                                <h3 >Welcome to University of Dhaka</h3>
                            </div>

                        </Modal.Header>
                        <Modal.Body>
                            <p>On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.</p>
                            <aside>
                                <p>The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.</p>
                            </aside>
                            <br />
                            <p>
                                The high standard of education and research for the University was set by its first Vice-Chancellor, Sir P.J. Hartog. In the 2nd Convocation address, he said: 'A man may be an excellent teacher of elementary subjects without the power to add to knowledge. But in advanced work I maintain that no one can really teach well unless he has the combination of imagination with critical power which leads to the original production (of knowledge), and for that if for no other reason, a university to be a true university must see that its teachers are men who are also capable of advancing knowledge.'
                            </p>
                        </Modal.Body>

                    </Modal>
                </div>







                <div className='welcomeVideo' data-aos="zoom-out-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <iframe src="https://www.youtube.com/embed/G6hLWkWTLiw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default HomeWelcome;