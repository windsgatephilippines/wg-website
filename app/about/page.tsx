import React from 'react';
import AboutUs from '@/components/about/About'
import PageHeader from '@/components/PageHeader';

const About = () => {
  const pageName = [
    'Home',
    'Pages',
    'About Us'
  ];

  return (
    <>
      <PageHeader pageName={pageName}></PageHeader>
      <AboutUs></AboutUs>
    </>
  )
}

export default About