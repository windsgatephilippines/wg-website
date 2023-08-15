import React from 'react';
import { CarouselItem } from "react-bootstrap";
import { useSpringCarousel } from 'react-spring-carousel';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowLeftLong, faArrowRight, faArrowRightLong, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


const TestimonialItem = ({testimonials}) => {
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useSpringCarousel({
        itemsPerSlide: 3,
        withLoop: true,
        items: testimonials.map((item,key) => ({
          id: item.key,
          renderItem: (
            <CarouselItem key={key}>
              <div className="testimonial-item text-center">
                <div className="testimonial-img position-relative">
                  <Image className="img-fluid rounded-circle mx-auto" src={item.image_path} alt="service_image" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                  <div className="btn-square bg-primary rounded-circle">
                    <i className="fa fa-quote-left text-white"></i>
                    <FontAwesomeIcon className="text-white" icon={faQuoteLeft} />
                  </div>
                </div>
                <div className="testimonial-text text-center rounded p-4">
                    <p className='font-secondary'>{item.testimonial}</p>
                    <h5 className="mb-1 fw-bold">{item.name}</h5>
                    <span className="fst-italic">{item.position}</span>
                </div>
                
                </div>
            </CarouselItem>
          ),
        })),
      });
    return (
        
        <div className="testimonial-carousel">
        
            {carouselFragment}
          <div className="owl-nav">
            <div className="owl-prev" onClick={slideToPrevItem}><FontAwesomeIcon className="bi bi-arrow-right" icon={faArrowLeftLong} /></div>
            <div className="owl-next" onClick={slideToNextItem}><FontAwesomeIcon className="bi bi-arrow-right" icon={faArrowRightLong} /></div>
            </div>
          </div>
    );
}

export default TestimonialItem