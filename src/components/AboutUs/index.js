import React from 'react';
import './index.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our online store! We are a passionate team of enthusiasts
          committed to providing you with high-quality products and exceptional
          customer service.
        </p>
        <p>
          Our mission is to bring you the latest and greatest products in the
          market at competitive prices. We carefully curate our collection to
          ensure that you have access to the most innovative and reliable
          products.
        </p>
        <p>
          Whether you are a tech geek, a fashionista, or a fitness enthusiast,
          we have something for everyone. Our dedicated team is always working
          to expand our product offerings and bring you the best shopping
          experience.
        </p>
        <p>
          Thank you for choosing us. We appreciate your support and look forward
          to serving you!
        </p>
        <img className='image' src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48430/shopping-bags-emoji-clipart-xl.png' alt=''/>
      </div>
    </div>
  );
};

export default AboutUsPage;
