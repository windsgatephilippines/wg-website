'use client'
import React from "react";
import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/lib/OwlCarousel.js';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonial = () => {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
     
    const events = {
        
    };
    var $ = require("jquery");
        if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
        }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
                    <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                </div>
                {/* <OwlCarousel ref="car" options={options}  >
                    <div><h1>111</h1></div>
                    <div><h2>222</h2></div>
                    <div><h3>333</h3></div>
                </OwlCarousel> */}
                {/* <OwlCarousel
              loop={true}
              items={1}
              responsiveRefreshRate={0}
              autoplay={true}
              autoplayTimeout={7000}
              autoplayHoverPause={true}
              nav={true}
              navText={[
                "<i className='icon-arrow-prev'></i>",
                "<i className='icon-arrow-next'></i>"
              ]}
              dots={false}
              margin={20}
            >
              <div className="item"></div>
              <div className="item"></div>
            </OwlCarousel> */}
                
            </div>
        </div>
    );
}

export default Testimonial