import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const commonLinks = (
        <React.Fragment>
            <li className="nav-item">
                <Link className="nav-link text-white" to='/'>About us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to='/CreateEvent'>Create Event</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to='/JoinEvent'>Join Event</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to='/'>Arabic language</Link>
            </li>

        </React.Fragment>
    );
    const authLinks = (
        <ul className="navbar-nav mt-2 d-flex justify-content-end col-lg-10 pl-3">
            {commonLinks}
            <li className="nav-item">
                <Link to='/dashboard'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={logout} to='#!' className='text-white nav-link'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex justify-content-end pl-3">
            {commonLinks}
            <li className="nav-item">
                <Link className="nav-link text-white" to='/register'>Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to='/login'>Sign In</Link>
            </li>
        </ul>
    );

    return (
        <React.Fragment>
            <nav className="border-bottom navbar navbar-expand-md navbar-dark" style={{ backgroundColor: 'black' }}>
                <Link className="m-0 navbar-brand" to="/">
                    <svg width="94" height="73" viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.1964 32.2865C60.1964 40.9601 58.6441 48.7887 56.1549 54.43C54.91 57.2514 53.4406 59.5035 51.8342 61.0433C50.2303 62.5808 48.5139 63.3876 46.7526 63.3876C44.9913 63.3876 43.275 62.5808 41.6711 61.0433C40.0647 59.5035 38.5952 57.2514 37.3503 54.43C34.8611 48.7887 33.3088 40.9601 33.3088 32.2865C33.3088 23.6129 34.8611 15.7844 37.3503 10.143C38.5952 7.32162 40.0647 5.06956 41.6711 3.52972C43.275 1.99227 44.9913 1.18539 46.7526 1.18539C48.5139 1.18539 50.2303 1.99227 51.8342 3.52972C53.4406 5.06956 54.91 7.32162 56.1549 10.143C58.6441 15.7844 60.1964 23.6129 60.1964 32.2865Z" stroke="white" />
                        <path d="M71.4685 49.6738C65.5005 55.8054 59.017 60.2117 53.3766 62.3915C47.6898 64.5891 43.0581 64.4592 40.5568 61.8893C38.0554 59.3194 37.929 54.5608 40.068 48.7183C42.1897 42.9232 46.4785 36.2622 52.4465 30.1306C58.4145 23.9991 64.8979 19.5928 70.5384 17.413C76.2251 15.2154 80.8568 15.3453 83.3582 17.9152C85.8595 20.4851 85.986 25.2437 83.8469 31.0862C81.7253 36.8812 77.4365 43.5423 71.4685 49.6738Z" stroke="#BDFF22" />
                        <path d="M41.1201 30.1306C35.1521 23.9991 28.6686 19.5928 23.0282 17.413C17.3415 15.2154 12.7097 15.3453 10.2084 17.9152C7.70704 20.485 7.5806 25.2437 9.71964 31.0862C11.8413 36.8812 16.1301 43.5423 22.0981 49.6738C28.0661 55.8054 34.5495 60.2117 40.19 62.3914C45.8767 64.5891 50.5084 64.4592 53.0098 61.8893C55.5111 59.3194 55.6376 54.5608 53.4985 48.7183C51.3769 42.9232 47.0881 36.2621 41.1201 30.1306Z" stroke="#BDFF22" />
                        <path d="M54.5449 57.5674C55.7752 50.4045 49.7602 40.8539 46.7528 37.3427C41.1752 44.4214 38.1404 52.5113 38.9606 57.5674C38.9606 63.045 43.3352 63.045 44.7022 63.4663C50.4438 64.7304 54.955 61.7809 54.5449 57.5674Z" fill="#BDFF22" />
                    </svg>Munathim
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    {!loading && isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        </React.Fragment>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
