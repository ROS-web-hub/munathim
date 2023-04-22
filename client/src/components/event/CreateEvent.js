import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicSelect from '../layout/BasicSelect';
import ImageUpload from '../layout/ImageUpload';
import DateTime from '../layout/DateTime';

const CreateEvent = () => {
    return (
        <div style={{backgroundColor: '#508bfc'}}>
            <div className='d-flex justify-content-center py-5'><h1 className='text-white'>Create Event</h1></div>
            <div className="h-100 pb-5">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-9 py-0 px-5">
                        <h1 className="text-white mb-4">Apply for a job</h1>
                        <div className="card" style={{ borderRadius: 15 }}>
                            <div className="card-body px-3">
                                <div className="row align-items-center pt-4 pb-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Name</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">

                                        <input type="text" className="form-control form-control-lg" placeholder='Jerry Alex' />

                                    </div>
                                </div>

                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">

                                        <h6 className="mb-0">Type</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <BasicSelect />
                                    </div>
                                </div>

                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">

                                        <h6 className="mb-0">Date</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <DateTime />
                                    </div>
                                </div>
                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Location</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <input type="text" className="form-control form-control-lg" placeholder="Riyadh" />
                                    </div>
                                </div>
                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Email address</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">

                                        <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />

                                    </div>
                                </div>

                                <hr className="mx-n3" />

                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">

                                        <h6 className="mb-0">Description</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <textarea className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
                                    </div>
                                </div>

                                <hr className="mx-n3" />

                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">

                                        <h6 className="mb-0">Upload image</h6>

                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <ImageUpload />
                                    </div>
                                </div>
                                <hr className="mx-n3" />

                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Additional information notes</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <textarea className="form-control" rows="3" placeholder="I love this event"></textarea>
                                    </div>
                                </div>

                                <hr className="mx-n3" />
                                <div className="px-5 py-4">
                                    <button type="submit" className="btn btn-outline-primary">Create Event</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )


};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default CreateEvent;