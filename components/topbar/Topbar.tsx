import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


const Topbar = () => {
  return (
    <div className="container-fluid wg-blue px-0">
        <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
                <div className="h-100 d-inline-flex align-items-center text-white">
                    <span>Follow Us:</span>
                    
                    <Link className="btn btn-link text-light" href='#'><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link className="btn btn-link text-light" href='#'><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link className="btn btn-link text-light" href='#'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    <Link className="btn btn-link text-light" href='#'><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span className="fs-5 fw-bold me-2"><FontAwesomeIcon icon={faPhone} className='me-2' />Call Us:</span>
                    <Link href="tel:+0123456789" className="fs-5 fw-bold">+012 345 6789</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar