import React from 'react';
import './Home.css';

import heroImage from './assets/ella-olsson-yb6bm_66Jdk-unsplash.jpg';

const Home = (props) => {
  return (
    <div className='hero-container'>
      <div className='hero-section-left'>
        <p className='hero-title'>Bienvenido a nuestra cocina de corazon</p>
        <p className='hero-message'>
          Ven y disfruta de nuestros deliciosos platos pensados en los mejores
          sabores del mar
        </p>
      </div>
      <div className='hero-section-right'>
        <img
          src={heroImage}
          alt='Imagen de una comida servida en un plato negro'
          className='hero-image'
        />
      </div>
    </div>
  );
};

export default Home;
