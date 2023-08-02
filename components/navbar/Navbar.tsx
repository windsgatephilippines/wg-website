import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a className="navbar-brand ps-5 me-0" >
        <Link href="/">
        <h1 className="font-semibold text-xl dark:text-gray-100">
        </h1>
        <p className="text-base font-light text-gray-500 dark:text-gray-300">
        </p>
      </Link>
            <h1 className="text-white m-0">Wind's Gate</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link className="nav-item nav-link" href={"/"}>Home</Link>
                <Link  className="nav-item nav-link" href={"/about"}>About</Link>
                <Link href={"/"} className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                      <Link href={"/"}className="dropdown-item">Projects</Link>
                      <Link href={"/"} className="dropdown-item">Features</Link>
                      <Link href={"/"} className="dropdown-item">Our Team</Link>
                      <Link href={"/"} className="dropdown-item">Testimonial</Link>
                      <Link href="404.html" className="dropdown-item">404 Page</Link>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
        </div>
    </nav>
  )
}

export default Navbar