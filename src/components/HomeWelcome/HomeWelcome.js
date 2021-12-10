import React from 'react';
import { Link } from 'react-router-dom';
import './HomeWelcome.css';


const HomeWelcome = () => {
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
                    <Link to='/'><button>READ MORE...<i class=" fas fa-check-circle"></i></button></Link>
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