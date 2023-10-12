import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelopeOpen,faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 justify-content-center mb-5">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light text-center h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '90px', height: '90px'}}>
                                <FontAwesomeIcon className="fa-2x text-primary" icon={faPhone}></FontAwesomeIcon>
                            </div>
                            <h4 className="mb-3">Phone Number</h4>
                            <p className="mb-2">+(032) 236-6400</p>
                            <p className="mb-8"></p>
                            <a className="btn btn-primary px-4" href="tel:+(032) 236-6400">Call Now <i
                                    className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate__animated animate_fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-light text-center h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '90px', height: '90px'}}>
                            <FontAwesomeIcon className="fa-2x text-primary" icon={faEnvelopeOpen}></FontAwesomeIcon>
                            </div>
                            <h4 className="mb-3">Email Address</h4>
                            <p className="mb-2">mariejoy.vasquez@fidx.co.jp</p>
                            {/* <p className="mb-4">support@example.com</p> */}
                            <a className="btn btn-primary px-4" href="mailto:info@example.com">Email Now <i
                                    className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate__animated animate_fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light text-center h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '90px', height: '90px'}}>
                            <FontAwesomeIcon className="fa-2x text-primary" icon={faMapMarkerAlt}></FontAwesomeIcon>
                            </div>
                            <h4 className="mb-3">Office Address</h4>
                            <p className="mb-2">33E Cebu Exchange Building, Salinas Drive, Lahug, Cebu City</p>
                            {/* <p className="mb-4">+012 345 67890</p> */}
                            <a className="btn btn-primary px-4" href="https://goo.gl/maps/FsznshxgnULBGgkN9"
                                target="blank">Direction <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 wow animate__animated animate_fadeInUp" data-wow-delay="0.1s">
                    <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1796784178523!2d123.90255947481356!3d10.327501367314179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99922fb5c6e8d%3A0xfa0339f383adbb64!2sCebu%20Exchange%20Tower!5e0!3m2!1sen!2sph!4v1691471199854!5m2!1sen!2sph" 
                    style={{border:"0", minHeight: '450px'}} allowFullScreen={false} ria-hidden="false"
                    tabIndex={0}></iframe>

                        {/* <iframe className="w-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0" style={{minHeight: '450px', border: '0'}} allowFullScreen={false} aria-hidden="false"
                            tabIndex={0}></iframe> */}
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow animate__animated animate_fadeInUp" data-wow-delay="0.1s">
                        <p className="fw-medium text-uppercase text-primary mb-2">Contact Us</p>
                        <h1 className="display-5 mb-4">If You Have Any Queries, Please Feel Free To Contact Us</h1>
                        {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form
                            with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're
                            done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                        <FontAwesomeIcon className="text-white" icon={faPhone}></FontAwesomeIcon>
                                    </div>
                                    <div className="ms-3">
                                        <h6>Call Us</h6>
                                        <span>+(032) 236-6400</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                        <FontAwesomeIcon className="text-white" icon={faEnvelope}></FontAwesomeIcon>
                                    </div>
                                    <div className="ms-3">
                                        <h6>Mail Us</h6>
                                        <span>mariejoy.vasquez@fidx.co.jp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 wow animate__animated animate_fadeInUp" data-wow-delay="0.5s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message"
                                            style={{height: "150px"}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    
    );
}

export default Contact