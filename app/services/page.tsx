import React from 'react';
import Services from '@/components/services/Services'
import PageHeader from '@/components/PageHeader';
import Testimonial from '@/components/testimonial/testimonial';

const About = () => {
  const pageName = [
    'Home',
    'Pages',
    'Services'
  ];

  return (
    <>
      <PageHeader pageName={pageName}></PageHeader>
      <Services></Services>
      <Testimonial></Testimonial>
    </>
  )
}

export default About