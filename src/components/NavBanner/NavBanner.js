import React from 'react';
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBanner.css'

import navIcon from '../../images/navicon/navicon.png'
import du1 from '../../images/banner/du1.jpg'
import du2 from '../../images/banner/du2.jpg'
import du3 from '../../images/banner/du3.jpg'
const NavBanner = () => {
    return (
        <div className='navBannerSection'>
            <div>
                <Navbar className='navBarDesign' expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div>
                                <div className='navImg'>
                                    <img src={navIcon} alt="" />
                                </div>
                            </div>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <NavDropdown title="ABOUT" id="basic-nav-dropdown">

                                    <div className='aboutNav'>
                                        <h5>ABOUT UNIVERSITY</h5>
                                        <Link to='/historicalOutline'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Historical Outline</Link>
                                        <br />
                                        <Link to='/glance'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>University at a Glance</Link>
                                        <br />
                                        <Link to='/homoris'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Homoris Causa</Link>
                                        <br />
                                        <Link to='/messageViceChancellor'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Message from the Vice Chancellor</Link>
                                        <br />
                                        <Link to='/chancellorsList'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>List of Vice Chancellors</Link>

                                    </div>


                                </NavDropdown>


                                <NavDropdown title="ACADEMICS" id="basic-nav-dropdown">
                                    <div className='aboutNav'>
                                        <h5>ACADEMIC BODIES</h5>
                                        <Link to='/'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Faculties</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>Departments</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Institutes</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Constituent Colleges</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>Affiliated Colleges</Link>

                                    </div>


                                </NavDropdown>

                                <NavDropdown title="ADMINISTRATION" id="basic-nav-dropdown">
                                    <div className='aboutNav'>
                                        <h5>HEAD OF ADMINISTRATIVE OFFICES</h5>
                                        <Link to='/'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Directors of Research & Bureau </Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>Provosts & Wardens of Halls and Hostels</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>Head of Offices</Link>
                                        <br />


                                    </div>


                                </NavDropdown>

                                <NavDropdown title="STUDENTS" id="basic-nav-dropdown">
                                    <div className='aboutNav'>
                                        <h5>STUDENT FACILITIES</h5>
                                        <Link to='/historicalOutline'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Scholarship & Financial Aids</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>Halls of Residence</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Transport Facilities</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> Health Insurance</Link>
                                        <br />


                                    </div>


                                </NavDropdown>

                                <NavDropdown title="RESEARCH" id="basic-nav-dropdown">
                                    <div className='aboutNav'>

                                        <Link to='/'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> RESEARCH CENTERS & BUREAUS</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> RESEARCH & PUBLICATIONS</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> RESEARCH COLLABORATIONS</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> FOUNDED PROJECTS</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>UNIVERSITY JOURNALS</Link>

                                    </div>


                                </NavDropdown>
                                <NavDropdown title="LINKS" id="basic-nav-dropdown">
                                    <div className='aboutNav'>

                                        <Link to='/'><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> STUDENT LOGIN</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>TELEPHONE & EMAIL INDEX</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> DU FORMS</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> E-TENDER</Link>
                                        <br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>DU JOBS</Link><br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>TRUST FOUND</Link><br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>NOTICE</Link><br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>LATEST NEWS</Link><br />
                                        <Link to='/'> <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>EVENTS</Link>

                                    </div>


                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


            <div className='carousel'>

                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={du1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={du2}
                            alt="Second slide"

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={du3}
                            alt="Third slide"

                        />

                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default NavBanner;