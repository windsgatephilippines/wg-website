import React from 'react'
import ServiceItem from './ServiceItem';

const Services = () => {
    const services = [
        {
            name: 'Civil & Gas Engineering',
            description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
            image_path: '/../public/img/service-1.jpg'
          },
        {
          name: 'Power & Energy Engineering',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image_path: '/../public/img/service-2.jpg'
        },
        {
          name: 'Plumbing & Water Treatment',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image_path: '/../public/img/service-3.jpg'
        },
        {
            name: 'Civil & Gas Engineering',
            description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
            image_path: '/../public/img/service-1.jpg'
          },
        {
          name: 'Power & Energy Engineering',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image_path: '/../public/img/service-2.jpg'
        },
        {
          name: 'Plumbing & Water Treatment',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image_path: '/../public/img/service-3.jpg'
        },
      ];
    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Our Services</p>
                    <h1 className="display-5 mb-4">We Provide Best Industrial Services</h1>
                </div>
                <div className="row gy-5 gx-4">
                    <ServiceItem services={services} />
                </div>
            </div>
        </div>
        
    );
}

export default Services;