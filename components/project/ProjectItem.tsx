'use client'
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import { useSpringCarousel } from 'react-spring-carousel';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const ProjectItem = ({projects}) => {
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useSpringCarousel({
        itemsPerSlide: 5,
        withLoop: true,
        items: projects.map((item,key) => ({
          id: item.key,
          renderItem: (
            <CarouselItem key={key}>
                <Link className="project-item" href="#">
                    <Image className="img-fluid" src={item.image_path} alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    <div className='project-title'>    
                        <h5 className="text-primary mb-0">{item.title}</h5>
                    </div>
                </Link>
            </CarouselItem>
            
          ),
        })),
      });
    return (
        <>
            <ReactWOW animation='fadeIn'>
                <div className="project-carousel wow fadeIn" data-wow-delay="0.1s">

                    {carouselFragment}
                    <div className="owl-nav">
                        <div className="owl-prev" onClick={slideToPrevItem}><FontAwesomeIcon className="bi bi-arrow-right" icon={faChevronLeft} /></div>
                        <div className="owl-next" onClick={slideToNextItem}><FontAwesomeIcon className="bi bi-arrow-right" icon={faChevronRight} /></div>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
}

export default ProjectItem