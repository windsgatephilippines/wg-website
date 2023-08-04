import React from 'react'
import Contact from '../../components/contact/contact'
import PageHeader from '@/components/PageHeader';

const ContactUs = () => {
  const pageName = [
    'Home',
    'Pages',
    'Contact Us'
  ];
  return (
    <>
    <PageHeader pageName={pageName}></PageHeader>
    <Contact></Contact>
    </>
  )
}

export default ContactUs