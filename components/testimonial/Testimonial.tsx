import React from "react";
import OwlCarousel from 'react-owl-carousel';
// import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"),{});
const Testimonial = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
                    <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                </div>
                {/* <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                >
                    <div className="item"><h4>1</h4></div>
                    <div className="item"><h4>2</h4></div>
                    <div className="item"><h4>3</h4></div>
                    <div className="item"><h4>4</h4></div>
                    <div className="item"><h4>5</h4></div>
                    <div className="item"><h4>6</h4></div>
                    <div className="item"><h4>7</h4></div>
                    <div className="item"><h4>8</h4></div>
                    <div className="item"><h4>9</h4></div>
                    <div className="item"><h4>10</h4></div>
                    <div className="item"><h4>11</h4></div>
                    <div className="item"><h4>12</h4></div>
                </OwlCarousel> */}
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg" />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.</p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.</p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg" />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.</p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial