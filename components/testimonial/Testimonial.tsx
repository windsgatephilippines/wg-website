'use client'
import React from "react";
import TestimonialItem from "./TestimonialItem";
import ReactWOW from 'react-wow';

const Testimonial = ({testimonials}) => {
    
    return (
      <>
      <ReactWOW animation="fadeInUp">
      <div className="text-center mx-auto wow animate__animated animate__fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px", visibility: "visible"}}>
          <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
          <h1 className="display-5 mb-5">What Our Clients Say!</h1>
      </div>
      </ReactWOW>
      <TestimonialItem testimonials={testimonials} />
      </>
    );
   
}

export default Testimonial