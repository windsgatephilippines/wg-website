'use client'
import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactWOW from 'react-wow';

const FeatureTeam = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <ReactWOW animation='fadeInUp'>
                    <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                        <h1 className="display-5 mb-4">Join Our Team!</h1>
                        <p className="mb-4">Job Description</p>
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Must possess at least a Bachelor’s Degree in Computer Science, Information Technology, Computer Engineering or equivalent.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>At least 1 year of working experience in the related field.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Proficient in JAVASCRIPT SPRING MVC 5.0</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Familiar in .Net Technology/ Java/ Python/ Ruby.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Extensive object oriented programming experience.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Has strong problem solving skills and can deliver work independently in Timely manner with minimal supervision.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                         <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                                    </div>
                                    <div className="ms-4">
                                        <h4>Fresh graduates are encourage to apply.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>
                    <ReactWOW animation='fadeInUp'>
                    <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <div className="position-relative me-lg-4">
                            <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
                            <span
                                className="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block"
                                style={{width: '120px', height: '120px'}}></span>
                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
    );
}

export default FeatureTeam