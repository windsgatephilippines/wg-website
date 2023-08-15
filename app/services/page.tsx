'use client'
import React from 'react';
import Services from '@/components/services/Services'
import PageHeader from '@/components/PageHeader';
import Testimonial from '../../components/testimonial/Testimonial';

const About = () => {
  const pageName = [
    'Home',
    'Pages',
    'Services'
  ];

  const testimonials = [
    {
      name: 'Rob Miller',
      position: 'CEO & Founder',
      image_path: '/../public/img/testimonial-1.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
    {
      name: 'Adam Crew',
      position: 'Project Manager',
      image_path: '/../public/img/testimonial-2.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
    {
      name: 'Peter Farel',
      position: 'Software Engineer',
      image_path: '/../public/img/testimonial-3.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
  ]

  return (
    <>
      <PageHeader pageName={pageName}></PageHeader>
      <Services></Services>
      <Testimonial testimonials={testimonials}></Testimonial>
    </>
  )
}

export default About