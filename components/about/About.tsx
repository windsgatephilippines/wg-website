'use client'
import React from 'react'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactWOW from 'react-wow';

const AboutUs = () => {
  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                   
                        
                        <ReactWOW animation='fadeIn'>
                            <div className="col-lg-6">
                                
                                <div className="row gx-3 h-100">
                                    
                                    <div className="col-6 align-self-start animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                                        <img className="img-fluid" src="img/about-1.jpg" />
                                    </div>
                                
                                    <div className="col-6 align-self-end animate__animated animate__fadeInDown" data-wow-delay="0.1s">
                                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                                        <img className="img-fluid" src="img/about-2.jpg" />
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeIn'>
                            <div className="col-lg-6 animate__animated animate__fadeInRight" data-wow-delay="0.1s">
                                <p className="fw-medium text-uppercase text-primary mb-2">About Us</p>
                                <h1 className="display-5 mb-4">Wind’s Gate Philippine Software Development Inc</h1>
                                <p className="mb-4">
                                    Wind’s Gate Philippine Software Development Inc is a Japanese IT solution firm aiming to provide
                                    software application and services with the aid of new technologies available in the market. We
                                    are just a new company since we have been established last October 2017 but our company is made
                                    up of experienced and talented individuals. We are currently located in Cebu for we believe that
                                    Philippines is rich in young and talented individuals. Some of them are not only good at
                                    speaking English language but are also eager to learn Nihongo. And so, we hope to cultivate
                                    these talents, instill in them the value of teamwork and most importantly help them challenge
                                    new technologies as we see them grow and prosper. And currently, our company is filled with
                                    creative and competitive individuals some of them are not only experienced working domestically
                                    but also internationally.
                                </p>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-shrink-0 bg-primary p-4">
                                        <h5 className="text-white">Language</h5>
                                        <h5 className="text-white">Spoken</h5>
                                    </div>
                                    <div className="ms-4">
                                        <p><i className="fa fa-check text-primary me-2"></i>Japanese</p>
                                        <p><i className="fa fa-check text-primary me-2"></i>English</p>
                                        <p><i className="fa fa-check text-primary me-2"></i>Filipino</p>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                                <FontAwesomeIcon className="text-white" icon={faEnvelopeOpen} />
                                            </div>
                                            <div className="ms-3">
                                                <p className="mb-2">Email us</p>
                                                <h5 className="mb-0">mariejoy.vasquez@fidx.co.jp</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <FontAwesomeIcon className="text-white" icon={faPhone} />
                                            </div>
                                            <div className="ms-3">
                                                <p className="mb-2">Call us</p>
                                                <h5 className="mb-0">+(032) 236-6400</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </ReactWOW>
                </div>
            </div>
    </div>
  )
}

export default AboutUs