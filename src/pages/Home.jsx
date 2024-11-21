import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <TestimonialCard/>
      <ServiceCard/>
    </>
  );
};

export default Home;
