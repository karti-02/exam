import React from 'react';
import Header from '../components/Header';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

const Menu = () => {
  // Sample data for food items
  const foodItems = [
    { name: 'Food Item 1', image: 'image_url_1.jpg', price: '$10' },
    { name: 'Food Item 2', image: 'image_url_2.jpg', price: '$12' },
    // Add more items
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4">
          {foodItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <FoodCard name={item.name} image={item.image} price={item.price} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;