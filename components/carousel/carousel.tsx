'use client';
import React from 'react';
import ReactWOW from 'react-wow';
import {useSpringCarousel} from 'react-spring-carousel';
import { CarouselItem } from 'react-bootstrap';
import Image from 'next/image';
// const useSpringCarousel = require('react-spring-carousel');

const Carousel = () => {
    const items = [
        {
            title: 'Software Solution Providing Company',
            sub_title: '25 Years of Working Experience',
            image_path: '/../public/img/carousel-1.jpg',
            button_name: 'Explore More',
            link: '#'
        },
        {
            title: 'Software Solution Providing Company',
            sub_title: '25 Years of Working Experience',
            image_path: '/../public/img/carousel-2.jpg',
            button_name: 'Explore More',
            link: '#'
        }
    ];
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
    } = useSpringCarousel({
        withLoop: true,
        items: items.map((item,key) => ({
           
            id: key,
            renderItem: (
            <CarouselItem>
                <div key={key}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image className="w-100" src={item.image_path} alt="Image"  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-start">
                                    {/* <ReactWOW animation='slideInRight'> */}
                                    <p className="fs-5 fw-medium text-primary text-uppercase animate__animated animated animate__slideInRight">{item.sub_title}</p>
                                    
                                    <h1 className="display-1 text-white mb-5 animate__animated animate__slideInRight">{item.title}</h1>
                                    <a href="#" className="btn btn-primary py-3 px-5 animate__animated animate__slideInRight">{item.button_name}</a>
                                    {/* </ReactWOW> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselItem>
          ),
        })),
    });
  return (
    <div className="container-fluid px-0 mb-5">
       
            <div className="carousel-inner">
                {carouselFragment}
            </div>
            <button className="carousel-control-prev" onClick={slideToPrevItem} type="button" >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" onClick={slideToNextItem} type="button">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        
    </div>
  )
}

export default Carousel