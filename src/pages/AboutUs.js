import React from 'react';
import Header from '../components/Header';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

const AboutUs = () => {
  // Sample data for accordion
  const accordionData = [
    {
      title: 'Organization Name',
      content: 'Your organization name goes here.',
    },
    {
      title: 'Address',
      content: 'Your address goes here.',
    },
    {
      title: 'Location',
      content: 'Your location goes here.',
    },
    {
      title: 'Contact Details',
      content: 'Your contact details go here.',
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Accordion data={accordionData} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;