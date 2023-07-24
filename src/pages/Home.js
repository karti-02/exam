import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Carousel />
        <div className="row mt-4">
          {/* Add food items */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;