import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import '../../App.css';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div className='background-signIn'>
            <div className='container' style={{width: '60%'}}>
                <h1 className='large text-primary pt-5'>Sign In</h1>
                <p className='lead text-white'>
                    <i className='fas fa-user'></i> Sign Into Your Account
                </p>
                <form className='form' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Password'
                            name='password'
                            minLength='6'
                            value={password}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-outline-primary bt'
                        value='Sign In'
                    />
                </form>
                <p className='my-1 text-white'>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
