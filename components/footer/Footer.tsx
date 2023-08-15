import React from 'react'
import CopyRight from './CopyRight'
import Link from 'next/link'
import {faTwitter,faFacebookF,faYoutube,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 text-start">
                        <h5 className="text-white mb-4">Our Office</h5>
                        <p className="mb-2"><FontAwesomeIcon className='me-3' icon={faLocationDot}/>123 Street, New York, USA</p>
                        <p className="mb-2"><FontAwesomeIcon className='me-3' icon={faPhone}/>+012 345 67890</p>
                        <p className="mb-2"><FontAwesomeIcon className='me-3' icon={faEnvelope}/>info@example.com</p>
                        <div className="d-flex pt-3">
                            <Link className="btn btn-square btn-primary rounded-circle me-2" href="#">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                                   
                            <Link className="btn btn-square btn-primary rounded-circle me-2" href="">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </Link>
                            <Link className="btn btn-square btn-primary rounded-circle me-2" href="">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </Link>
                            <Link className="btn btn-square btn-primary rounded-circle me-2" href="">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <Link className="btn btn-link d-block text-start" href=""><FontAwesomeIcon className='me-3' icon={faChevronRight}/>About Us</Link>
                        <Link className="btn btn-link d-block text-start" href=""><FontAwesomeIcon className='me-3' icon={faChevronRight}/>Contact Us</Link>
                        <Link className="btn btn-link d-block text-start" href=""><FontAwesomeIcon className='me-3' icon={faChevronRight}/>Our Services</Link>
                        <Link className="btn btn-link d-block text-start" href=""><FontAwesomeIcon className='me-3' icon={faChevronRight}/>Terms & Condition</Link>
                        <Link className="btn btn-link d-block text-start" href=""><FontAwesomeIcon className='me-3' icon={faChevronRight}/>Support</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Business Hours</h5>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-light">09:00 am - 07:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-light">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-light">Closed</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative w-100">
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email" />
                            <button type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CopyRight></CopyRight> */}
    </div>
  )
}

export default Footer