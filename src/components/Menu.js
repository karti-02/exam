import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Menu = () => {
  const foodItems = [
    // Array of food items with image and price
  ];

  return (
    <Container>
      <Row>
        {foodItems.map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <Card>
              {/* Display image, food item details, and price */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;