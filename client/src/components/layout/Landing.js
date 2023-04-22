import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import house from '../../img/house.png';
import chicago from "../../img/carousels/chicago.jpg";
import ny from "../../img/carousels/ny.jpg";
import la from "../../img/carousels/la.jpg";
import video from "../../img/video.mp4";
import '../../App.css';
import "animate.css/animate.min.css";
import Fade from "react-reveal/Fade";
import Flash from 'react-reveal/Flash';
import LightSpeed from 'react-reveal/LightSpeed';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <React.Fragment>
            <div className='landing text-white'>
                <div className="pl-5" >
                    <Flash>
                        <h1 className='text-center pt-5'>Empowering Connections, Innovating Experiences</h1>
                    </Flash>
                </div>
                <div className='flex-row-reverse row m-0 hero'>
                    <div className='col-xl-4 py-3 align-self-center' >
                        <img src={house} className='img-fluid' />
                    </div>
                    <div className='align-content-center col-xl-8 row m-0'>
                        <div className="col-sm-3"></div>
                        <div className="row pt-5 col-sm-9">
                            <Fade up>
                                <h5 className='text-left pl-3' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                </h5>
                            </Fade>
                        </div>

                    </div>
                </div>

                <div className="d-flex justify-content-center pt-5" style={{ width: '100%' }}>
                    <div className='col-sm-5 row  justify-content-center text-center px-0 pb-0 pt-1'>
                        <LightSpeed left>
                            <div className='col-sm-4 mt-1 py-2'>
                                <Link type="button" className='btn mx-2 text-white btn-block' to="/CreateEvent">
                                    Create Event
                                </Link>
                            </div>
                            <div className='col-sm-4 mt-1 py-2'>
                                <Link type="button" className='btn mx-2 text-white btn-block' to="/JoinEvent">
                                    Join Event
                                </Link>
                            </div>
                        </LightSpeed>
                        <LightSpeed right>
                            <div className='col-sm-4 mt-1 py-2'>
                                <Link type="button" className='btn mx-2 text-white btn-block' to="/">
                                    Create active users
                                </Link>
                            </div>
                        </LightSpeed>
                    </div>
                </div>
                <div className='video'>

                    <div className='row py-5 px-5 m-0 slider'>
                        <div className='align-self-md-end col-lg-6 d-flex'>
                            <Fade left>
                                <div className='align-self-center'>
                                    <div id="demo" className="carousel slide " data-ride="carousel">
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo" data-slide-to="1"></li>
                                            <li data-target="#demo" data-slide-to="2"></li>
                                        </ul>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={la} alt="Los Angeles" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={chicago} alt="Chicago" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={ny} alt="New York" width="1100" height="500" />
                                            </div>
                                        </div>

                                        <Link className="carousel-control-prev" to="#demo" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </Link>
                                        <Link className="carousel-control-next" to="#demo" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <Fade up>
                            <div className='col-lg-6 align-self-md-center h-100 d-flex'>

                                <p className='text-left p-5' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <Fade up>
                        <div className='p-5'>
                            <p className='p-5'>     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.</p>

                        </div>
                    </Fade>
                    <Fade up>
                        <div style={{ backgroundColor: '#dedede' }}>
                            <div className='container'>
                                <div className='d-flex justify-content-center py-5'>
                                    <video
                                        src={video}
                                        controls
                                        muted
                                        autoPlay={"autoplay"}
                                        preload="auto"
                                        loop
                                        width={380}
                                        height={200}
                                    > something</video>
                                </div>
                                <div className='align-self-center pb-5'>
                                    <h5 className='text-body' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minum.
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </div>
                {/* services start */}
                <Fade up>
                    <div className='services'>
                        <div className="container  flex mt-5 pb-5 align-items-center justify-content-center">
                            <div className="row align-items-center justify-content-center text-body">
                                <div className="col-md-3 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        biotech
                                    </span>
                                    <h3 className="bold primary-color launchaco-builder-hoverable">Technical Support</h3>
                                    <p className=" "> do basics for 10 sites in the time it would take me to hand code one</p>
                                </div>
                                <div className="col-md-3 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        volunteer_activism
                                    </span>
                                    <h3 className="bold primary-color launchaco-builder-hoverable">Volunteer</h3>
                                    <p className=" "> time time time, save an average of 2-3 hours on a website with Generator</p>
                                </div>
                                <div className="col-md-3 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                    <h3 className="bold primary-color  ">Personal Companion</h3>
                                    <p className="paragraph secondary-color  "> it makes life easier, takes care of a lot of spadework, saves time</p>
                                </div>
                            </div>
                        </div>
                        <div className="container  flex mt-5 pb-5 align-items-center justify-content-center">
                            <div className="row align-items-center justify-content-center text-body">
                                <div className="col-md-2 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        museum
                                    </span>
                                    <h3 className="bold primary-color launchaco-builder-hoverable">Exhibitor</h3>
                                    <p className=" "> do basics for 10 sites in the time it would take me to hand code one</p>
                                </div>
                                <div className="col-md-2 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        museum
                                    </span>
                                    <h3 className="bold primary-color launchaco-builder-hoverable">Valet</h3>
                                    <p className=" "> time time time, save an average of 2-3 hours on a website with Generator</p>
                                </div>
                                <div className="col-md-2 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        letter_switch
                                    </span>
                                    <h3 className="bold primary-color  ">Translation</h3>
                                    <p className="paragraph secondary-color  "> it makes life easier, takes care of a lot of spadework, saves time</p>
                                </div>
                                <div className="col-md-2 text-center flex flex-column center-horizontal text-white">
                                    <span className="material-symbols-outlined">
                                        groups_3
                                    </span>
                                    <h3 className="bold primary-color launchaco-builder-hoverable">Crowd Management</h3>
                                    <p className=" "> do basics for 10 sites in the time it would take me to hand code one</p>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button type='button' className='btn btn-outline-primary btn-sm'>more details</button>
                        </div>
                    </div>
                </Fade>
                <Fade up>
                    <div style={{ height: 800 }}>
                        <Fade up>
                            <div className='align-items-sm-center d-flex h-25 justify-content-md-around p-5 react-reveal text-center'>
                                <h1>Contact us</h1>
                            </div>
                        </Fade>

                        <Fade left>

                            <div className='d-flex h-75 justify-content-center' style={{ height: 200 }}>
                                <div className="col-md-4 p-0">
                                    <div className="form-group px-4">
                                        <label htmlFor="usr">Name:</label>
                                        <input type="text" className="form-control" id="usr" name="username" />
                                    </div>
                                    <div className="form-group px-4">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" className="form-control" id="phone" name="phone" />
                                    </div>
                                    <div className="form-group px-4">
                                        <label htmlFor="email">Email:</label>
                                        <input type="text" className="form-control" id="email" name="email" />
                                    </div>
                                    <Fade right>
                                        <div className="form-group px-4">
                                            <label htmlFor="address">Address:</label>
                                            <input type="text" className="form-control" id="address" name="address" />
                                        </div>
                                        <div className="form-group px-4">
                                            <label htmlFor="description">Password:</label>
                                            <input type="text" className="form-control" id="description" name="description" />
                                        </div>
                                    </Fade>
                                    <div className='px-4'>
                                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </Fade>
                    </div>
                </Fade>
                {/* services end */}
            </div >
        </React.Fragment >
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
